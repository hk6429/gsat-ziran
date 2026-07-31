import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "bank.js"), "utf8"), context);

const banks = new Map(context.window.BANK.map(bank => [bank.year, bank]));
const groupNames = { T: "all", H: "high", L: "low" };

function reportPath(year) {
  const directory = path.join(root, "sources", "official", String(year));
  const candidates = fs.readdirSync(directory)
    .filter(name => /(?:work-report|gsat-report)\.pdf$/.test(name))
    .sort();
  if (candidates.length !== 1) {
    throw new Error(`${year}: expected one official work report, got ${candidates.length}`);
  }
  return path.join(directory, candidates[0]);
}

function groupRowsFromReport(year, expectedQuestions) {
  const source = reportPath(year);
  const textPath = path.join(os.tmpdir(), `gsat-ziran-${process.pid}-${year}.txt`);
  try {
    execFileSync("pdftotext", ["-layout", source, textPath], { stdio: "pipe" });
    const text = fs.readFileSync(textPath, "utf8");
    const parseRows = input => {
      const parsed = [];
      for (const line of input.split(/\r?\n/)) {
        const match = line.match(/^\s*(?:\*?(\d+)\s+)?(T|H|L)\s+(.+)$/);
        if (!match) continue;
        const values = [...match[3].matchAll(/\*?\s*(\d+)/g)].map(item => Number(item[1]));
        if (values.length >= 4) {
          parsed.push({
            questionNo: match[1] ? Number(match[1]) : null,
            group: match[2],
            values
          });
        }
      }
      return parsed;
    };
    const rows = parseRows(text);
    const needed = expectedQuestions.length * 3;
    const headingPattern = /自然科\s*選擇題選項分析/g;
    for (const match of text.matchAll(headingPattern)) {
      const headingContext = text.slice(match.index, match.index + 500);
      if (!/題號\s+(?:組別|類別)\s+未答/.test(headingContext)) continue;
      const sectionRows = parseRows(text.slice(match.index));
      const block = sectionRows.slice(0, needed);
      const validGroups = block.length === needed && block.every(
        (row, index) => row.group === ["T", "H", "L"][index % 3]
      );
      if (validGroups) return { source, rows: block };
    }
    if (rows.length < needed) {
      throw new Error(`${year}: expected at least ${needed} group rows, got ${rows.length}`);
    }
    let matchingBlock = null;
    let bestScore = -Infinity;
    for (let start = 0; start <= rows.length - needed; start += 1) {
      const block = rows.slice(start, start + needed);
      const validGroups = block.every(
        (row, index) => row.group === ["T", "H", "L"][index % 3]
      );
      if (!validGroups) continue;
      const actualQuestionNumbers = expectedQuestions.map((_, index) => {
        const triple = block.slice(index * 3, index * 3 + 3);
        return triple.find(row => row.questionNo != null)?.questionNo ?? null;
      });
      const validNumbers = actualQuestionNumbers.every(
        (questionNo, index) => questionNo === expectedQuestions[index].no
      );
      const optionCountScore = expectedQuestions.reduce((total, question, index) => {
        const expectedCells = Object.keys(question.options).length + 1;
        return total + block
          .slice(index * 3, index * 3 + 3)
          .reduce(
            (subtotal, row) => subtotal - Math.abs(row.values.length - expectedCells),
            0
          );
      }, 0);
      if (validNumbers && optionCountScore > bestScore) {
        matchingBlock = block;
        bestScore = optionCountScore;
      }
    }
    if (!matchingBlock) {
      throw new Error(
        `${year}: could not find official T/H/L triples matching all question numbers`
      );
    }
    return { source, rows: matchingBlock };
  } finally {
    fs.rmSync(textPath, { force: true });
  }
}

function extractYear(year) {
  const bank = banks.get(year);
  if (!bank) throw new Error(`${year}: question bank is missing`);
  const choiceQuestions = bank.questions.filter(question => !question.written);
  const { source, rows } = groupRowsFromReport(
    year,
    choiceQuestions
  );
  const extracted = {};

  choiceQuestions.forEach((question, index) => {
    const triple = rows.slice(index * 3, index * 3 + 3);
    if (triple.map(row => row.group).join("") !== "THL") {
      throw new Error(`${question.id}: official group order is invalid`);
    }
    const optionKeys = Object.keys(question.options);
    const groups = {};
    for (const row of triple) {
      if (row.values.length < optionKeys.length + 1) {
        throw new Error(
          `${question.id} ${row.group}: official option cells are incomplete ` +
          `(expected ${optionKeys.length + 1}, got ${row.values.length}: ${row.values.join(",")})`
        );
      }
      groups[groupNames[row.group]] = {
        unanswered: row.values[0],
        options: Object.fromEntries(
          optionKeys.map((key, optionIndex) => [key, row.values[optionIndex + 1]])
        )
      };
    }
    extracted[String(question.no)] = { groups };
  });

  const sourceName = path.basename(source);
  const destination = path.join(
    root,
    "sources",
    "official",
    String(year),
    `${year}-option-analysis.json`
  );
  fs.writeFileSync(destination, `${JSON.stringify({
    year,
    subject: "自然",
    metric: "selectionRate",
    unit: "percent",
    sourceFile: `sources/official/${year}/${sourceName}`,
    questions: extracted
  }, null, 2)}\n`);
  console.log(`REPORT_OPTION_STATS_EXTRACTED year=${year} questions=${choiceQuestions.length}`);
}

for (let year = 102; year <= 114; year += 1) extractYear(year);

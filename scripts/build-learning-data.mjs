import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "bank.js"), "utf8"), context);

const questions = new Map(
  context.window.BANK.flatMap(bank =>
    bank.questions.map(question => [question.id, { ...question, year: bank.year }])
  )
);

function parseStatsGroup(line, optionKeys, questionNo = null) {
  const pattern = questionNo == null
    ? /^\s*(H|L)\s+(\d+)\s+(.+)$/
    : new RegExp(`^\\s*\\*?${questionNo}\\s+T\\s+(\\d+)\\s+(.+)$`);
  const match = line.match(pattern);
  if (!match) return null;
  const unanswered = Number(match[questionNo == null ? 2 : 1]);
  const values = match[questionNo == null ? 3 : 2]
    .trim()
    .split(/\s+/)
    .map(value => Number(value.replace("*", "")));
  if (values.length < optionKeys.length || values.slice(0, optionKeys.length).some(Number.isNaN)) return null;
  return {
    unanswered,
    options: Object.fromEntries(optionKeys.map((key, index) => [key, values[index]]))
  };
}

function parse115OptionStats() {
  const text = fs.readFileSync(
    path.join(root, "sources", "official", "115", "115-natural-stats.txt"),
    "utf8"
  );
  const lines = text.split(/\r?\n/);
  const stats = {};

  for (let index = 0; index < lines.length; index += 1) {
    const numberMatch = lines[index].match(/^\s*\*?(\d+)\s+T\s+/);
    if (!numberMatch) continue;
    const questionNo = Number(numberMatch[1]);
    const question = questions.get(`學-115-${questionNo}`);
    if (!question || question.written) continue;
    const optionKeys = Object.keys(question.options);
    const all = parseStatsGroup(lines[index], optionKeys, questionNo);
    const high = parseStatsGroup(lines[index + 1] || "", optionKeys);
    const low = parseStatsGroup(lines[index + 2] || "", optionKeys);
    if (!all || !high || !low) {
      throw new Error(`115 年第 ${questionNo} 題選項統計解析失敗`);
    }
    stats[question.id] = {
      metric: "selectionRate",
      unit: "percent",
      groups: { all, high, low },
      source: {
        label: "大考中心 115 學年度自然科選擇題選項分析",
        localFile: "sources/official/115/115-natural-stats.pdf"
      }
    };
  }
  return stats;
}

function parseHistoricalOptionStats() {
  const stats = {};
  const years = [
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
    102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114
  ];
  for (const year of years) {
    const source = JSON.parse(fs.readFileSync(
      path.join(root, "sources", "official", String(year), `${year}-option-analysis.json`),
      "utf8"
    ));
    for (const [questionNo, record] of Object.entries(source.questions)) {
      const question = questions.get(`學-${year}-${questionNo}`);
      if (!question || question.written) {
        throw new Error(`${year} 年第 ${questionNo} 題找不到對應選擇題`);
      }
      const optionKeys = Object.keys(question.options);
      const missingOptions = new Set();
      const groups = Object.fromEntries(
        ["all", "high", "low"].map(groupName => {
          const group = record.groups[groupName];
          const options = Object.fromEntries(optionKeys.flatMap(key => {
            if (!Number.isFinite(group.options[key])) {
              missingOptions.add(key);
              return [];
            }
            return [[key, group.options[key]]];
          }));
          return [groupName, { unanswered: group.unanswered, options }];
        })
      );
      stats[question.id] = {
        metric: "selectionRate",
        unit: "percent",
        groups,
        ...(missingOptions.size ? {
          completeness: "partial",
          missingOptions: [...missingOptions]
        } : {}),
        source: {
          label: `大考中心 ${year} 學年度自然科選擇題選項分析`,
          localFile: source.sourceFile
        }
      };
    }
  }
  return stats;
}

const optionStats = { ...parseHistoricalOptionStats(), ...parse115OptionStats() };
const output = `window.LEARNING_DATA = window.LEARNING_DATA || {};\n` +
  `window.LEARNING_DATA.optionStats = ${JSON.stringify(optionStats, null, 2)};\n` +
  `window.LEARNING_DATA.explanations = window.LEARNING_DATA.explanations || {};\n`;

fs.writeFileSync(path.join(root, "data", "learning.js"), output);
console.log(`LEARNING_DATA_OK optionStats=${Object.keys(optionStats).length}`);

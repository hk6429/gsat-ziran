import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
global.window = {};
await import(pathToFileURL(path.join(root, "data", "bank.js")));
const banks = [...(window.BANK || [])].sort((a, b) => b.year - a.year);

const expected = {
  115: { total:56, choice:48, written:8, stats:30, imageRefs:65 },
  114: { total:57, choice:48, written:9, stats:21, imageRefs:70 },
  113: { total:56, choice:48, written:8, stats:22, imageRefs:60 },
  112: { total:60, choice:52, written:8, stats:31, imageRefs:63 },
  111: { total:60, choice:52, written:8, stats:23, imageRefs:67 },
  110: { total:68, choice:68, written:0, stats:37, imageRefs:68 },
  109: { total:68, choice:68, written:0, stats:42, imageRefs:68 },
  108: { total:68, choice:68, written:0, stats:40, imageRefs:68 }
};
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const allowedCats = new Set(["E", "P", "C", "B", "X"]);

function answersFromOfficialText(year) {
  const filename = path.join(root, "sources", "official", String(year), `${year}-natural-answers.txt`);
  const text = fs.readFileSync(filename, "utf8");
  const answers = {};
  for (const line of text.split("\n")) {
    for (const match of line.matchAll(/(\d{1,2})\s+([A-F]+|／)/g)) {
      answers[match[1]] = match[2] === "／" ? null : match[2];
    }
  }
  return answers;
}

check(banks.length === 8, "題庫必須正好載入 108–115 八個學年度");
check(banks.map(bank => bank.year).join(",") === "115,114,113,112,111,110,109,108", "題庫年份必須為 108–115");

let totalQuestions = 0;
let totalChoices = 0;
let totalWritten = 0;
let totalOfficialMatches = 0;
let totalImageRefs = 0;
const allIds = [];

for (const bank of banks) {
  const target = expected[bank.year];
  check(Boolean(target), `出現未預期年份：${bank.year}`);
  if (!target) continue;

  const officialTextAnswers = answersFromOfficialText(bank.year);
  const sourceJson = JSON.parse(fs.readFileSync(
    path.join(root, "sources", "official", String(bank.year), "answer-key.json"),
    "utf8"
  )).answers;
  const choiceCount = bank.questions.filter(q => !q.written).length;
  const writtenCount = bank.questions.filter(q => q.written).length;
  const imageRefs = bank.questions.flatMap(q => q.pages).length;

  check(Object.keys(officialTextAnswers).length === target.total, `${bank.year} 官方答案 PDF 文字解析題數不符`);
  check(bank.questions.length === target.total, `${bank.year} 題庫必須有 ${target.total} 題`);
  check(choiceCount === target.choice, `${bank.year} 選擇題必須有 ${target.choice} 題`);
  check(writtenCount === target.written, `${bank.year} 非選擇題必須有 ${target.written} 題`);
  check(bank.questions.filter(q => q.pass != null).length === target.stats, `${bank.year} 官方答對率題數不符`);
  check(imageRefs === target.imageRefs, `${bank.year} 官方頁面引用數不符`);
  check(new Set(bank.questions.map(q => q.no)).size === target.total, `${bank.year} 題號不可重複`);
  check(bank.questions.every((q, i) => q.no === i + 1), `${bank.year} 題號必須連續為 1–${target.total}`);

  for (const q of bank.questions) {
    const official = officialTextAnswers[String(q.no)];
    check(q.answer === official, `${bank.year} 第 ${q.no} 題答案與官方 PDF 不一致`);
    check(sourceJson[String(q.no)] === official, `${bank.year} 第 ${q.no} 題來源 JSON 與官方 PDF 不一致`);
    check(q.id === `學-${bank.year}-${q.no}`, `${bank.year} 第 ${q.no} 題 ID 不合法`);
    check(allowedCats.has(q.cat), `${bank.year} 第 ${q.no} 題分類代碼不合法：${q.cat}`);
    check(Array.isArray(q.tags) && q.tags.length === 2 && q.tags.every(Boolean), `${bank.year} 第 ${q.no} 題必須有 2 個有效標籤`);
    check(typeof q.stem === "string" && q.stem.trim().length > 4, `${bank.year} 第 ${q.no} 題題幹缺漏`);
    check(Array.isArray(q.pages) && q.pages.length > 0, `${bank.year} 第 ${q.no} 題缺官方頁面`);
    for (const page of q.pages) {
      check(page.includes(`/official/${bank.year}/`), `${bank.year} 第 ${q.no} 題引用錯誤年份頁面：${page}`);
      check(fs.existsSync(path.join(root, page)), `${bank.year} 第 ${q.no} 題頁面不存在：${page}`);
    }
    if (q.written) {
      check(q.answer == null, `${bank.year} 第 ${q.no} 題非選擇題不應有選項答案`);
      check(typeof q.referenceAnswer === "string" && q.referenceAnswer.length > 8, `${bank.year} 第 ${q.no} 題缺官方評分要點`);
    } else {
      check(/^[A-F]+$/.test(q.answer), `${bank.year} 第 ${q.no} 題答案格式不合法：${q.answer}`);
      check(/^ABCDE(?:F)?$/.test(Object.keys(q.options).join("")), `${bank.year} 第 ${q.no} 題選項必須保持 A–E 或 A–F 順序`);
      check(q.multi === (q.answer.length > 1), `${bank.year} 第 ${q.no} 題 multi 與答案數量不一致`);
      check(q.alternateAnswers == null || (
        Array.isArray(q.alternateAnswers) &&
        q.alternateAnswers.length > 0 &&
        q.alternateAnswers.every(answer => /^[A-F]+$/.test(answer))
      ), `${bank.year} 第 ${q.no} 題替代答案格式不合法`);
      totalOfficialMatches += q.answer === official ? 1 : 0;
    }
    check(q.pass == null || (typeof q.pass === "number" && q.pass >= 0 && q.pass <= 1), `${bank.year} 第 ${q.no} 題 pass 不合法`);
    allIds.push(q.id);
  }

  totalQuestions += bank.questions.length;
  totalChoices += choiceCount;
  totalWritten += writtenCount;
  totalImageRefs += imageRefs;
}

check(new Set(allIds).size === allIds.length, "跨年份題目 ID 不可重複");

for (const file of ["index.html", "check.html", "about.html", "privacy.html", "app.js", "check.js", "styles.css", "data/bank.js"]) {
  check(fs.existsSync(path.join(root, file)), `缺少網站檔案：${file}`);
}

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const checkHtml = fs.readFileSync(path.join(root, "check.html"), "utf8");
check(/id="yearFilter"/.test(indexHtml), "首頁缺少年份篩選器");
check(/data\/bank\.js/.test(indexHtml) && /data\/bank\.js/.test(checkHtml), "首頁與查題頁必須載入多年份 bank.js");

const publicText = ["index.html", "check.html", "about.html", "privacy.html", "README.md", "manifest.json", "robots.txt", "sitemap.xml"]
  .map(file => fs.readFileSync(path.join(root, file), "utf8")).join("\n");
check(!/gsat-guowen|指考國文|國文題庫/.test(publicText), "公開檔案仍含國文站舊文案或網址");
check(/gsat-ziran\.vercel\.app/.test(publicText), "公開檔案缺正式站 canonical 網址");

if (errors.length) {
  console.error(`VALIDATE=FAIL errors=${errors.length}`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `VALIDATE=PASS years=115,114,113,112,111,110,109,108 questions=${totalQuestions} choices=${totalChoices} ` +
  `written=${totalWritten} officialAnswerMatches=${totalOfficialMatches} imageRefs=${totalImageRefs}`
);

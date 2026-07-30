import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
global.window = {};
await import(pathToFileURL(path.join(root, "data", "n115.js")));
const bank = window.BANK?.[0];
const sourceAnswers = JSON.parse(fs.readFileSync(path.join(root, "sources", "official", "115", "answer-key.json"), "utf8")).answers;

const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const allowedCats = new Set(["E", "P", "C", "B", "X"]);

check(bank?.year === 115, "題庫年份必須是 115");
check(bank?.questions?.length === 56, "題庫必須有 56 題");
check(bank?.questions.filter(q => !q.written).length === 48, "選擇題必須有 48 題");
check(bank?.questions.filter(q => q.written).length === 8, "非選擇題必須有 8 題");
check(new Set(bank?.questions.map(q => q.no)).size === 56, "題號不可重複");
check(bank?.questions.every((q, i) => q.no === i + 1), "題號必須連續為 1–56");

for (const q of bank.questions) {
  const official = sourceAnswers[String(q.no)];
  check(q.answer === official, `第 ${q.no} 題答案與官方答案檔不一致`);
  check(allowedCats.has(q.cat), `第 ${q.no} 題分類代碼不合法：${q.cat}`);
  check(Array.isArray(q.tags) && q.tags.length === 2 && q.tags.every(Boolean), `第 ${q.no} 題必須有 2 個有效標籤`);
  check(typeof q.stem === "string" && q.stem.trim().length > 4, `第 ${q.no} 題題幹缺漏`);
  check(Array.isArray(q.pages) && q.pages.length > 0, `第 ${q.no} 題缺官方頁面`);
  for (const page of q.pages) check(fs.existsSync(path.join(root, page)), `第 ${q.no} 題頁面不存在：${page}`);
  if (q.written) {
    check(q.answer == null, `第 ${q.no} 題非選擇題不應有選項答案`);
    check(typeof q.referenceAnswer === "string" && q.referenceAnswer.length > 8, `第 ${q.no} 題缺官方評分要點`);
  } else {
    check(/^[A-E]+$/.test(q.answer), `第 ${q.no} 題答案格式不合法：${q.answer}`);
    check(Object.keys(q.options).join("") === "ABCDE", `第 ${q.no} 題選項必須保持 A–E 順序`);
    check(q.multi === q.answer.length > 1, `第 ${q.no} 題 multi 與答案數量不一致`);
  }
  check(q.pass == null || (typeof q.pass === "number" && q.pass >= 0 && q.pass <= 1), `第 ${q.no} 題 pass 不合法`);
}

for (const file of ["index.html", "check.html", "about.html", "privacy.html", "app.js", "check.js", "styles.css"]) {
  check(fs.existsSync(path.join(root, file)), `缺少網站檔案：${file}`);
}

const publicText = ["index.html", "check.html", "about.html", "privacy.html", "README.md", "manifest.json", "robots.txt", "sitemap.xml"]
  .map(file => fs.readFileSync(path.join(root, file), "utf8")).join("\n");
check(!/gsat-guowen|指考國文|國文題庫/.test(publicText), "公開檔案仍含國文站舊文案或網址");
check(/gsat-ziran\.vercel\.app/.test(publicText), "公開檔案缺正式站 canonical 網址");

if (errors.length) {
  console.error(`VALIDATE=FAIL errors=${errors.length}`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`VALIDATE=PASS questions=56 choices=48 written=8 officialAnswerMatches=48 imageRefs=${bank.questions.flatMap(q => q.pages).length}`);

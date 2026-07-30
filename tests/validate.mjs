import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
global.window = {};
await import(pathToFileURL(path.join(root, "data", "bank.js")));
const banks = [...(window.BANK || [])].sort((a, b) => b.year - a.year);

const expected = {
  87: { total:68, choice:68, written:0, stats:0, imageRefs:68 },
  88: { total:66, choice:66, written:0, stats:0, imageRefs:66 },
  89: { total:66, choice:66, written:0, stats:0, imageRefs:66 },
  90: { total:65, choice:65, written:0, stats:0, imageRefs:65 },
  91: { total:68, choice:68, written:0, stats:68, imageRefs:68 },
  92: { total:68, choice:68, written:0, stats:67, imageRefs:68 },
  93: { total:68, choice:68, written:0, stats:65, imageRefs:68 },
  94: { total:68, choice:68, written:0, stats:67, imageRefs:68 },
  115: { total:56, choice:48, written:8, stats:30, imageRefs:65 },
  114: { total:57, choice:48, written:9, stats:21, imageRefs:70 },
  113: { total:56, choice:48, written:8, stats:22, imageRefs:60 },
  112: { total:60, choice:52, written:8, stats:31, imageRefs:63 },
  111: { total:60, choice:52, written:8, stats:23, imageRefs:67 },
  110: { total:68, choice:68, written:0, stats:37, imageRefs:68 },
  109: { total:68, choice:68, written:0, stats:42, imageRefs:68 },
  108: { total:68, choice:68, written:0, stats:40, imageRefs:68 },
  107: { total:68, choice:68, written:0, stats:42, imageRefs:68 },
  106: { total:68, choice:68, written:0, stats:36, imageRefs:68 },
  105: { total:68, choice:68, written:0, stats:48, imageRefs:68 },
  104: { total:68, choice:68, written:0, stats:42, imageRefs:68 },
  103: { total:68, choice:68, written:0, stats:37, imageRefs:68 },
  102: { total:68, choice:68, written:0, stats:42, imageRefs:68 },
  101: { total:68, choice:68, written:0, stats:47, imageRefs:68 },
  100: { total:68, choice:68, written:0, stats:45, imageRefs:68 },
  99: { total:68, choice:68, written:0, stats:50, imageRefs:68 },
  98: { total:68, choice:68, written:0, stats:60, imageRefs:68 },
  97: { total:68, choice:68, written:0, stats:52, imageRefs:68 },
  96: { total:68, choice:68, written:0, stats:68, imageRefs:68 },
  95: { total:68, choice:68, written:0, stats:68, imageRefs:68 }
};
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const allowedCats = new Set(["E", "P", "C", "B", "X"]);

function answersFromOfficialText(year) {
  const filename = path.join(root, "sources", "official", String(year), `${year}-natural-answers.txt`);
  const text = fs.readFileSync(filename, "utf8");
  const answers = {};
  for (const line of text.split("\n")) {
    for (const match of line.matchAll(/(\d{1,2})\s+([A-T]+|／)/g)) {
      answers[match[1]] = match[2] === "／" ? null : match[2];
    }
  }
  if (year === 94 && /43\s+註/.test(text) && /全體到考生均給分/.test(text)) {
    answers["43"] = "FULL_CREDIT";
  }
  if (year === 93) {
    for (const no of ["21", "23", "68"]) answers[no] = "FULL_CREDIT";
  }
  if (year === 92) {
    answers["21"] = "FULL_CREDIT";
    answers["31"] = "A";
  }
  return answers;
}

check(banks.length === 29, "題庫必須正好載入 87–115 二十九個學年度");
check(banks.map(bank => bank.year).join(",") === "115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87", "題庫年份必須為 87–115");

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
  const expectedNumbers = bank.year === 88
    ? [...Array.from({ length: 47 }, (_, index) => index + 1), ...Array.from({ length: 19 }, (_, index) => index + 61)]
    : bank.year === 89
    ? [...Array.from({ length: 49 }, (_, index) => index + 1), ...Array.from({ length: 17 }, (_, index) => index + 61)]
    : bank.year === 90
      ? [...Array.from({ length: 48 }, (_, index) => index + 1), ...Array.from({ length: 17 }, (_, index) => index + 61)]
    : Array.from({ length: target.total }, (_, index) => index + 1);
  check(bank.questions.map(q => q.no).join(",") === expectedNumbers.join(","), `${bank.year} 題號範圍不符合官方原卷`);

  for (const q of bank.questions) {
    const official = officialTextAnswers[String(q.no)];
    if (official === "FULL_CREDIT") {
      check(q.fullCredit === true, `${bank.year} 第 ${q.no} 題必須標記官方全體給分`);
      check(q.answer === "", `${bank.year} 第 ${q.no} 題全體給分題不應偽造選項答案`);
      check(sourceJson[String(q.no)] === "FULL_CREDIT", `${bank.year} 第 ${q.no} 題來源 JSON 必須保留全體給分狀態`);
    } else {
      check(q.answer === official, `${bank.year} 第 ${q.no} 題答案與官方 PDF 不一致`);
      check(sourceJson[String(q.no)] === official, `${bank.year} 第 ${q.no} 題來源 JSON 與官方 PDF 不一致`);
    }
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
    } else if (q.fullCredit) {
      check(q.multi === false, `${bank.year} 第 ${q.no} 題全體給分題不得標成多選題`);
      check(q.pass == null, `${bank.year} 第 ${q.no} 題全體給分題不應將官方 0% 顯示為難度`);
      totalOfficialMatches += official === "FULL_CREDIT" ? 1 : 0;
    } else {
      check(/^[A-T]+$/.test(q.answer), `${bank.year} 第 ${q.no} 題答案格式不合法：${q.answer}`);
      const optionKeys = Object.keys(q.options).join("");
      check(optionKeys === "ABCDEFGHIJKLMNOPQRST".slice(0, optionKeys.length) && optionKeys.length >= 2, `${bank.year} 第 ${q.no} 題選項必須由 A 起依序排列`);
      if (bank.year >= 91 && bank.year <= 104) {
        check(Object.values(q.options).every(option => typeof option === "string" && option.trim()), `${bank.year} 第 ${q.no} 題不可有空白選項`);
      }
      check(q.multi === (q.answer.length > 1), `${bank.year} 第 ${q.no} 題 multi 與答案數量不一致`);
      check(q.alternateAnswers == null || (
        Array.isArray(q.alternateAnswers) &&
        q.alternateAnswers.length > 0 &&
        q.alternateAnswers.every(answer => /^[A-T]+$/.test(answer))
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
const n96q27 = banks.find(bank => bank.year === 96)?.questions.find(q => q.no === 27);
check(n96q27?.answer === "E" && n96q27?.alternateAnswers?.join(",") === "B", "96 年第 27 題必須保留官方 E 或 B 雙答案");
const n95q4 = banks.find(bank => bank.year === 95)?.questions.find(q => q.no === 4);
check(n95q4?.answer === "E" && n95q4?.alternateAnswers?.join(",") === "C", "95 年第 4 題必須保留官方 E 或 C 雙答案");
const n95q58 = banks.find(bank => bank.year === 95)?.questions.find(q => q.no === 58);
check(n95q58?.answer === "B" && n95q58?.alternateAnswers?.join(",") === "C", "95 年第 58 題必須保留官方 B 或 C 雙答案");
const n94q1 = banks.find(bank => bank.year === 94)?.questions.find(q => q.no === 1);
check(n94q1?.answer === "C" && n94q1?.alternateAnswers?.join(",") === "A", "94 年第 1 題必須保留官方 C 或 A 雙答案");
const n94q15 = banks.find(bank => bank.year === 94)?.questions.find(q => q.no === 15);
check(n94q15?.answer === "A" && n94q15?.alternateAnswers?.join(",") === "C", "94 年第 15 題必須保留官方 A 或 C 雙答案");
const n94q43 = banks.find(bank => bank.year === 94)?.questions.find(q => q.no === 43);
check(n94q43?.fullCredit === true && n94q43?.answer === "", "94 年第 43 題必須保留官方全體給分狀態");
const n93q13 = banks.find(bank => bank.year === 93)?.questions.find(q => q.no === 13);
check(Object.keys(n93q13?.options || {}).join("") === "ABCDEFGHIJ", "93 年第 13 題必須完整保留 A–J 共用選項");
const n93q24 = banks.find(bank => bank.year === 93)?.questions.find(q => q.no === 24);
check(n93q24?.answer === "B" && n93q24?.alternateAnswers?.join(",") === "C", "93 年第 24 題必須保留官方 B 或 C 雙答案");
for (const no of [21, 23, 68]) {
  const q = banks.find(bank => bank.year === 93)?.questions.find(question => question.no === no);
  check(q?.fullCredit === true && q?.answer === "", `93 年第 ${no} 題必須保留官方全體給分狀態`);
}
const n92q21 = banks.find(bank => bank.year === 92)?.questions.find(q => q.no === 21);
check(n92q21?.fullCredit === true && n92q21?.answer === "" && n92q21?.pass == null, "92 年第 21 題必須保留官方無答案／全體給分狀態");
const n92q31 = banks.find(bank => bank.year === 92)?.questions.find(q => q.no === 31);
check(n92q31?.answer === "A" && n92q31?.alternateAnswers?.join(",") === "B", "92 年第 31 題必須保留官方 A 或 B 雙答案");
const n92q36 = banks.find(bank => bank.year === 92)?.questions.find(q => q.no === 36);
check(Object.keys(n92q36?.options || {}).join("") === "ABCD", "92 年第 36 題必須保留四個官方圖示選項");
const n91q23 = banks.find(bank => bank.year === 91)?.questions.find(q => q.no === 23);
check(Object.keys(n91q23?.options || {}).join("") === "ABCD", "91 年第 23 題必須保留四個官方圖示選項");
const n91q42 = banks.find(bank => bank.year === 91)?.questions.find(q => q.no === 42);
check(n91q42?.answer === "AG" && Object.keys(n91q42?.options || {}).join("") === "ABCDEFGH", "91 年第 42 題必須保留 A–H 選項與官方 AG 答案");
const n91q60 = banks.find(bank => bank.year === 91)?.questions.find(q => q.no === 60);
check(n91q60?.answer === "A" && Object.keys(n91q60?.options || {}).join("") === "ABCDEF", "91 年第 60 題必須保留 A–F 對應表選項");
const n90q66 = banks.find(bank => bank.year === 90)?.questions.find(q => q.no === 66);
check(n90q66?.answer === "H" && Object.keys(n90q66?.options || {}).join("") === "ABCDEFGHI", "90 年第 66 題必須保留 A–I 分類表選項");
const n90q69 = banks.find(bank => bank.year === 90)?.questions.find(q => q.no === 69);
check(n90q69?.answer === "CG" && Object.keys(n90q69?.options || {}).join("") === "ABCDEFGH", "90 年第 69 題必須保留 A–H 雙欄選項");
const n90q71 = banks.find(bank => bank.year === 90)?.questions.find(q => q.no === 71);
check(n90q71?.answer === "BDGH" && Object.keys(n90q71?.options || {}).join("") === "ABCDEFGH", "90 年第 71 題必須保留 A–H 血型選項");
const n90q77 = banks.find(bank => bank.year === 90)?.questions.find(q => q.no === 77);
check(n90q77?.answer === "BF" && Object.keys(n90q77?.options || {}).join("") === "ABCDEF", "90 年第 77 題必須保留 A–F 雙欄選項");
const n89q67 = banks.find(bank => bank.year === 89)?.questions.find(q => q.no === 67);
check(n89q67?.answer === "BEJ" && Object.keys(n89q67?.options || {}).join("") === "ABCDEFGHIJKL", "89 年第 67 題必須保留 A–L 係數選項");
const n89q68 = banks.find(bank => bank.year === 89)?.questions.find(q => q.no === 68);
check(n89q68?.answer === "KN" && Object.keys(n89q68?.options || {}).join("") === "ABCDEFGHIJKLMNOPQRST", "89 年第 68 題必須保留 A–T 圖示區域選項");
const n88q77 = banks.find(bank => bank.year === 88)?.questions.find(q => q.no === 77);
check(n88q77?.answer === "BCFH" && Object.keys(n88q77?.options || {}).join("") === "ABCDEFGH", "88 年第 77 題必須保留 A–H 選項");
const n88q79 = banks.find(bank => bank.year === 88)?.questions.find(q => q.no === 79);
check(n88q79?.answer === "CFH" && Object.keys(n88q79?.options || {}).join("") === "ABCDEFGHI", "88 年第 79 題必須保留 A–I 對應表選項");
const n87q62 = banks.find(bank => bank.year === 87)?.questions.find(q => q.no === 62);
check(n87q62?.answer === "BFG" && Object.keys(n87q62?.options || {}).join("") === "ABCDEFGH", "87 年第 62 題必須保留 A–H 選項");
const n87q67 = banks.find(bank => bank.year === 87)?.questions.find(q => q.no === 67);
check(n87q67?.answer === "AE" && Object.keys(n87q67?.options || {}).join("") === "ABCDEFGH", "87 年第 67 題必須保留 A–H 染色體選項");

for (const file of ["index.html", "check.html", "about.html", "privacy.html", "app.js", "check.js", "styles.css", "data/bank.js"]) {
  check(fs.existsSync(path.join(root, file)), `缺少網站檔案：${file}`);
}

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const checkHtml = fs.readFileSync(path.join(root, "check.html"), "utf8");
const checkJs = fs.readFileSync(path.join(root, "check.js"), "utf8");
check(/id="yearFilter"/.test(indexHtml), "首頁缺少年份篩選器");
check(/data\/bank\.js/.test(indexHtml) && /data\/bank\.js/.test(checkHtml), "首頁與查題頁必須載入多年份 bank.js");
check(/\\d\{2,3\}/.test(checkJs), "查題頁必須支援二至三位數學年度");
check(/lookupCoverage/.test(checkHtml) && /Math\.min\(\.\.\.years\)/.test(checkJs), "查題頁收錄範圍必須由題庫年份動態產生");
const appJs = fs.readFileSync(path.join(root, "app.js"), "utf8");
check(/q\.fullCredit/.test(appJs), "練習頁必須支援官方全體給分題");
check(/match\(\/\[A-T\]\//.test(appJs), "練習頁必須支援 A–T 圖示選項答案");
check(/q\.fullCredit/.test(checkJs), "查題頁必須支援官方全體給分題");

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
  `VALIDATE=PASS years=115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87 questions=${totalQuestions} choices=${totalChoices} ` +
  `written=${totalWritten} officialAnswerMatches=${totalOfficialMatches} imageRefs=${totalImageRefs}`
);

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
global.window = {};
await import(pathToFileURL(path.join(root, "data", "bank.js")));
await import(pathToFileURL(path.join(root, "data", "learning.js")));
const explanationFiles = [
  "explanations-earth.js",
  "explanations-earth-batch2.js",
  "explanations-earth-batch3.js",
  "explanations-earth-batch4.js",
  "explanations-earth-batch5.js",
  "explanations-earth-batch6.js",
  "explanations-earth-batch7.js",
  "explanations-earth-batch8.js",
  "explanations-earth-batch9.js",
  "explanations-earth-batch10.js",
  "explanations-earth-batch11.js",
  "explanations-earth-batch12.js",
  "explanations-earth-batch13.js",
  "explanations-earth-batch14.js",
  "explanations-earth-batch15.js",
  "explanations-earth-batch16.js",
  "explanations-earth-written.js",
  "explanations-cross-written-earth.js",
  "explanations-cross-batch1.js",
  "explanations-cross-batch2.js",
  "explanations-physics.js",
  "explanations-physics-batch2.js",
  "explanations-physics-batch3.js",
  "explanations-physics-batch4.js",
  "explanations-physics-batch5.js",
  "explanations-physics-batch6.js",
  "explanations-physics-batch7.js",
  "explanations-physics-batch8.js",
  "explanations-physics-batch9.js",
  "explanations-physics-batch10.js",
  "explanations-physics-batch11.js",
  "explanations-physics-batch12.js",
  "explanations-physics-batch13.js",
  "explanations-physics-batch14.js",
  "explanations-physics-batch15.js",
  "explanations-physics-batch16.js",
  "explanations-physics-batch17.js",
  "explanations-physics-written.js",
  "explanations-cross-written-physics.js",
  "explanations-chemistry.js",
  "explanations-chemistry-batch2.js",
  "explanations-chemistry-batch3.js",
  "explanations-chemistry-batch4.js",
  "explanations-chemistry-batch5.js",
  "explanations-chemistry-batch6.js",
  "explanations-chemistry-batch7.js",
  "explanations-chemistry-batch8.js",
  "explanations-chemistry-batch9.js",
  "explanations-chemistry-batch10.js",
  "explanations-chemistry-batch11.js",
  "explanations-chemistry-batch12.js",
  "explanations-chemistry-batch13.js",
  "explanations-chemistry-batch14.js",
  "explanations-chemistry-written.js",
  "explanations-biology.js",
  "explanations-biology-batch2.js",
  "explanations-biology-batch3.js",
  "explanations-biology-batch4.js",
  "explanations-biology-batch5.js",
  "explanations-biology-batch6.js",
  "explanations-biology-batch7.js",
  "explanations-biology-batch8.js",
  "explanations-biology-batch9.js",
  "explanations-biology-batch10.js",
  "explanations-biology-batch11.js",
  "explanations-biology-batch12.js",
  "explanations-biology-batch13.js",
  "explanations-biology-batch14.js",
  "explanations-biology-batch15.js",
  "explanations-biology-batch16.js",
  "explanations-biology-written.js",
  "explanations-full-credit.js"
];
for (const file of explanationFiles) {
  await import(pathToFileURL(path.join(root, "data", file)));
}
const banks = [...(window.BANK || [])].sort((a, b) => b.year - a.year);

const expected = {
  83: { total:69, choice:69, written:0, stats:0, imageRefs:69 },
  84: { total:67, choice:67, written:0, stats:0, imageRefs:67 },
  85: { total:65, choice:65, written:0, stats:0, imageRefs:65 },
  86: { total:66, choice:66, written:0, stats:0, imageRefs:66 },
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
const questionById = new Map(banks.flatMap(bank => bank.questions.map(question => [question.id, question])));

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

check(banks.length === 33, "題庫必須正好載入 83–115 三十三個學年度");
check(banks.map(bank => bank.year).join(",") === "115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83", "題庫年份必須為 83–115");

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
  const expectedNumbers = bank.year === 84
    ? [...Array.from({ length: 60 }, (_, index) => index + 1), ...Array.from({ length: 7 }, (_, index) => index + 81)]
    : bank.year === 85
    ? [...Array.from({ length: 57 }, (_, index) => index + 1), ...Array.from({ length: 8 }, (_, index) => index + 81)]
    : bank.year === 88
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
      check(/^[A-Z]+$/.test(q.answer), `${bank.year} 第 ${q.no} 題答案格式不合法：${q.answer}`);
      const optionKeys = Object.keys(q.options).join("");
      check(optionKeys === "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, optionKeys.length) && optionKeys.length >= 2, `${bank.year} 第 ${q.no} 題選項必須由 A 起依序排列`);
      if (bank.year >= 91 && bank.year <= 104) {
        check(Object.values(q.options).every(option => typeof option === "string" && option.trim()), `${bank.year} 第 ${q.no} 題不可有空白選項`);
      }
      check(q.multi === (q.answer.length > 1), `${bank.year} 第 ${q.no} 題 multi 與答案數量不一致`);
      check(q.alternateAnswers == null || (
        Array.isArray(q.alternateAnswers) &&
        q.alternateAnswers.length > 0 &&
        q.alternateAnswers.every(answer => /^[A-Z]+$/.test(answer))
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
const explanations = window.LEARNING_DATA?.explanations || {};
const optionStats = window.LEARNING_DATA?.optionStats || {};
check(Object.keys(explanations).length === 2128, "逐題專屬、教師覆核解析必須累計 2128 題");
for (const q of questionById.values()) {
  if (q.written) check(Boolean(explanations[q.id]), `${q.id} 非選擇題必須附逐步解析與官方對齊拿分要點`);
  if (q.cat === "X") check(Boolean(explanations[q.id]), `${q.id} 跨科整合題必須附逐步解析`);
}
for (const file of explanationFiles) {
  const source = fs.readFileSync(path.join(root, "data", file), "utf8");
  check(!/window\.BANK|questionMap|question\.tags|question\.options|question\.answer/.test(source), `${file} 不得由題庫欄位動態套用通用解析模板`);
}
check(Object.keys(optionStats).length === 1608, "91–115 年官方選項統計必須完整匯入 1,608 題");
for (const bank of banks.filter(bank => bank.year >= 91)) {
  for (const q of bank.questions.filter(q => !q.written)) {
    check(Boolean(optionStats[q.id]), `${q.id} 必須附上大考中心官方選項畫記率`);
  }
}
for (const [id, explanation] of Object.entries(explanations)) {
  const q = questionById.get(id);
  check(Boolean(q), `${id} 解析找不到原題`);
  if (!q) continue;
  check(explanation.reviewStatus === "approved", `${id} 未經教師覆核的解析不得公開`);
  check(["earth", "physics", "chemistry", "biology"].includes(explanation.reviewerRole), `${id} 缺科任教師角色`);
  check(Boolean(explanation.encouragement && explanation.keyIdea && explanation.takeaway), `${id} 解析缺正向開場、核心概念或帶走句`);
  check(Array.isArray(explanation.steps) && explanation.steps.length >= 2 && explanation.steps.length <= 5, `${id} 解析步驟必須為 2–5 步`);
  if (q.written) {
    check(Array.isArray(explanation.scoringPoints) && explanation.scoringPoints.length >= 1, `${id} 非選擇題解析缺拿分要點`);
  } else {
    check(Object.keys(explanation.optionAnalysis || {}).join("") === Object.keys(q.options || {}).join(""), `${id} 選項解析未完整對應原題`);
    if (q.fullCredit) {
      check(Boolean(explanation.fullCreditNote), `${id} 全體給分解析缺官方註記`);
      check(Object.values(explanation.optionAnalysis || {}).every(note => note.verdict === "neutral"), `${id} 全體給分題不得猜測正確選項`);
    }
  }
  const markedCorrect = Object.entries(explanation.optionAnalysis || {})
    .filter(([, note]) => note.verdict === "correct")
    .map(([key]) => key)
    .join("");
  if (!q.written) check(markedCorrect === q.answer, `${id} 解析的正確選項與官方答案不一致`);
}
for (const [id, stats] of Object.entries(optionStats)) {
  const q = questionById.get(id);
  check(Boolean(q) && /^學-(?:9[1-9]|10[0-9]|11[0-5])-/.test(id), `${id} 選項統計沒有對應官方已匯入年份原題`);
  if (!q) continue;
  check(stats.metric === "selectionRate" && stats.unit === "percent", `${id} 必須明確標示為官方選項畫記百分率`);
  check(/^大考中心 /.test(stats.source?.label || ""), `${id} 選項畫記率缺大考中心來源標示`);
  check(
    typeof stats.source?.localFile === "string" &&
    fs.existsSync(path.join(root, stats.source.localFile)),
    `${id} 選項畫記率缺官方原始檔`
  );
  for (const group of ["all", "high", "low"]) {
    const statsKeys = Object.keys(stats.groups?.[group]?.options || {});
    const questionKeys = Object.keys(q.options);
    check(statsKeys.every(key => questionKeys.includes(key)), `${id} ${group} 組出現原題不存在的選項統計`);
    if (stats.completeness !== "partial") {
      check(statsKeys.join("") === questionKeys.join(""), `${id} ${group} 組選項統計欄位不完整`);
    }
    check(
      Object.values(stats.groups?.[group]?.options || {}).every(value => Number.isFinite(value) && value >= 0 && value <= 100),
      `${id} ${group} 組選項畫記率必須是 0–100 的官方百分比`
    );
    check(Number.isFinite(stats.groups?.[group]?.unanswered), `${id} ${group} 組未答率缺漏`);
  }
}
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
const n86q61 = banks.find(bank => bank.year === 86)?.questions.find(q => q.no === 61);
check(n86q61?.answer === "CE" && Object.keys(n86q61?.options || {}).join("") === "ABCDEFGH", "86 年第 61 題必須保留 A–H 風向選項");
const n86q66 = banks.find(bank => bank.year === 86)?.questions.find(q => q.no === 66);
check(n86q66?.answer === "K" && Object.keys(n86q66?.options || {}).join("") === "ABCDEFGHIJKL", "86 年第 66 題必須保留 A–L 未知物質選項");
const n85q83 = banks.find(bank => bank.year === 85)?.questions.find(q => q.no === 83);
check(n85q83?.answer === "AHIK" && Object.keys(n85q83?.options || {}).join("") === "ABCDEFGHIJKL", "85 年第 83 題必須保留 A–L 電學單位選項");
const n85q86 = banks.find(bank => bank.year === 85)?.questions.find(q => q.no === 86);
check(n85q86?.answer === "CFH" && Object.keys(n85q86?.options || {}).join("") === "ABCDEFGHI", "85 年第 86 題必須保留 A–I 電路選項");
const n84q81 = banks.find(bank => bank.year === 84)?.questions.find(q => q.no === 81);
check(n84q81?.answer === "BJ" && Object.keys(n84q81?.options || {}).sort().join("") === "ABCDEFGHIJ", "84 年第 81 題必須保留 A–J 基因與細胞選項");
const n84q85 = banks.find(bank => bank.year === 84)?.questions.find(q => q.no === 85);
check(n84q85?.answer === "R" && Object.keys(n84q85?.options || {}).join("") === "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "84 年第 85 題必須保留 A–Z 元素代碼選項");
const n83q10 = banks.find(bank => bank.year === 83)?.questions.find(q => q.no === 10);
check(n83q10?.answer === "A" && Object.keys(n83q10?.options || {}).join("") === "ABCD", "83 年第 10 題必須保留四個細菌生長曲線選項");
const n83q53 = banks.find(bank => bank.year === 83)?.questions.find(q => q.no === 53);
check(n83q53?.answer === "D" && /第 53–57 題為綜合型題組/.test(n83q53?.passage || ""), "83 年第 53 題必須保留河口綜合題組情境");

for (const file of ["index.html", "check.html", "about.html", "privacy.html", "app.js", "check.js", "styles.css", "data/bank.js", "data/learning.js", ...explanationFiles.map(file => `data/${file}`)]) {
  check(fs.existsSync(path.join(root, file)), `缺少網站檔案：${file}`);
}

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const checkHtml = fs.readFileSync(path.join(root, "check.html"), "utf8");
const checkJs = fs.readFileSync(path.join(root, "check.js"), "utf8");
check(/id="mainYearOptions"/.test(indexHtml) && /id="mainYearSummary"/.test(indexHtml), "首頁缺少年度複選器");
check(/data\/bank\.js/.test(indexHtml) && /data\/bank\.js/.test(checkHtml), "首頁與查題頁必須載入多年份 bank.js");
check(/\\d\{2,3\}/.test(checkJs), "查題頁必須支援二至三位數學年度");
check(/lookupCoverage/.test(checkHtml) && /Math\.min\(\.\.\.years\)/.test(checkJs), "查題頁收錄範圍必須由題庫年份動態產生");
const appJs = fs.readFileSync(path.join(root, "app.js"), "utf8");
check(/q\.fullCredit/.test(appJs), "練習頁必須支援官方全體給分題");
check(/match\(\/\[A-Z\]\//.test(appJs), "練習頁必須支援 A–Z 圖示選項答案");
check(/q\.fullCredit/.test(checkJs), "查題頁必須支援官方全體給分題");
check(/id="reviewBtn"/.test(indexHtml) && /id="wrongBookBtn"/.test(indexHtml) && /id="historyBtn"/.test(indexHtml), "首頁必須提供複習、錯題本與學習歷程");
check(/id="paperModeBtn"/.test(indexHtml) && /id="paperPanel"/.test(indexHtml), "首頁必須提供教師出卷模式");
check(/id="paperYearQuickOptions"/.test(indexHtml) && /id="paperYearApplyBtn"/.test(indexHtml), "教師出卷必須提供年度複選");
check(/function selectedPaperYears\(\)/.test(appJs) && /years\.has\(Number\(input\.dataset\.year\)\)/.test(appJs), "教師出卷年度複選邏輯不完整");
check(/data\/learning\.js/.test(indexHtml) && /data\/learning\.js/.test(checkHtml), "首頁與查題頁都必須載入教師解析與官方選項統計");

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
  `VALIDATE=PASS years=115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83 questions=${totalQuestions} choices=${totalChoices} ` +
  `written=${totalWritten} officialAnswerMatches=${totalOfficialMatches} explanations=${Object.keys(explanations).length} ` +
  `officialOptionStats=${Object.keys(optionStats).length} imageRefs=${totalImageRefs}`
);

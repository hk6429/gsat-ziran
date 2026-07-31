import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const app = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const index = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const discriminationSource = fs.readFileSync(new URL("../data/discrimination.js", import.meta.url), "utf8");

assert.match(app, /paperLinkOutput[\s\S]*innerHTML\s*=/, "產生的測驗網址必須渲染成可點擊連結");
assert.match(app, /function renderSession\s*\(/, "抽出的題目必須由同頁多題 renderer 顯示");
assert.doesNotMatch(app, /id="nextQuestion"|function nextQuestion\s*\(/, "同頁測驗不得保留逐題下一題導航");
assert.match(index, /id="submitSessionBtn"/, "同頁測驗必須提供集中交卷按鈕");
assert.match(index, /id="discriminationFilter"/, "主篩選必須提供鑑別度條件");
assert.match(index, /data\/discrimination\.js/, "頁面必須載入正式鑑別度資料");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(discriminationSource, context);
const records = Object.values(context.window.LEARNING_DATA?.discrimination || {});
assert.ok(records.length > 1_000, `正式鑑別度資料不足：${records.length}`);
assert.ok(records.every(record => Number.isFinite(record.value) && record.verified === true));

console.log(`UI_WORKFLOW=VERIFIED discrimination=${records.length}`);

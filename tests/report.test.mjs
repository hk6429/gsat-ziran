import assert from "node:assert/strict";
import fs from "node:fs";
import {
  bindReportForm,
  buildReportPayload,
  reportEndpoint,
  reportFormHtml,
  submitReport,
} from "../report-client.js";
import handler, { formatMessage } from "../api/report.js";

function responseRecorder() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.body = value; return this; },
    end() { return this; },
  };
}

const payload = buildReportPayload({
  questionId: "學-115-1",
  year: 115,
  no: 1,
  subject: "地球科學",
  tags: "天文與宇宙、量綱與估算",
  stem: "題幹".repeat(500),
  passage: "題組脈絡".repeat(500),
  options: "選項".repeat(800),
  answer: "C",
  picked: "A",
  explanation: "解析".repeat(700),
  issueType: "圖片或圖表異常",
  note: "圖片看不清楚",
  unexpected: "不可送出",
});

assert.equal(payload.stem.length, 700);
assert.equal(payload.passage.length, 1400);
assert.equal(payload.options.length, 1400);
assert.equal(payload.explanation.length, 1200);
assert.equal("unexpected" in payload, false);

assert.equal(reportEndpoint({ hostname: "gsat-ziran.vercel.app" }), "/api/report");
assert.equal(reportEndpoint({ hostname: "gsat-ziran.pages.dev" }), "https://gsat-ziran.vercel.app/api/report");
assert.equal(reportEndpoint({ hostname: "gsat-ziran.netlify.app" }), "https://gsat-ziran.vercel.app/api/report");

let clientRequest;
await submitReport(
  { questionId: "學-115-1", issueType: "解析不清" },
  { hostname: "gsat-ziran.pages.dev" },
  async (url, options) => {
    clientRequest = { url, options };
    return { ok: true, json: async () => ({ ok: true }) };
  },
);
assert.equal(clientRequest.url, "https://gsat-ziran.vercel.app/api/report");
assert.equal(clientRequest.options.method, "POST");
assert.match(reportFormHtml(), /name="issueType"/);
assert.match(reportFormHtml(), /補充說明（選填）/);

const message = formatMessage({
  questionId: "學-115-1",
  year: 115,
  no: 1,
  subject: "地球科學",
  tags: "天文與宇宙、量綱與估算",
  type: "單選題",
  stem: "陽光從太陽傳到地球約需 500 秒。",
  passage: "第 1 題資料脈絡",
  options: "(A) 0.001\n(B) 0.1\n(C) 1",
  answer: "C",
  picked: "A",
  explanation: "以天文單位比例估算。",
  figures: "https://gsat-ziran.vercel.app/img/official/115/q1.jpg",
  issueType: "圖片或圖表異常",
  note: "圖片裁切不完整",
  url: "https://gsat-ziran.pages.dev/",
  device: "test-browser",
});
for (const expected of [
  "學-115-1", "地球科學", "天文與宇宙", "學生作答：A", "官方答案：C",
  "完整選項", "題組／資料脈絡", "目前解析", "題圖：", "圖片裁切不完整",
]) {
  assert.match(message, new RegExp(expected));
}
assert.ok(message.length <= 3900);

for (const origin of [
  "https://gsat-ziran.vercel.app",
  "https://gsat-ziran.pages.dev",
  "https://gsat-ziran.netlify.app",
]) {
  const res = responseRecorder();
  await handler({ method: "OPTIONS", headers: { origin } }, res);
  assert.equal(res.statusCode, 204);
  assert.equal(res.headers["Access-Control-Allow-Origin"], origin);
}

const invalidOther = responseRecorder();
await handler({
  method: "POST",
  headers: { origin: "https://gsat-ziran.vercel.app", "x-forwarded-for": "203.0.113.50" },
  body: { questionId: "學-115-1", issueType: "其他", note: "太短" },
}, invalidOther);
assert.equal(invalidOther.statusCode, 400);

const invalidOrigin = responseRecorder();
await handler({
  method: "POST",
  headers: { origin: "https://example.com", "x-forwarded-for": "203.0.113.51" },
  body: { questionId: "學-115-1", issueType: "解析不清" },
}, invalidOrigin);
assert.equal(invalidOrigin.statusCode, 403);

const originalFetch = globalThis.fetch;
const originalToken = process.env.TELEGRAM_BOT_TOKEN;
const originalChatId = process.env.TELEGRAM_CHAT_ID;
let telegramRequest;
globalThis.fetch = async (url, options) => {
  telegramRequest = { url, options };
  return { ok: true, json: async () => ({ ok: true }) };
};
process.env.TELEGRAM_BOT_TOKEN = "test-token";
process.env.TELEGRAM_CHAT_ID = "test-chat";
try {
  const res = responseRecorder();
  await handler({
    method: "POST",
    headers: { origin: "https://gsat-ziran.netlify.app", "x-forwarded-for": "203.0.113.52" },
    body: {
      questionId: "學-115-1",
      year: "115",
      no: "1",
      issueType: "解析不清",
      stem: "測試題幹",
      answer: "C",
    },
  }, res);
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { ok: true });
  assert.match(telegramRequest.url, /^https:\/\/api\.telegram\.org\/bottest-token\/sendMessage$/);
  const telegramBody = JSON.parse(telegramRequest.options.body);
  assert.equal(telegramBody.chat_id, "test-chat");
  assert.match(telegramBody.text, /學-115-1/);

  const statuses = [];
  for (let index = 0; index < 7; index += 1) {
    const rateRes = responseRecorder();
    await handler({
      method: "POST",
      headers: { origin: "https://gsat-ziran.pages.dev", "x-forwarded-for": "203.0.113.60" },
      body: { questionId: "學-115-1", issueType: "答案有誤" },
    }, rateRes);
    statuses.push(rateRes.statusCode);
  }
  assert.deepEqual(statuses, [200, 200, 200, 200, 200, 200, 429]);
} finally {
  globalThis.fetch = originalFetch;
  if (originalToken === undefined) delete process.env.TELEGRAM_BOT_TOKEN;
  else process.env.TELEGRAM_BOT_TOKEN = originalToken;
  if (originalChatId === undefined) delete process.env.TELEGRAM_CHAT_ID;
  else process.env.TELEGRAM_CHAT_ID = originalChatId;
}

const appSource = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const checkSource = fs.readFileSync(new URL("../check.js", import.meta.url), "utf8");
const indexHtml = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const checkHtml = fs.readFileSync(new URL("../check.html", import.meta.url), "utf8");
const vercelConfig = fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8");
assert.equal(typeof bindReportForm, "function");
assert.match(appSource, /bindReportForm/);
assert.match(appSource, /reportFormHtml/);
assert.match(appSource, /const selected = q\.written\s*\? ""/, "非選擇題作答內容不得送進回報 payload");
assert.match(checkSource, /bindReportForm/);
assert.match(checkSource, /reportFormHtml/);
assert.match(indexHtml, /type="module"[^>]+app\.js/);
assert.match(checkHtml, /type="module"[^>]+check\.js/);
assert.match(vercelConfig, /https:\/\/gsat-ziran\.vercel\.app/);
assert.doesNotMatch(indexHtml + checkHtml + appSource + checkSource, /TELEGRAM_BOT_TOKEN|api\.telegram\.org\/bot/);

console.log("REPORT_UI=VERIFIED");

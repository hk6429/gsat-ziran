(() => {
  "use strict";
  const banks = window.BANK || [];
  const learningData = window.LEARNING_DATA || {};
  const input = document.getElementById("lookupInput");
  const result = document.getElementById("lookupResult");
  const years = banks.map(bank => bank.year);
  document.getElementById("lookupCoverage").textContent =
    `本頁可核對 ${Math.min(...years)}–${Math.max(...years)} 學年度題目`;

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);

  function teacherExplanationHtml(explanation) {
    if (!explanation || explanation.reviewStatus !== "approved") {
      return '<section class="teacher-explanation pending-explanation"><strong>老師解析正在逐題覆核</strong><p>通過科任教師檢查後才會公開，不用猜的方式補內容。</p></section>';
    }
    return `<section class="teacher-explanation">
      <p class="encouragement">${escapeHtml(explanation.encouragement)}</p>
      <h3>這題先抓一個重點</h3><p>${escapeHtml(explanation.keyIdea)}</p>
      <h3>一步一步想</h3><ol>${explanation.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      <h3>每個選項怎麼看</h3><ul class="option-analysis">${Object.entries(explanation.optionAnalysis || {}).map(([key, note]) =>
        `<li class="${note.verdict === "correct" ? "correct-note" : ""}"><b>${key}</b>：${escapeHtml(note.reason)}</li>`
      ).join("")}</ul>
      <p class="takeaway"><strong>帶去下一題：</strong>${escapeHtml(explanation.takeaway)}</p>
    </section>`;
  }

  function optionStatsHtml(q, stats) {
    if (!stats?.groups) return "";
    const correct = new Set(String(q.answer || "").split(""));
    const rows = Object.entries(stats.groups.all.options).map(([key, rate]) => `
      <div class="option-rate-row"><span>(${key})${correct.has(key) ? " ✓正解" : ""}</span>
      <span class="option-rate-track"><i class="${correct.has(key) ? "correct-rate" : ""}" style="width:${Math.min(rate, 100)}%"></i></span><b>${rate}%</b></div>`).join("");
    return `<section class="option-stats"><strong>全體考生選項畫記率（大考中心官方統計）</strong>
      <div class="option-rate-rows">${rows}</div>
      <small>未答 ${stats.groups.all.unanswered}%${q.multi ? "；多選題各選項畫記率合計不一定是 100%。" : "；合計可能因四捨五入略有差異。"}</small>
    </section>`;
  }

  function render() {
    const match = input.value.trim().match(/^(?:學[-－]?)?(\d{2,3})\s*[-－]\s*(\d{1,2})$/);
    if (!match) {
      result.innerHTML = '<p class="notice">格式請輸入「學年度-題號」，例如 99-49 或 115-38。</p>';
      return;
    }
    const year = Number(match[1]);
    const no = Number(match[2]);
    const bank = banks.find(item => item.year === year);
    if (!bank) {
      const years = [...banks].sort((a, b) => b.year - a.year).map(item => item.year).join("、");
      result.innerHTML = `<p class="notice">目前題庫完成 ${years} 學年度；找不到 ${year} 年資料。</p>`;
      return;
    }
    const q = bank.questions.find(item => item.no === no);
    if (!q) {
      result.innerHTML = `<p class="notice">${year} 年沒有第 ${no} 題。有效題號為 1–${bank.questions.length}。</p>`;
      return;
    }
    const explanation = learningData.explanations?.[q.id] || null;
    const optionStats = learningData.optionStats?.[q.id] || null;
    const answer = q.fullCredit
      ? "全體到考生均給分"
      : q.written
      ? q.referenceAnswer
      : [q.answer, ...(q.alternateAnswers || [])]
          .map(value => String(value).split("").join("、"))
          .join(" 或 ");
    const options = q.written ? "" : `
      <div class="options">
        ${Object.entries(q.options).map(([key, value]) => `
          <div class="option ${!q.fullCredit && [q.answer, ...(q.alternateAnswers || [])].some(answer => String(answer).includes(key)) ? "correct" : ""}">
            <span class="option-letter">${key}</span><span class="option-text">${escapeHtml(value)}</span>
          </div>`).join("")}
      </div>`;
    result.innerHTML = `
      <article class="card question-card">
        <div class="question-main">
          <div class="meta-row">
            <span class="pill">${escapeHtml(q.subject)}</span>
            ${q.tags.map(tag => `<span class="pill pill-blue">${escapeHtml(tag)}</span>`).join("")}
            ${q.multi ? '<span class="pill pill-gold">多選</span>' : ""}
            ${q.fullCredit ? '<span class="pill pill-gold">全體給分</span>' : ""}
            ${q.written ? '<span class="pill pill-gold">非選擇題</span>' : ""}
            <span class="question-no">${year} 年第 ${q.no} 題</span>
          </div>
          ${q.passage ? `<div class="passage">${escapeHtml(q.passage)}</div>` : ""}
          <p class="stem">${escapeHtml(q.stem)}</p>
          ${options}
          <div class="feedback show info"><strong>${q.written ? "官方滿分參考答案與評分要點" : "官方答案"}</strong><br>${escapeHtml(answer)}
          ${teacherExplanationHtml(explanation)}${optionStatsHtml(q, optionStats)}</div>
          ${q.pass == null ? "" : `<p class="pass-line">大考中心選項分析：全體到考生答對率 ${(q.pass * 100).toFixed(0)}%</p>`}
        </div>
        <details class="source-panel" open>
          <summary>大考中心官方原卷題面</summary>
          <div class="source-pages">${q.pages.map(page => `<img src="${page}" alt="${year} 學測自然第 ${q.no} 題官方原卷頁面">`).join("")}</div>
        </details>
      </article>`;
    history.replaceState(null, "", `?q=${year}-${no}`);
  }

  document.getElementById("lookupBtn").addEventListener("click", render);
  input.addEventListener("keydown", event => { if (event.key === "Enter") render(); });
  const query = new URLSearchParams(location.search).get("q");
  if (query) input.value = query;
  render();
})();

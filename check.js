(() => {
  "use strict";
  const banks = window.BANK || [];
  const input = document.getElementById("lookupInput");
  const result = document.getElementById("lookupResult");

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);

  function render() {
    const match = input.value.trim().match(/(?:學[-－]?)?(\d{3})\s*[-－]\s*(\d{1,2})/);
    if (!match) {
      result.innerHTML = '<p class="notice">格式請輸入「學年度-題號」，例如 114-43 或 115-38。</p>';
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
    const answer = q.written ? q.referenceAnswer : String(q.answer).split("").join("、");
    const options = q.written ? "" : `
      <div class="options">
        ${Object.entries(q.options).map(([key, value]) => `
          <div class="option ${String(q.answer).includes(key) ? "correct" : ""}">
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
            ${q.written ? '<span class="pill pill-gold">非選擇題</span>' : ""}
            <span class="question-no">${year} 年第 ${q.no} 題</span>
          </div>
          ${q.passage ? `<div class="passage">${escapeHtml(q.passage)}</div>` : ""}
          <p class="stem">${escapeHtml(q.stem)}</p>
          ${options}
          <div class="feedback show info"><strong>${q.written ? "官方滿分參考答案與評分要點" : "官方答案"}</strong><br>${escapeHtml(answer)}</div>
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

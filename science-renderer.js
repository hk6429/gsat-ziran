(() => {
  "use strict";

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);

  function renderFormula(tex, displayMode) {
    if (!window.katex) return `<code class="math-fallback">${escapeHtml(tex)}</code>`;
    try {
      return window.katex.renderToString(tex, {
        displayMode,
        throwOnError: true,
        strict: false,
        trust: false,
        output: "htmlAndMathml"
      });
    } catch {
      return `<code class="math-error" title="公式仍待校對">${escapeHtml(tex)}</code>`;
    }
  }

  function richText(value) {
    const source = String(value ?? "");
    const pattern = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)|(?<!\\)\$([^$\n]+?)\$/g;
    let cursor = 0;
    let html = "";
    for (const match of source.matchAll(pattern)) {
      html += escapeHtml(source.slice(cursor, match.index)).replaceAll("\n", "<br>");
      html += renderFormula(match[1] ?? match[2] ?? match[3], match[1] != null);
      cursor = match.index + match[0].length;
    }
    return html + escapeHtml(source.slice(cursor)).replaceAll("\n", "<br>");
  }

  function questionFigures(q) {
    return q.figures || window.GSAT_FIGURES?.[q.id] || [];
  }

  function figuresHtml(q) {
    return questionFigures(q).map((figure, index) => {
      const item = typeof figure === "string" ? { src:figure } : figure;
      const alt = item.alt || `${q.year} 學測自然第 ${q.no} 題題圖 ${index + 1}`;
      return `<figure class="question-figure"><img src="${escapeHtml(item.src)}" alt="${escapeHtml(alt)}">${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}</figure>`;
    }).join("");
  }

  function officialSourceHtml(q) {
    if (!q.officialUrl) return "";
    const needsFigure = !q.written && Object.values(q.options || {}).some(value => !String(value).trim());
    return `<div class="official-source-link">
      ${needsFigure && !questionFigures(q).length ? '<p>本題圖示正在依官方原卷切割覆核，暫不以整頁試卷截圖代替題圖。</p>' : ""}
      <a href="${escapeHtml(q.officialUrl)}" target="_blank" rel="noopener">查看大考中心官方原卷</a>
    </div>`;
  }

  window.ScienceQuestionUI = { escapeHtml, figuresHtml, officialSourceHtml, questionFigures, richText };
})();

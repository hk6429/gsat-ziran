(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const banks = [...(window.BANK || [])].sort((a, b) => b.year - a.year);
  if (!banks.length) {
    document.body.innerHTML = '<p class="notice" style="margin:30px">題庫載入失敗，請重新整理頁面。</p>';
    return;
  }
  const newestBank = banks[0];
  const allQuestions = banks.flatMap(bank => bank.questions.map(q => ({ ...q, year:bank.year })));

  const storage = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
      catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); }
      catch { /* 無痕模式或容量不足時，作答流程仍可繼續。 */ }
    }
  };

  const session = {
    questions: [],
    index: 0,
    results: [],
    startedAt: 0,
    timerId: null
  };

  const subjectOrder = ["E", "P", "C", "B", "X"];
  const subjectNames = { E:"地球科學", P:"物理", C:"化學", B:"生物", X:"跨科整合" };

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function answerKeys(answer) {
    return String(answer || "").match(/[A-E]/g) || [];
  }

  function selectedSubjects() {
    return [...document.querySelectorAll(".subject-filter:checked")].map(input => input.value);
  }

  function selectedYear() {
    return $("yearFilter").value;
  }

  function questionsForSelectedYear() {
    const year = selectedYear();
    return year === "all" ? allQuestions : allQuestions.filter(q => q.year === Number(year));
  }

  function inDifficulty(q, value) {
    if (value === "all") return true;
    if (q.pass == null) return false;
    if (value === "easy") return q.pass >= .7;
    if (value === "mid") return q.pass >= .4 && q.pass < .7;
    if (value === "hard") return q.pass < .4;
    return true;
  }

  function filteredPool() {
    const subjects = selectedSubjects();
    const type = $("typeFilter").value;
    const difficulty = $("difficultyFilter").value;
    const tag = $("tagFilter").value;
    return questionsForSelectedYear().filter(q =>
      subjects.includes(q.cat) &&
      (type === "all" || (type === "single" && !q.multi && !q.written) ||
        (type === "multi" && q.multi) || (type === "written" && q.written)) &&
      (tag === "all" || q.tags.includes(tag)) &&
      inDifficulty(q, difficulty)
    );
  }

  function updatePoolCount() {
    const total = filteredPool().length;
    $("poolCount").textContent = `${total} 題`;
    $("startBtn").disabled = total === 0;
    $("questionCount").max = Math.max(total, 1);
    const year = selectedYear();
    const fullBank = banks.find(bank => bank.year === Number(year)) || newestBank;
    $("fullExamBtn").textContent = `依 ${fullBank.year} 年原卷做完整 ${fullBank.questions.length} 題`;
  }

  function initFilters() {
    $("yearFilter").innerHTML =
      banks.map(bank => `<option value="${bank.year}">${bank.year} 學年度</option>`).join("") +
      '<option value="all">全部年份</option>';

    const tags = [...new Set(allQuestions.flatMap(q => q.tags))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
    $("tagFilter").innerHTML = '<option value="all">全部主題</option>' +
      tags.map(tag => `<option value="${tag}">${tag}</option>`).join("");

    [...document.querySelectorAll(".subject-filter"), $("typeFilter"), $("difficultyFilter"), $("tagFilter"), $("yearFilter")]
      .forEach(input => input.addEventListener("change", updatePoolCount));
    $("yearFilter").addEventListener("change", updateStats);
    updateStats();
    updatePoolCount();
  }

  function updateStats() {
    const questions = questionsForSelectedYear();
    $("questionTotal").textContent = questions.length;
    $("choiceTotal").textContent = questions.filter(q => !q.written).length;
    $("writtenTotal").textContent = questions.filter(q => q.written).length;
    $("statsTotal").textContent = questions.filter(q => q.pass != null).length;
  }

  function questionCard(q, position) {
    const card = document.createElement("article");
    card.className = "card question-card";
    const emptyVisualOptions = !q.written && Object.values(q.options).some(value => !value);
    const passText = q.pass == null ? "" : `<span class="pass-line">官方答對率 ${(q.pass * 100).toFixed(0)}%</span>`;
    const passage = q.passage ? `<div class="passage">${escapeHtml(q.passage)}</div>` : "";
    const tags = q.tags.map(tag => `<span class="pill pill-blue">${escapeHtml(tag)}</span>`).join("");

    let answerArea;
    if (q.written) {
      answerArea = `
        <div class="written-box">
          <label for="writtenAnswer"><strong>你的作答</strong></label>
          <textarea id="writtenAnswer" placeholder="請寫下計算過程、推論理由或完整答案。內容只保存在這個瀏覽器。"></textarea>
        </div>`;
    } else {
      const type = q.multi ? "checkbox" : "radio";
      answerArea = `<div class="options" role="${q.multi ? "group" : "radiogroup"}" aria-label="第 ${q.no} 題選項">` +
        Object.entries(q.options).map(([key, value]) => `
          <label class="option" data-key="${key}">
            <input type="${type}" name="${q.id}" value="${key}">
            <span class="option-letter">${key}</span>
            <span class="option-text">${escapeHtml(value)}</span>
          </label>`).join("") +
        `</div>`;
    }

    card.innerHTML = `
      <div class="question-main">
        <div class="meta-row">
          <span class="pill">${escapeHtml(q.subject)}</span>
          ${tags}
          ${q.multi ? '<span class="pill pill-gold">多選</span>' : ""}
          ${q.written ? '<span class="pill pill-gold">非選擇題</span>' : ""}
          ${passText}
          <span class="question-no">${q.year} 年第 ${q.no} 題</span>
        </div>
        ${passage}
        <p class="stem">${escapeHtml(q.stem)}</p>
        ${answerArea}
        <div class="feedback" id="feedback" role="status" aria-live="polite"></div>
        <div class="question-actions">
          <button class="btn btn-primary" id="submitAnswer">${q.written ? "顯示官方評分要點" : "送出答案"}</button>
          ${position > 0 ? '<button class="btn btn-secondary" id="prevQuestion">上一題</button>' : ""}
          <button class="btn btn-secondary" id="nextQuestion" hidden>${position === session.questions.length - 1 ? "查看結果" : "下一題"}</button>
          <button class="btn btn-secondary" id="backToFilters">結束本次練習</button>
        </div>
      </div>
      <details class="source-panel" ${q.written || emptyVisualOptions ? "open" : ""}>
        <summary>查看大考中心官方原卷題面${emptyVisualOptions ? "（本題含圖形選項）" : ""}</summary>
        <div class="source-pages">
          ${q.pages.map((page, i) => `<img src="${page}" alt="${q.year} 學測自然第 ${q.no} 題官方原卷頁面${q.pages.length > 1 ? ` ${i + 1}` : ""}" loading="${i ? "lazy" : "eager"}">`).join("")}
        </div>
      </details>`;

    card.querySelectorAll(".option input").forEach(input => {
      input.addEventListener("change", () => {
        if (!q.multi) card.querySelectorAll(".option").forEach(option => option.classList.remove("selected"));
        input.closest(".option").classList.toggle("selected", input.checked);
      });
    });

    card.querySelector("#submitAnswer").addEventListener("click", () => submitAnswer(card, q));
    card.querySelector("#nextQuestion").addEventListener("click", nextQuestion);
    card.querySelector("#prevQuestion")?.addEventListener("click", () => {
      session.index -= 1;
      renderCurrent();
    });
    card.querySelector("#backToFilters").addEventListener("click", endEarly);
    return card;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    })[char]);
  }

  function submitAnswer(card, q) {
    const feedback = card.querySelector("#feedback");
    const submit = card.querySelector("#submitAnswer");
    const next = card.querySelector("#nextQuestion");
    let result;

    if (q.written) {
      const response = card.querySelector("textarea").value.trim();
      feedback.className = "feedback show info";
      feedback.innerHTML = `<strong>官方滿分參考答案與評分要點</strong><br>${escapeHtml(q.referenceAnswer || "請對照大考中心評分原則。")}<br><small>非選擇題須依原卷要求呈現計算過程、理由或作圖；本頁不自動判分。</small>`;
      result = { id:q.id, no:q.no, written:true, response, correct:null };
    } else {
      const selected = [...card.querySelectorAll(".option input:checked")].map(input => input.value).sort();
      if (!selected.length) {
        feedback.className = "feedback show bad";
        feedback.textContent = "請先選擇答案。";
        return;
      }
      const correct = answerKeys(q.answer).sort();
      const isCorrect = selected.join("") === correct.join("");
      card.querySelectorAll(".option").forEach(option => {
        const key = option.dataset.key;
        if (correct.includes(key)) option.classList.add("correct");
        else if (selected.includes(key)) option.classList.add("wrong");
        option.querySelector("input").disabled = true;
      });
      feedback.className = `feedback show ${isCorrect ? "ok" : "bad"}`;
      feedback.innerHTML = isCorrect
        ? `<strong>答對了。</strong> 官方答案：${correct.join("、")}`
        : `<strong>這題再想一下。</strong> 你的答案：${selected.join("、")}；官方答案：${correct.join("、")}`;
      result = { id:q.id, no:q.no, written:false, selected, correct:isCorrect };
      updateWrongBook(q.id, isCorrect);
    }

    session.results[session.index] = result;
    submit.disabled = true;
    next.hidden = false;
    saveHistory(result);
  }

  function updateWrongBook(id, isCorrect) {
    const wrong = new Set(storage.get("gsatZiranWrong", []));
    if (isCorrect) wrong.delete(id); else wrong.add(id);
    storage.set("gsatZiranWrong", [...wrong]);
  }

  function saveHistory(result) {
    const history = storage.get("gsatZiranHistory", []);
    history.push({ ...result, at:new Date().toISOString() });
    storage.set("gsatZiranHistory", history.slice(-500));
  }

  function renderCurrent() {
    const q = session.questions[session.index];
    $("questionHost").replaceChildren(questionCard(q, session.index));
    $("progressLabel").textContent = `${session.index + 1} / ${session.questions.length}`;
    $("progressBar").style.width = `${((session.index + 1) / session.questions.length) * 100}%`;
    window.scrollTo({ top:$("workspace").offsetTop - 12, behavior:"smooth" });
  }

  function nextQuestion() {
    if (session.index >= session.questions.length - 1) {
      finishSession();
      return;
    }
    session.index += 1;
    renderCurrent();
  }

  function startSession(mode = "filtered") {
    let pool = filteredPool();
    if (mode === "full") {
      const year = selectedYear();
      const fullBank = banks.find(bank => bank.year === Number(year)) || newestBank;
      pool = fullBank.questions.map(q => ({ ...q, year:fullBank.year }));
      $("questionCount").value = pool.length;
    }
    const count = Math.min(Math.max(Number($("questionCount").value) || 10, 1), pool.length);
    const order = $("orderFilter").value === "random" ? shuffle(pool) : pool;
    session.questions = order.slice(0, count);
    session.index = 0;
    session.results = [];
    session.startedAt = Date.now();
    $("summary").classList.remove("show");
    $("workspace").classList.add("active");
    $("workspace").setAttribute("aria-hidden", "false");
    startTimer();
    renderCurrent();
  }

  function startTimer() {
    clearInterval(session.timerId);
    session.timerId = setInterval(() => {
      const elapsed = Math.floor((Date.now() - session.startedAt) / 1000);
      const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
      const ss = String(elapsed % 60).padStart(2, "0");
      $("timer").textContent = `${mm}:${ss}`;
    }, 1000);
  }

  function finishSession() {
    clearInterval(session.timerId);
    $("workspace").classList.remove("active");
    const choice = session.results.filter(result => result && !result.written);
    const correct = choice.filter(result => result.correct).length;
    const written = session.results.filter(result => result?.written).length;
    $("summaryCorrect").textContent = `${correct} / ${choice.length}`;
    $("summaryWritten").textContent = written;
    $("summaryTime").textContent = $("timer").textContent;
    $("summary").classList.add("show");
    $("summary").scrollIntoView({ behavior:"smooth", block:"start" });
  }

  function endEarly() {
    if (session.results.some(Boolean)) finishSession();
    else {
      clearInterval(session.timerId);
      $("workspace").classList.remove("active");
      window.scrollTo({ top:$("controls").offsetTop - 12, behavior:"smooth" });
    }
  }

  $("startBtn").addEventListener("click", () => startSession("filtered"));
  $("fullExamBtn").addEventListener("click", () => startSession("full"));
  $("restartBtn").addEventListener("click", () => {
    $("summary").classList.remove("show");
    $("controls").scrollIntoView({ behavior:"smooth" });
  });

  initFilters();
})();

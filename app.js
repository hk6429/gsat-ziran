(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const banks = [...(window.BANK || [])].sort((a, b) => b.year - a.year);
  if (!banks.length) {
    document.body.innerHTML = '<p class="notice" style="margin:30px">題庫載入失敗，請重新整理頁面。</p>';
    return;
  }
  const learningData = window.LEARNING_DATA || {};
  const enrichQuestion = (question, bank) => ({
    ...question,
    year: bank.year,
    officialUrl: bank.official?.test || "",
    explanation: learningData.explanations?.[question.id] || null,
    optionStats: learningData.optionStats?.[question.id] || null
  });
  const newestBank = banks[0];
  const allQuestions = banks.flatMap(bank => bank.questions.map(q => enrichQuestion(q, bank)));

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
  const filterDetails = $("filterDetails");

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function answerKeys(answer) {
    return String(answer || "").match(/[A-Z]/g) || [];
  }

  function dueReviewQuestions() {
    const schedule = storage.get("gsatZiranReview", {});
    const now = Date.now();
    return allQuestions.filter(q => schedule[q.id] && schedule[q.id].due <= now);
  }

  function refreshLearningCounts() {
    $("wrongCount").textContent = storage.get("gsatZiranWrong", []).length;
    const due = dueReviewQuestions().length;
    $("reviewCount").textContent = due;
    $("reviewBtn").hidden = due === 0;
  }

  function selectedSubjects() {
    return [...document.querySelectorAll(".subject-filter:checked")].map(input => input.value);
  }

  function selectedYears() {
    if ($("mainYearAll").checked) return null;
    return new Set(
      [...document.querySelectorAll(".main-year-checkbox:checked")].map(input => Number(input.value))
    );
  }

  function questionsForSelectedYear() {
    const years = selectedYears();
    return years ? allQuestions.filter(q => years.has(q.year)) : allQuestions;
  }

  function updateMainYearSummary() {
    const years = [...document.querySelectorAll(".main-year-checkbox:checked")]
      .map(input => Number(input.value))
      .sort((a, b) => b - a);
    $("mainYearSummary").textContent =
      $("mainYearAll").checked || !years.length
        ? "全部年度"
        : years.length <= 4
          ? `${years.join("、")} 學年度`
          : `${years.slice(0, 3).join("、")} 等 ${years.length} 個年度`;
  }

  function handleMainYearChange(event) {
    const all = $("mainYearAll");
    const years = [...document.querySelectorAll(".main-year-checkbox")];
    if (event.target === all && all.checked) {
      years.forEach(input => { input.checked = false; });
    } else if (event.target.classList.contains("main-year-checkbox") && event.target.checked) {
      all.checked = false;
    }
    if (!all.checked && !years.some(input => input.checked)) all.checked = true;
    updateMainYearSummary();
    updateStats();
    updatePoolCount();
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
    const years = selectedYears();
    const fullBank = years?.size === 1 ? banks.find(bank => years.has(bank.year)) : null;
    $("fullExamBtn").textContent = fullBank
      ? `依 ${fullBank.year} 年原卷做完整 ${fullBank.questions.length} 題`
      : "整回模考（請只選 1 個年份）";
    updateFilterSummary(total);
  }

  function updateCoverageCopy() {
    const years = banks.map(bank => bank.year);
    const oldestYear = Math.min(...years);
    const newestYear = Math.max(...years);
    const yearRange = `${oldestYear}–${newestYear}`;
    const questionCount = allQuestions.length.toLocaleString("zh-TW");
    const description = `免費練習大學學測自然科 ${yearRange} 學年度歷屆試題，共 ${questionCount} 題，含物理、化學、生物、地球科學與跨科整合，逐題對照大考中心官方資料。`;

    document.title = `學測自然題庫｜${yearRange} 學測自然考古題分類練習`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", `${yearRange} 學測自然共 ${questionCount} 題免費練，四科分類、混合題與非選擇題評分要點一次整理。`);
    $("coverageTitle").textContent = `涵蓋 ${yearRange} 學年度・${questionCount} 題`;
  }

  function updateFilterSummary(total = filteredPool().length) {
    const yearText = $("mainYearSummary").textContent;
    const subjects = selectedSubjects();
    const subjectText = subjects.length === subjectOrder.length
      ? "全科"
      : subjects.map(subject => subjectNames[subject]).join("、") || "未選科目";
    const typeText = $("typeFilter").selectedOptions[0]?.textContent || "全部題型";
    const tagText = $("tagFilter").value === "all" ? "全部主題" : $("tagFilter").value;
    const difficultyText = $("difficultyFilter").selectedOptions[0]?.textContent || "不限難度";
    const orderText = $("orderFilter").value === "random" ? "隨機出題" : "原卷順序";
    $("filterSummary").textContent = `${yearText}・${subjectText}・${typeText}・${tagText}・${difficultyText}・抽 ${$("questionCount").value || 10} 題・${orderText}（符合 ${total} 題）`;
  }

  function initFilters() {
    $("mainYearOptions").innerHTML = `
      <label class="paper-year-all"><input id="mainYearAll" type="checkbox" value="all" checked> 全部年度</label>
      ${banks.map(bank => `<label><input class="main-year-checkbox" type="checkbox" value="${bank.year}"> ${bank.year} 學年度</label>`).join("")}`;
    updateMainYearSummary();

    const tags = [...new Set(allQuestions.flatMap(q => q.tags))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
    $("tagFilter").innerHTML = '<option value="all">全部主題</option>' +
      tags.map(tag => `<option value="${tag}">${tag}</option>`).join("");

    [...document.querySelectorAll(".subject-filter"), $("typeFilter"), $("difficultyFilter"), $("tagFilter"), $("orderFilter")]
      .forEach(input => input.addEventListener("change", updatePoolCount));
    $("mainYearOptions").addEventListener("change", handleMainYearChange);
    $("questionCount").addEventListener("input", () => updateFilterSummary());
    filterDetails.addEventListener("toggle", () => {
      $("filterToggleLabel").textContent = filterDetails.open ? "收合進階篩選" : "展開進階篩選";
    });
    updateCoverageCopy();
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
    const passText = q.pass == null ? "" : `<span class="pass-line">官方答對率 ${(q.pass * 100).toFixed(0)}%</span>`;
    const passage = q.passage ? `<div class="passage">${window.ScienceQuestionUI.richText(q.passage)}</div>` : "";
    const tags = q.tags.map(tag => `<span class="pill pill-blue">${escapeHtml(tag)}</span>`).join("");
    const figures = window.ScienceQuestionUI.figuresHtml(q);

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
            <span class="option-text">${window.ScienceQuestionUI.richText(value)}</span>
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
        <p class="stem">${window.ScienceQuestionUI.richText(q.stem)}</p>
        ${figures}
        ${answerArea}
        <div class="feedback" id="feedback" role="status" aria-live="polite"></div>
        <div class="question-actions">
          ${q.written || q.multi ? `<button class="btn btn-primary" id="submitAnswer">${q.written ? "顯示官方評分要點" : "送出答案"}</button>` : ""}
          ${position > 0 ? '<button class="btn btn-secondary" id="prevQuestion">上一題</button>' : ""}
          <button class="btn btn-secondary" id="nextQuestion" hidden>${position === session.questions.length - 1 ? "查看結果" : "下一題"}</button>
          <button class="btn btn-secondary" id="backToFilters">結束本次練習</button>
        </div>
      </div>
      ${window.ScienceQuestionUI.officialSourceHtml(q)}`;

    card.querySelectorAll(".option input").forEach(input => {
      input.addEventListener("change", () => {
        if (!q.multi) card.querySelectorAll(".option").forEach(option => option.classList.remove("selected"));
        input.closest(".option").classList.toggle("selected", input.checked);
        if (!q.multi && input.checked) submitAnswer(card, q);
      });
    });

    card.querySelector("#submitAnswer")?.addEventListener("click", () => submitAnswer(card, q));
    card.querySelector("#nextQuestion").addEventListener("click", nextQuestion);
    card.querySelector("#prevQuestion")?.addEventListener("click", () => {
      session.index -= 1;
      renderCurrent();
    });
    card.querySelector("#backToFilters").addEventListener("click", endEarly);
    return card;
  }

  function optionStatsHtml(q, activeGroup = "all") {
    if (q.written) return "";
    if (!q.optionStats?.groups) {
      return `<section class="option-stats option-stats-unavailable">
        <strong>官方選項畫記率</strong>
        <p>大考中心此學年度未公布逐選項畫記率，本站維持空白，不自行推估。</p>
      </section>`;
    }
    const groupLabels = { all:"全體", low:"低分組", high:"高分組" };
    const group = q.optionStats.groups[activeGroup] || q.optionStats.groups.all;
    const correct = new Set(answerKeys(q.answer));
    const rows = Object.keys(q.options).map(key => {
      const rate = group.options[key];
      if (!Number.isFinite(rate)) {
        return `<div class="option-rate-row option-rate-missing">
          <span>(${key})${correct.has(key) ? " ✓正解" : ""}</span>
          <span>官方表未列此格</span><b>—</b>
        </div>`;
      }
      return `
      <div class="option-rate-row">
        <span>(${key})${correct.has(key) ? " ✓正解" : ""}</span>
        <span class="option-rate-track"><i class="${correct.has(key) ? "correct-rate" : ""}" style="width:${Math.min(rate, 100)}%"></i></span>
        <b>${rate}%</b>
      </div>`;
    }).join("");
    return `
      <section class="option-stats" data-question="${escapeHtml(q.id)}">
        <div class="option-stats-head">
          <strong>${groupLabels[activeGroup]}選項畫記率（大考中心官方統計）</strong>
          <span class="stats-tabs">${Object.entries(groupLabels).map(([key, label]) =>
            `<button type="button" class="${key === activeGroup ? "active" : ""}" data-stats-group="${key}">${label}</button>`
          ).join("")}</span>
        </div>
        <div class="option-rate-rows">${rows}</div>
        <small>未答 ${group.unanswered}%${q.multi ? "；多選題為各選項畫記率，合計不一定是 100%。" : "；合計可能因四捨五入略有差異。"}${q.optionStats.completeness === "partial" ? " 官方原表有未列數值，本頁維持缺漏，不自行反推。" : ""}</small>
      </section>`;
  }

  function explanationHtml(q) {
    const explanation = q.explanation;
    if (!explanation || explanation.reviewStatus !== "approved") {
      return `
        <section class="teacher-explanation pending-explanation">
          <strong>老師解析正在逐題覆核</strong>
          <p>先對照官方答案找出關鍵選項；這題通過科任教師檢查後，才會公開逐步解析，不用猜的方式補內容。</p>
        </section>`;
    }
    const optionAnalysis = Object.entries(explanation.optionAnalysis || {}).map(([key, note]) =>
      `<li class="${note.verdict === "correct" ? "correct-note" : ""}"><b>${key}</b>：${escapeHtml(note.reason)}</li>`
    ).join("");
    const answerGuidance = q.written
      ? `<h3>拿分要點</h3>
        <ul class="option-analysis">${(explanation.scoringPoints || []).map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul>`
      : `<h3>每個選項怎麼看</h3>
        <ul class="option-analysis">${optionAnalysis}</ul>`;
    return `
      <section class="teacher-explanation">
        <p class="encouragement">${escapeHtml(explanation.encouragement)}</p>
        <h3>這題先抓一個重點</h3>
        <p>${window.ScienceQuestionUI.richText(explanation.keyIdea)}</p>
        <h3>一步一步想</h3>
        <ol>${explanation.steps.map(step => `<li>${window.ScienceQuestionUI.richText(step)}</li>`).join("")}</ol>
        ${answerGuidance}
        ${explanation.fullCreditNote ? `<p class="full-credit-note"><strong>官方全體給分：</strong>${escapeHtml(explanation.fullCreditNote)}</p>` : ""}
        <p class="takeaway"><strong>帶去下一題：</strong>${escapeHtml(explanation.takeaway)}</p>
      </section>`;
  }

  function setupStatsTabs(card, q) {
    card.querySelectorAll("[data-stats-group]").forEach(button => {
      button.addEventListener("click", () => {
        const current = card.querySelector(".option-stats");
        current.outerHTML = optionStatsHtml(q, button.dataset.statsGroup);
        setupStatsTabs(card, q);
      });
    });
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
      feedback.innerHTML = `<strong>官方滿分參考答案與評分要點</strong><br>${escapeHtml(q.referenceAnswer || "請對照大考中心評分原則。")}<br><small>非選擇題須依原卷要求呈現計算過程、理由或作圖；本頁不自動判分。</small>${explanationHtml(q)}`;
      result = { id:q.id, no:q.no, written:true, response, correct:null };
    } else {
      const selected = [...card.querySelectorAll(".option input:checked")].map(input => input.value).sort();
      if (!selected.length && !q.fullCredit) {
        feedback.className = "feedback show bad";
        feedback.textContent = "請先選擇答案。";
        return;
      }
      if (q.fullCredit) {
        card.querySelectorAll(".option input").forEach(input => { input.disabled = true; });
        feedback.className = "feedback show ok";
        feedback.innerHTML = "<strong>本題官方全體給分。</strong> 無論選擇或未作答，均依公告取得本題分數。" + explanationHtml(q);
        result = { id:q.id, no:q.no, written:false, selected, correct:true, fullCredit:true };
        updateWrongBook(q.id, true);
        session.results[session.index] = result;
        if (submit) submit.disabled = true;
        next.hidden = false;
        saveHistory(result);
        updateReviewSchedule(q.id, true);
        refreshLearningCounts();
        return;
      }
      const correct = answerKeys(q.answer).sort();
      const acceptedAnswers = [q.answer, ...(q.alternateAnswers || [])]
        .map(answer => answerKeys(answer).sort().join(""));
      const isCorrect = acceptedAnswers.includes(selected.join(""));
      card.querySelectorAll(".option").forEach(option => {
        const key = option.dataset.key;
        if (correct.includes(key)) option.classList.add("correct");
        else if (selected.includes(key)) option.classList.add("wrong");
        option.querySelector("input").disabled = true;
      });
      feedback.className = `feedback show ${isCorrect ? "ok" : "bad"}`;
      const officialAnswers = [q.answer, ...(q.alternateAnswers || [])]
        .map(answer => answerKeys(answer).join("、")).join(" 或 ");
      const answerFeedback = isCorrect
        ? `<strong>答對了。</strong> 官方答案：${officialAnswers}`
        : `<strong>這題再想一下。</strong> 你的答案：${selected.join("、")}；官方答案：${officialAnswers}`;
      feedback.innerHTML = `${answerFeedback}${explanationHtml(q)}${optionStatsHtml(q)}`;
      setupStatsTabs(card, q);
      result = { id:q.id, no:q.no, written:false, selected, correct:isCorrect };
      updateWrongBook(q.id, isCorrect);
      updateReviewSchedule(q.id, isCorrect);
    }

    session.results[session.index] = result;
    if (submit) submit.disabled = true;
    next.hidden = false;
    saveHistory(result);
    refreshLearningCounts();
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

  function updateReviewSchedule(id, isCorrect) {
    const schedule = storage.get("gsatZiranReview", {});
    const currentBox = schedule[id]?.box || 0;
    const box = isCorrect ? Math.min(currentBox + 1, 5) : 0;
    const intervals = [0, 1, 3, 7, 14, 30];
    schedule[id] = {
      box,
      due: Date.now() + intervals[box] * 86400000
    };
    storage.set("gsatZiranReview", schedule);
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
      const years = selectedYears();
      if (!years || years.size !== 1) {
        filterDetails.open = true;
        $("mainYearFilter").open = true;
        $("mainYearSummary").focus();
        alert("整回模考一次只能使用一份原卷，請只勾選一個特定年份。");
        return;
      }
      const fullBank = banks.find(bank => years.has(bank.year));
      if (!fullBank) return;
      pool = fullBank.questions.map(q => enrichQuestion(q, fullBank));
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

  function startQuickSession() {
    $("mainYearAll").checked = true;
    document.querySelectorAll(".main-year-checkbox").forEach(input => { input.checked = false; });
    document.querySelectorAll(".subject-filter").forEach(input => { input.checked = true; });
    $("typeFilter").value = "all";
    $("tagFilter").value = "all";
    $("difficultyFilter").value = "all";
    $("questionCount").value = "10";
    $("orderFilter").value = "random";
    updateMainYearSummary();
    updateStats();
    updatePoolCount();
    startSession("filtered");
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
  $("quickStartBtn").addEventListener("click", startQuickSession);
  $("fullExamBtn").addEventListener("click", () => startSession("full"));
  $("restartBtn").addEventListener("click", () => {
    $("summary").classList.remove("show");
    $("controls").scrollIntoView({ behavior:"smooth" });
  });

  function startQuestionSet(questions) {
    if (!questions.length) return;
    session.questions = questions;
    session.index = 0;
    session.results = [];
    session.startedAt = Date.now();
    $("summary").classList.remove("show");
    $("workspace").classList.add("active");
    $("workspace").setAttribute("aria-hidden", "false");
    startTimer();
    renderCurrent();
  }

  function showHistory() {
    const history = storage.get("gsatZiranHistory", []);
    const recent = history.slice(-20).reverse();
    $("historyContent").innerHTML = recent.length
      ? `<p>共保留最近 ${history.length} 次作答紀錄。</p><ul class="history-list">${recent.map(item => {
        const q = allQuestions.find(question => question.id === item.id);
        return `<li><b>${escapeHtml(item.id)}</b> ${q ? escapeHtml(q.subject) : ""}・${item.correct == null ? "已自評" : item.correct ? "答對" : "待複習"}<small>${new Date(item.at).toLocaleString("zh-TW")}</small></li>`;
      }).join("")}</ul>`
      : "<p>還沒有作答紀錄。完成第一題後，這裡就會開始累積。</p>";
    $("historyPanel").hidden = false;
    $("historyPanel").scrollIntoView({ behavior:"smooth", block:"start" });
  }

  function selectedPaperQuestions() {
    const selected = new Set([...document.querySelectorAll(".paper-question:checked")].map(input => input.value));
    return filteredPool().filter(q => selected.has(q.id));
  }

  function updatePaperCount() {
    $("paperSelectedCount").textContent = `已選 ${selectedPaperQuestions().length} 題`;
  }

  function selectedPaperYears() {
    if ($("paperYearAll")?.checked) return null;
    return new Set(
      [...document.querySelectorAll(".paper-year-checkbox:checked")].map(input =>
        Number(input.value),
      ),
    );
  }

  function updatePaperYearSummary() {
    const years = [...document.querySelectorAll(".paper-year-checkbox:checked")]
      .map(input => Number(input.value))
      .sort((a, b) => b - a);
    $("paperYearQuickSummary").textContent =
      $("paperYearAll")?.checked || !years.length
        ? "全部年度"
        : years.length <= 4
          ? `${years.join("、")} 學年度`
          : `${years.slice(0, 3).join("、")} 等 ${years.length} 個年度`;
  }

  function handlePaperYearChange(event) {
    const all = $("paperYearAll");
    const years = [...document.querySelectorAll(".paper-year-checkbox")];
    if (event.target === all && all.checked) {
      years.forEach(input => { input.checked = false; });
    } else if (
      event.target.classList.contains("paper-year-checkbox") &&
      event.target.checked
    ) {
      all.checked = false;
    }
    if (!all.checked && !years.some(input => input.checked)) all.checked = true;
    updatePaperYearSummary();
  }

  function renderPaperList() {
    const pool = filteredPool();
    const years = [...new Set(pool.map(q => q.year))].sort((a, b) => b - a);
    $("paperPoolSummary").textContent = `目前篩選符合 ${pool.length} 題；請勾選要放入考卷的題目。`;
    $("paperYearQuickOptions").innerHTML = `
      <label class="paper-year-all"><input id="paperYearAll" type="checkbox" value="all" checked> 全部年度</label>
      ${years.map(year => `<label><input class="paper-year-checkbox" type="checkbox" value="${year}"> ${year} 學年度</label>`).join("")}`;
    updatePaperYearSummary();
    $("paperList").innerHTML = pool.map(q => `
      <label><input class="paper-question" type="checkbox" value="${escapeHtml(q.id)}" data-year="${q.year}">
      <span>${q.year} 年第 ${q.no} 題・${escapeHtml(q.subject)}・${escapeHtml(q.tags.join("／"))}</span></label>`
    ).join("");
    $("paperList").querySelectorAll("input").forEach(input => input.addEventListener("change", updatePaperCount));
    updatePaperCount();
  }

  function paperQuestionsHtml(questions, teacherCopy = false) {
    return questions.map((q, index) => {
      const options = q.written ? "" : Object.entries(q.options).map(([key, value]) => `<div>（${key}）${escapeHtml(value)}</div>`).join("");
      const answer = teacherCopy
        ? `<div class="paper-answer"><b>答案：</b>${escapeHtml(q.answer || q.referenceAnswer || "官方全體給分")}${q.explanation ? `<br><b>解析：</b>${escapeHtml(q.explanation.keyIdea)}${q.explanation.steps?.length ? `<ol>${q.explanation.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>` : ""}` : ""}</div>`
        : "";
      return `<section><h3>${index + 1}.（${q.year} 年第 ${q.no} 題）</h3><p>${escapeHtml(q.stem)}</p>${options}${answer}</section>`;
    }).join("");
  }

  function paperDocument(questions) {
    const pageSize = $("paperPageSize").value;
    const studentBody = paperQuestionsHtml(questions);
    const teacherBody = paperQuestionsHtml(questions, true);
    return `<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><title>學測自然科自編考卷</title><style>@page{size:${pageSize};margin:16mm}body{font-family:serif;line-height:1.8;max-width:1000px;margin:auto}section{break-inside:avoid;margin:0 0 28px}.teacher-copy{break-before:page}.paper-answer{margin-top:10px;padding:8px;border-left:3px solid #26734d;background:#f3f7f5}</style><body><h1>學測自然科自編考卷</h1>${studentBody}<div class="teacher-copy"><h1>教師答案與解析</h1>${teacherBody}</div></body></html>`;
  }

  function printPaper() {
    const questions = selectedPaperQuestions();
    if (!questions.length) return;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(paperDocument(questions));
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  function downloadWord() {
    const questions = selectedPaperQuestions();
    if (!questions.length) return;
    const blob = new Blob(["\ufeff", paperDocument(questions)], { type:"application/msword" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "學測自然科自編考卷_教師卷.doc";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  $("reviewBtn").addEventListener("click", () => startQuestionSet(dueReviewQuestions()));
  $("wrongBookBtn").addEventListener("click", () => {
    const wrong = new Set(storage.get("gsatZiranWrong", []));
    startQuestionSet(allQuestions.filter(q => wrong.has(q.id)));
  });
  $("historyBtn").addEventListener("click", showHistory);
  $("closeHistoryBtn").addEventListener("click", () => { $("historyPanel").hidden = true; });
  $("moreBtn").addEventListener("click", () => {
    const open = $("moreActions").hidden;
    $("moreActions").hidden = !open;
    $("moreBtn").setAttribute("aria-expanded", String(open));
    $("moreBtn").textContent = open ? "更多功能 ▴" : "更多功能 ▾";
  });
  $("paperModeBtn").addEventListener("click", () => {
    renderPaperList();
    $("paperPanel").hidden = false;
    $("paperPanel").scrollIntoView({ behavior:"smooth", block:"start" });
  });
  $("closePaperBtn").addEventListener("click", () => { $("paperPanel").hidden = true; });
  $("paperSelectAllBtn").addEventListener("click", () => {
    document.querySelectorAll(".paper-question").forEach(input => { input.checked = true; });
    updatePaperCount();
  });
  $("paperSelectNoneBtn").addEventListener("click", () => {
    document.querySelectorAll(".paper-question").forEach(input => { input.checked = false; });
    updatePaperCount();
  });
  $("paperYearQuickOptions").addEventListener("change", handlePaperYearChange);
  $("paperYearApplyBtn").addEventListener("click", () => {
    const years = selectedPaperYears();
    const difficulty = $("paperDifficultyQuick").value;
    document.querySelectorAll(".paper-question").forEach(input => {
      const question = allQuestions.find(q => q.id === input.value);
      input.checked =
        (!years || years.has(Number(input.dataset.year))) &&
        Boolean(question) &&
        inDifficulty(question, difficulty);
    });
    updatePaperCount();
  });
  $("paperLinkBtn").addEventListener("click", async () => {
    const questions = selectedPaperQuestions();
    if (!questions.length) {
      $("paperLinkOutput").textContent = "請先勾選至少一題。";
      return;
    }
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("set", questions.map(q => q.id).join(","));
    $("paperLinkOutput").textContent = url.toString();
    try { await navigator.clipboard.writeText(url.toString()); }
    catch { /* 瀏覽器未開放剪貼簿時，仍顯示連結供手動複製。 */ }
  });
  $("printPaperBtn").addEventListener("click", printPaper);
  $("downloadWordBtn").addEventListener("click", downloadWord);

  initFilters();
  refreshLearningCounts();
  const sharedSet = new URLSearchParams(window.location.search).get("set");
  if (sharedSet) {
    const ids = new Set(sharedSet.split(",").filter(Boolean));
    const questions = allQuestions.filter(q => ids.has(q.id));
    if (questions.length) startQuestionSet(questions);
  }
})();

// ============================================================
// Quiz Engine — no need to edit this file!
// Make all your changes in questions.js instead.
// ============================================================

(function () {
  let currentQuestion = 0;
  let score = 0;

  const screens = {
    intro:    document.getElementById("screen-intro"),
    question: document.getElementById("screen-question"),
    results:  document.getElementById("screen-results"),
  };

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  // ── Intro screen ────────────────────────────────────────────

  document.getElementById("quiz-name").textContent = quizConfig.name + "'s Quiz";
  document.getElementById("quiz-intro").textContent = quizConfig.intro;
  document.getElementById("question-count").textContent =
    quizConfig.questions.length + " question" + (quizConfig.questions.length !== 1 ? "s" : "");

  document.getElementById("btn-start").addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    showScreen("question");
  });

  // ── Question screen ─────────────────────────────────────────

  let shuffledCorrectIndex = 0;

  function showQuestion() {
    const q = quizConfig.questions[currentQuestion];
    const total = quizConfig.questions.length;

    document.getElementById("progress-text").textContent =
      "Question " + (currentQuestion + 1) + " of " + total;
    document.getElementById("progress-fill").style.width =
      ((currentQuestion / total) * 100) + "%";

    document.getElementById("question-text").textContent = q.question;

    // Shuffle options while tracking the correct answer's new position
    const indices = q.options.map(function (_, i) { return i; });
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = indices[i]; indices[i] = indices[j]; indices[j] = tmp;
    }
    shuffledCorrectIndex = indices.indexOf(q.correct);

    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";

    indices.forEach(function (originalIndex, shuffledIndex) {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.textContent = q.options[originalIndex];
      btn.addEventListener("click", function () {
        handleAnswer(shuffledIndex);
      });
      optionsEl.appendChild(btn);
    });
  }

  function handleAnswer(selectedIndex) {
    const options = document.querySelectorAll(".option");

    // Lock in the answer — disable all options
    options.forEach((btn) => (btn.disabled = true));

    // Highlight correct and (if wrong) selected
    options[shuffledCorrectIndex].classList.add("correct");
    if (selectedIndex !== shuffledCorrectIndex) {
      options[selectedIndex].classList.add("incorrect");
    } else {
      score++;
    }

    // Move on after a short pause
    setTimeout(function () {
      currentQuestion++;
      if (currentQuestion < quizConfig.questions.length) {
        showQuestion();
      } else {
        showResults();
      }
    }, 1000);
  }

  // ── Results screen ───────────────────────────────────────────

  function showResults() {
    const total = quizConfig.questions.length;
    const percent = Math.round((score / total) * 100);

    document.getElementById("score-number").textContent = score + " / " + total;
    document.getElementById("score-percent").textContent = percent + "%";

    // Fill the score ring
    const circumference = 2 * Math.PI * 45; // radius = 45
    const offset = circumference - (percent / 100) * circumference;
    document.getElementById("score-ring").style.strokeDashoffset = offset;

    // Pick the results message
    let message;
    if (percent >= 80) {
      message = quizConfig.results.high;
    } else if (percent >= 50) {
      message = quizConfig.results.mid;
    } else {
      message = quizConfig.results.low;
    }
    document.getElementById("results-message").textContent = message;

    // Progress bar on results
    document.getElementById("progress-fill").style.width = "100%";
    document.getElementById("progress-text").textContent =
      "Question " + total + " of " + total;

    showScreen("results");
  }

  document.getElementById("btn-restart").addEventListener("click", function () {
    showScreen("intro");
  });

  // ── Init ─────────────────────────────────────────────────────
  showScreen("intro");
})();

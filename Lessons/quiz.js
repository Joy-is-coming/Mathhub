// ===============================
// MATHHUB QUIZ MODE
// ===============================

const QUIZ_TOTAL = 20;

let quizSubject = null;
let quizQuestions = [];
let quizIndex = 0;
let quizResponses = [];

const quizStart = document.getElementById("quizStart");
const quizGame = document.getElementById("quizGame");
const quizResultPanel = document.getElementById("quizResultPanel");
const quizProgress = document.getElementById("quizProgress");
const quizProgressFill = document.getElementById("quizProgressFill");
const quizSubjectLabel = document.getElementById("quizSubjectLabel");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizScoreText = document.getElementById("quizScoreText");
const quizAnsweredText = document.getElementById("quizAnsweredText");
const quizPreviousQuestion = document.getElementById("quizPreviousQuestion");
const quizNextQuestion = document.getElementById("quizNextQuestion");
const quizResultTitle = document.getElementById("quizResultTitle");
const quizFinalScore = document.getElementById("quizFinalScore");
const quizFinalSummary = document.getElementById("quizFinalSummary");
const quizCorrectCount = document.getElementById("quizCorrectCount");
const quizWrongCount = document.getElementById("quizWrongCount");
const quizPercentage = document.getElementById("quizPercentage");
const quizRetry = document.getElementById("quizRetry");
const quizChooseAnother = document.getElementById("quizChooseAnother");
const backToQuizSubjects = document.getElementById("backToQuizSubjects");

function shuffleQuizQuestions(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function showQuizStart() {
  quizStart.hidden = false;
  quizGame.hidden = true;
  quizResultPanel.hidden = true;
}

function calculateQuizScore() {
  return quizResponses.reduce((total, answer, index) => {
    if (answer === null) return total;
    return total + (answer === quizQuestions[index].answer ? 1 : 0);
  }, 0);
}

function getQuizAnsweredCount() {
  return quizResponses.filter(answer => answer !== null).length;
}

function startQuiz(subject) {
  quizSubject = subject;
  quizQuestions = shuffleQuizQuestions(practiceQuestionBank[subject]).slice(0, QUIZ_TOTAL);
  quizIndex = 0;
  quizResponses = new Array(QUIZ_TOTAL).fill(null);

  quizStart.hidden = true;
  quizResultPanel.hidden = true;
  quizGame.hidden = false;

  quizSubjectLabel.textContent = `${subject.toUpperCase()} QUIZ`;
  renderQuizQuestion();

  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
}

function renderQuizQuestion() {
  const question = quizQuestions[quizIndex];
  const savedAnswer = quizResponses[quizIndex];
  const score = calculateQuizScore();
  const answeredCount = getQuizAnsweredCount();

  quizProgress.textContent = `Question ${quizIndex + 1} of ${QUIZ_TOTAL}`;
  quizProgressFill.style.width = `${((quizIndex + 1) / QUIZ_TOTAL) * 100}%`;
  quizQuestionText.textContent = question.question;
  quizScoreText.textContent = `Score: ${score} / ${QUIZ_TOTAL}`;
  quizAnsweredText.textContent = `Answered: ${answeredCount} / ${QUIZ_TOTAL}`;
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  quizOptions.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    if (savedAnswer !== null) {
      if (savedAnswer === question.answer && index === question.answer) {
        button.classList.add("correct");
      }

      if (savedAnswer !== question.answer && index === savedAnswer) {
        button.classList.add("incorrect");
      }

      if (index === savedAnswer) {
        button.classList.add("selected");
      }
    }

    button.addEventListener("click", () => answerQuizQuestion(index));
    quizOptions.appendChild(button);
  });

  if (savedAnswer !== null) {
    if (savedAnswer === question.answer) {
      quizFeedback.textContent = `Correct! 🎉 ${question.explanation}`;
      quizFeedback.classList.add("correct-text");
    } else {
      quizFeedback.textContent = `Not quite. ${question.explanation}`;
      quizFeedback.classList.add("incorrect-text");
    }
  }

  quizPreviousQuestion.disabled = quizIndex === 0;
  quizNextQuestion.disabled = savedAnswer === null;
  quizNextQuestion.textContent = quizIndex === QUIZ_TOTAL - 1
    ? "See Result →"
    : "Next Question →";
}

function answerQuizQuestion(selectedIndex) {
  // Replace the old answer if the student changes it.
  quizResponses[quizIndex] = selectedIndex;
  renderQuizQuestion();
}

function finishQuiz() {
  const score = calculateQuizScore();
  const percentage = Math.round((score / QUIZ_TOTAL) * 100);
  const wrong = QUIZ_TOTAL - score;

  quizGame.hidden = true;
  quizResultPanel.hidden = false;

  quizFinalScore.textContent = `${score} / ${QUIZ_TOTAL}`;
  quizFinalSummary.textContent = `You answered ${score} out of ${QUIZ_TOTAL} questions correctly (${percentage}%).`;

  if (typeof saveQuizScore === "function") {
    saveQuizScore(quizSubject, score, QUIZ_TOTAL);
  }

  if (typeof updateProgress === "function") {
    updateProgress();
  }
  quizCorrectCount.textContent = score;
  quizWrongCount.textContent = wrong;
  quizPercentage.textContent = `${percentage}%`;

  if (percentage >= 70) {
    quizResultTitle.textContent = "Excellent work! 🎉";
  } else if (percentage >= 50) {
    quizResultTitle.textContent = "Good effort! Keep practicing. 💪";
  } else {
    quizResultTitle.textContent = "Keep going — practice makes progress. 📚";
  }

  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
}

quizPreviousQuestion.addEventListener("click", function () {
  if (quizIndex === 0) return;

  quizIndex--;
  renderQuizQuestion();
});

quizNextQuestion.addEventListener("click", function () {
  if (quizResponses[quizIndex] === null) return;

  if (quizIndex === QUIZ_TOTAL - 1) {
    const unansweredCount = QUIZ_TOTAL - getQuizAnsweredCount();

    if (unansweredCount > 0) {
      quizFeedback.textContent =
        `You still have ${unansweredCount} unanswered question${unansweredCount === 1 ? "" : "s"}. Use Previous to complete them before seeing your result.`;
      quizFeedback.className = "quiz-feedback incorrect-text";
      return;
    }

    finishQuiz();
    return;
  }

  quizIndex++;
  renderQuizQuestion();
});

document.querySelectorAll("[data-quiz-subject]").forEach((button) => {
  button.addEventListener("click", function () {
    startQuiz(this.dataset.quizSubject);
  });
});

quizRetry.addEventListener("click", function () {
  startQuiz(quizSubject);
});

quizChooseAnother.addEventListener("click", function () {
  showQuizStart();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

backToQuizSubjects.addEventListener("click", function () {
  showQuizStart();
});

// Make the navbar Quiz link work from any MathHub page.
const quizNavLink = document.querySelector('.menu a[href="#quiz"]');

quizNavLink.addEventListener("click", function (event) {
  event.preventDefault();

  if (typeof subjectPage !== "undefined") {
    subjectPage.style.display = "none";
  }

  if (typeof lessonView !== "undefined") {
    lessonView.style.display = "none";
  }

  if (typeof lessonsSection !== "undefined") {
    lessonsSection.style.display = "block";
  }

  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });

  if (typeof menu !== "undefined") {
    menu.classList.remove("show");
  }
});

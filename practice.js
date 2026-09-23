// =====================================
// MATHHUB STANDALONE PRACTICE MODE
// =====================================

const practiceQuestionBank = {

  algebra: [
    { question: "Solve: x + 5 = 12", options: ["5", "7", "8", "17"], answer: 1, explanation: "Subtract 5 from both sides: x = 7." },
    { question: "Solve: 3x = 18", options: ["3", "6", "9", "21"], answer: 1, explanation: "Divide both sides by 3: x = 6." },
    { question: "Solve: 2x + 4 = 10", options: ["2", "3", "4", "7"], answer: 1, explanation: "2x = 6, so x = 3." },
    { question: "Simplify: 3x + 2x", options: ["5", "5x", "6x", "x⁵"], answer: 1, explanation: "Like terms combine: 3x + 2x = 5x." },
    { question: "Factorize: x² + 5x + 6", options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x - 2)(x - 3)", "(x + 5)(x + 1)"], answer: 1, explanation: "2 × 3 = 6 and 2 + 3 = 5." },
    { question: "Factorize: x² − 9", options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 3)²", "(x + 9)(x − 1)"], answer: 0, explanation: "This is a difference of two squares: x² − 3²." },
    { question: "Expand: 2(x + 3)", options: ["2x + 3", "2x + 6", "x + 6", "2x + 9"], answer: 1, explanation: "Multiply 2 by each term: 2x + 6." },
    { question: "If x = 4, find 2x + 1.", options: ["7", "8", "9", "10"], answer: 2, explanation: "2(4) + 1 = 9." },
    { question: "What is 3/4 + 1/4?", options: ["1/2", "1", "3/4", "4/8"], answer: 1, explanation: "The denominators are equal, so 3/4 + 1/4 = 4/4 = 1." },
    { question: "Solve: 5x − 2 = 18", options: ["3", "4", "5", "6"], answer: 1, explanation: "5x = 20, so x = 4." },
    { question: "Solve: x/3 = 5", options: ["8", "10", "15", "18"], answer: 2, explanation: "Multiply both sides by 3: x = 15." },
    { question: "Solve: 2x − 6 = 0", options: ["2", "3", "4", "6"], answer: 1, explanation: "2x = 6, so x = 3." },
    { question: "Expand: (x + 2)(x + 4)", options: ["x² + 4x + 8", "x² + 6x + 8", "x² + 8x + 6", "x² + 2x + 4"], answer: 1, explanation: "x² + 4x + 2x + 8 = x² + 6x + 8." },
    { question: "If y = 2x + 3 and x = 4, find y.", options: ["8", "9", "10", "11"], answer: 3, explanation: "y = 2(4) + 3 = 11." },
    { question: "A ratio is 2:3. If the first quantity is 8, what is the second?", options: ["10", "12", "14", "16"], answer: 1, explanation: "8 is 4 times 2, so 3 × 4 = 12." },
    { question: "Solve: x² = 49", options: ["7 only", "−7 only", "7 or −7", "49"], answer: 2, explanation: "Both 7² and (−7)² equal 49." },
    { question: "Simplify: 2x + 3 − x + 5", options: ["x + 8", "3x + 8", "x + 2", "2x + 8"], answer: 0, explanation: "2x − x = x and 3 + 5 = 8." },
    { question: "What is 10% of 50?", options: ["2", "5", "10", "15"], answer: 1, explanation: "10/100 × 50 = 5." },
    { question: "If 4a = 28, what is a?", options: ["6", "7", "8", "9"], answer: 1, explanation: "28 ÷ 4 = 7." },
    { question: "Simplify: 7m − 3m + 2", options: ["4m + 2", "10m + 2", "4m − 2", "m + 2"], answer: 0, explanation: "7m − 3m = 4m, so the expression is 4m + 2." }
  ],

  geometry: [
    { question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], answer: 1, explanation: "A triangle has three sides." },
    { question: "How many sides does a square have?", options: ["3", "4", "5", "6"], answer: 1, explanation: "A square has four equal sides." },
    { question: "What is the sum of the interior angles of a triangle?", options: ["90°", "180°", "270°", "360°"], answer: 1, explanation: "The three interior angles of a triangle add up to 180°." },
    { question: "What is a right angle?", options: ["45°", "60°", "90°", "180°"], answer: 2, explanation: "A right angle measures exactly 90°." },
    { question: "Find the perimeter of a square with side 5 cm.", options: ["10 cm", "15 cm", "20 cm", "25 cm"], answer: 2, explanation: "Perimeter = 4 × side = 4 × 5 = 20 cm." },
    { question: "Find the area of a rectangle 8 cm long and 3 cm wide.", options: ["11 cm²", "16 cm²", "24 cm²", "48 cm²"], answer: 2, explanation: "Area = length × width = 8 × 3 = 24 cm²." },
    { question: "Find the area of a triangle with base 10 cm and height 6 cm.", options: ["16 cm²", "30 cm²", "60 cm²", "120 cm²"], answer: 1, explanation: "Area = 1/2 × 10 × 6 = 30 cm²." },
    { question: "A circle has diameter 10 cm. What is its radius?", options: ["2 cm", "5 cm", "10 cm", "20 cm"], answer: 1, explanation: "Radius is half the diameter: 10 ÷ 2 = 5 cm." },
    { question: "Find the circumference of a circle with radius 7 cm, using π = 22/7.", options: ["22 cm", "44 cm", "49 cm", "154 cm"], answer: 1, explanation: "C = 2πr = 2 × 22/7 × 7 = 44 cm." },
    { question: "Find the area of a circle with radius 3 cm, using π = 22/7.", options: ["9π cm²", "18π cm²", "27π cm²", "6π cm²"], answer: 0, explanation: "Area = πr² = π × 3² = 9π cm²." },
    { question: "How many sides does a pentagon have?", options: ["4", "5", "6", "7"], answer: 1, explanation: "A pentagon has five sides." },
    { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1, explanation: "A hexagon has six sides." },
    { question: "What is the complement of 35°?", options: ["45°", "55°", "65°", "145°"], answer: 1, explanation: "Complementary angles add to 90°: 90 − 35 = 55°." },
    { question: "What is the supplement of 120°?", options: ["30°", "60°", "90°", "240°"], answer: 1, explanation: "Supplementary angles add to 180°: 180 − 120 = 60°." },
    { question: "A right triangle has legs 3 cm and 4 cm. What is the hypotenuse?", options: ["5 cm", "6 cm", "7 cm", "12 cm"], answer: 0, explanation: "By Pythagoras, c = √(3² + 4²) = 5 cm." },
    { question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], answer: 1, explanation: "A cube has six square faces." },
    { question: "Find the volume of a cube with side 4 cm.", options: ["16 cm³", "32 cm³", "64 cm³", "128 cm³"], answer: 2, explanation: "Volume = side³ = 4³ = 64 cm³." },
    { question: "A rectangle has sides 3 cm and 4 cm. What is its diagonal?", options: ["5 cm", "6 cm", "7 cm", "12 cm"], answer: 0, explanation: "The diagonal is √(3² + 4²) = 5 cm." },
    { question: "What is the sum of the exterior angles of any polygon?", options: ["180°", "270°", "360°", "540°"], answer: 2, explanation: "One exterior angle at each vertex makes a full turn of 360°." },
    { question: "In a parallelogram, opposite angles are...", options: ["always equal", "always 90°", "always 45°", "always supplementary"], answer: 0, explanation: "Opposite angles in a parallelogram are equal." }

  ],

  statistics: [
    { question: "Find the mean of 2, 4, 6.", options: ["3", "4", "5", "6"], answer: 1, explanation: "Mean = (2 + 4 + 6) / 3 = 4." },
    { question: "What is the median of 3, 5, 7?", options: ["3", "5", "7", "15"], answer: 1, explanation: "The middle value is 5." },
    { question: "What is the mode of 2, 3, 3, 4?", options: ["2", "3", "4", "12"], answer: 1, explanation: "3 occurs most often." },
    { question: "Find the range of 4, 9, 12, 15.", options: ["9", "11", "15", "19"], answer: 1, explanation: "Range = 15 - 4 = 11." },
    { question: "A fair die has 6 outcomes. What is P(rolling a 3)?", options: ["1/2", "1/3", "1/6", "3/6"], answer: 2, explanation: "One favorable outcome out of six gives 1/6." },
    { question: "What is the probability of an impossible event?", options: ["0", "1/4", "1/2", "1"], answer: 0, explanation: "An impossible event has probability 0." },
    { question: "What is the probability of a certain event?", options: ["0", "1/4", "1/2", "1"], answer: 3, explanation: "A certain event has probability 1." },
    { question: "If Q1 = 4 and Q3 = 10, find the IQR.", options: ["4", "6", "10", "14"], answer: 1, explanation: "IQR = Q3 - Q1 = 10 - 4 = 6." },
    { question: "A sample has 20 observations. How many observations are in 10% of it?", options: ["1", "2", "5", "10"], answer: 1, explanation: "10% of 20 = 2." },
    { question: "If the mean is 10 and there are 5 observations, what is their total?", options: ["15", "20", "50", "100"], answer: 2, explanation: "Total = mean × number of observations = 10 × 5 = 50." },
    { question: "If a value occurs 8 times, what is its frequency?", options: ["4", "8", "16", "80"], answer: 1, explanation: "Frequency is the number of occurrences, so it is 8." },
    { question: "What is the midpoint of the interval 10-20?", options: ["10", "15", "20", "30"], answer: 1, explanation: "Midpoint = (10 + 20) / 2 = 15." },
    { question: "If P(A) = 0.3, what is P(not A)?", options: ["0.3", "0.5", "0.7", "1.3"], answer: 2, explanation: "P(not A) = 1 - 0.3 = 0.7." },
    { question: "What is 25% of 40?", options: ["5", "10", "15", "20"], answer: 1, explanation: "25% of 40 = 10." },
    { question: "What is the mean of 5 and 9?", options: ["5", "7", "9", "14"], answer: 1, explanation: "Mean = (5 + 9) / 2 = 7." },
    { question: "If the maximum is 18 and minimum is 7, what is the range?", options: ["9", "10", "11", "25"], answer: 2, explanation: "Range = 18 - 7 = 11." },
    { question: "How many outcomes are possible when tossing one fair coin?", options: ["1", "2", "3", "4"], answer: 1, explanation: "The outcomes are heads and tails, so there are 2." },
    { question: "What does a histogram mainly display?", options: ["Continuous or grouped numerical data", "Only names", "Only equations", "Geometric angles"], answer: 0, explanation: "Histograms display frequencies for numerical class intervals." },
    { question: "What is the possible range of Pearson correlation r?", options: ["0 to 100", "-1 to 1", "-10 to 10", "1 to 10"], answer: 1, explanation: "Pearson's r ranges from -1 to +1." },
    { question: "If a regression line predicts 12 and the observed value is 15, what is the residual?", options: ["-3", "0", "3", "27"], answer: 2, explanation: "Residual = observed - predicted = 15 - 12 = 3." }
  ],

  calculus: [
    { question: "What is the derivative of x²?", options: ["x", "2x", "x²", "2"], answer: 1, explanation: "By the power rule, d/dx(x²) = 2x." },
    { question: "What is the derivative of x³?", options: ["3x²", "x²", "3x", "x⁴"], answer: 0, explanation: "By the power rule, d/dx(x³) = 3x²." },
    { question: "What is the derivative of a constant?", options: ["1", "The constant", "0", "x"], answer: 2, explanation: "The derivative of a constant is 0." },
    { question: "What is the limit of x + 4 as x approaches 3?", options: ["3", "4", "7", "12"], answer: 2, explanation: "Substitute x = 3: 3 + 4 = 7." },
    { question: "What is the derivative of 5x?", options: ["5", "x", "5x", "0"], answer: 0, explanation: "d/dx(5x) = 5." },
    { question: "What is the integral of 2x?", options: ["2x² + C", "x² + C", "2 + C", "x + C"], answer: 1, explanation: "∫2x dx = x² + C." },
    { question: "What does a derivative measure?", options: ["Area only", "Instantaneous rate of change", "Probability", "Distance only"], answer: 1, explanation: "A derivative measures instantaneous rate of change." },
    { question: "What is the derivative of x⁴?", options: ["4x³", "x³", "4x", "x⁵"], answer: 0, explanation: "The power rule gives 4x³." },
    { question: "What is the integral of 1 dx?", options: ["1", "x + C", "0", "x² + C"], answer: 1, explanation: "The antiderivative of 1 is x + C." },
    { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)", "tan(x)"], answer: 0, explanation: "d/dx[sin(x)] = cos(x)." },
    { question: "What is the derivative of cos(x)?", options: ["sin(x)", "-sin(x)", "cos(x)", "tan(x)"], answer: 1, explanation: "d/dx[cos(x)] = -sin(x)." },
    { question: "What is the main purpose of the chain rule?", options: ["Differentiate composite functions", "Find area only", "Solve probability", "Find medians"], answer: 0, explanation: "The chain rule differentiates composite functions." },
    { question: "If f'(x) > 0 on an interval, f is generally...", options: ["decreasing", "constant", "increasing", "undefined"], answer: 2, explanation: "A positive derivative indicates an increasing function on the interval." },
    { question: "A point where f'(x) = 0 may be called a...", options: ["critical point", "sample", "limit", "coefficient"], answer: 0, explanation: "A point where the derivative is zero is a critical point if it lies in the domain." },
    { question: "What does a definite integral commonly represent?", options: ["A signed accumulation", "A derivative", "A median", "A slope only"], answer: 0, explanation: "A definite integral can represent signed area or accumulated change." },
    { question: "What is the constant of integration?", options: ["C", "x", "0", "π"], answer: 0, explanation: "Indefinite integrals include an arbitrary constant C." },
    { question: "Which rule differentiates a product of two functions?", options: ["Product rule", "Power rule", "Quotient rule", "Chain rule only"], answer: 0, explanation: "The product rule is used for products." },
    { question: "Which rule is commonly used for a quotient of functions?", options: ["Sum rule", "Quotient rule", "Power rule", "Constant rule"], answer: 1, explanation: "The quotient rule differentiates a quotient." },
    { question: "What is an antiderivative?", options: ["A function whose derivative is the given function", "A maximum value", "A limit", "A graph"], answer: 0, explanation: "An antiderivative differentiates to the original function." },
    { question: "What is the Fundamental Theorem of Calculus mainly about?", options: ["The connection between differentiation and integration", "Only geometry", "Only probability", "Only statistics"], answer: 0, explanation: "It connects differentiation and integration." }
  ],
  ]
};

const PRACTICE_TOTAL = 10;

let practiceSubject = null;
let practiceQuestions = [];
let practiceIndex = 0;
let practiceScore = 0;
let practiceAnswered = false;
let practiceResponses = [];

const practiceStart = document.getElementById("practiceStart");
const practiceQuiz = document.getElementById("practiceQuiz");
const practiceResult = document.getElementById("practiceResult");
const practiceProgress = document.getElementById("practiceProgress");
const practiceSubjectLabel = document.getElementById("practiceSubjectLabel");
const practiceQuestionText = document.getElementById("practiceQuestionText");
const practiceOptions = document.getElementById("practiceOptions");
const practiceFeedback = document.getElementById("practiceFeedback");
const practiceScoreDisplay = document.getElementById("practiceScore");
const practiceAnsweredDisplay = document.getElementById("practiceAnswered");
const practiceNextQuestion = document.getElementById("practiceNextQuestion");
const practicePreviousQuestion = document.getElementById("practicePreviousQuestion");
const practiceResultTitle = document.getElementById("practiceResultTitle");
const practiceResultScore = document.getElementById("practiceResultScore");
const practiceResultSummary = document.getElementById("practiceResultSummary");
const practiceRetry = document.getElementById("practiceRetry");
const practiceChooseAnother = document.getElementById("practiceChooseAnother");
const backToPracticeSubjects = document.getElementById("backToPracticeSubjects");

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function showPracticeStart() {
  practiceStart.hidden = false;
  practiceQuiz.hidden = true;
  practiceResult.hidden = true;
}

function startPractice(subject) {
  practiceSubject = subject;
  practiceQuestions = shuffle(practiceQuestionBank[subject]).slice(0, PRACTICE_TOTAL);
  practiceIndex = 0;
  practiceScore = 0;
  practiceAnswered = false;
  practiceResponses = new Array(PRACTICE_TOTAL).fill(null);

  practiceStart.hidden = true;
  practiceResult.hidden = true;
  practiceQuiz.hidden = false;

  practiceSubjectLabel.textContent = `${subject.toUpperCase()} PRACTICE`;
  renderPracticeQuestion();

  document.getElementById("practice").scrollIntoView({ behavior: "smooth" });
}

function renderPracticeQuestion() {
  const question = practiceQuestions[practiceIndex];
  const savedAnswer = practiceResponses[practiceIndex];

  practiceAnswered = savedAnswer !== null;
  practiceProgress.textContent = `Question ${practiceIndex + 1} of ${PRACTICE_TOTAL}`;
  practiceQuestionText.textContent = question.question;
  practiceScore = practiceResponses.reduce((total, answer, index) => {
    return total + (answer !== null && answer === practiceQuestions[index].answer ? 1 : 0);
  }, 0);
  practiceScoreDisplay.textContent = `Score: ${practiceScore} / ${PRACTICE_TOTAL}`;
  practiceAnsweredDisplay.textContent = `Answered: ${practiceResponses.filter(answer => answer !== null).length} / ${PRACTICE_TOTAL}`;
  practiceFeedback.textContent = "";
  practiceFeedback.className = "practice-feedback";

  practiceOptions.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "practice-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    if (savedAnswer !== null) {
      // Keep the previous answer visible, but allow the user to change it.
      if (index === question.answer && savedAnswer === question.answer) {
        button.classList.add("correct");
      }
      if (index === savedAnswer && savedAnswer !== question.answer) {
        button.classList.add("incorrect");
      }
      if (index === savedAnswer) {
        button.classList.add("selected");
      }
    }

    button.addEventListener("click", () => answerPracticeQuestion(index));

    practiceOptions.appendChild(button);
  });

  if (savedAnswer !== null) {
    if (savedAnswer === question.answer) {
      practiceFeedback.textContent = `Correct! 🎉 ${question.explanation}`;
      practiceFeedback.classList.add("correct-text");
    } else {
      practiceFeedback.textContent = `Not quite. ${question.explanation}`;
      practiceFeedback.classList.add("incorrect-text");
    }
  }

  practicePreviousQuestion.disabled = practiceIndex === 0;
  practiceNextQuestion.disabled = savedAnswer === null;
  practiceNextQuestion.textContent = practiceIndex === PRACTICE_TOTAL - 1 ? "See Result →" : "Next Question →";
}

function answerPracticeQuestion(selectedIndex) {
  // Save the latest choice. If the user is returning to a question,
  // this replaces the previous answer rather than adding another score.
  practiceResponses[practiceIndex] = selectedIndex;
  renderPracticeQuestion();
}

function finishPractice() {
  const percentage = Math.round((practiceScore / PRACTICE_TOTAL) * 100);

  practiceQuiz.hidden = true;
  practiceResult.hidden = false;
  practiceResultScore.textContent = `${practiceScore} / ${PRACTICE_TOTAL}`;
  practiceResultSummary.textContent = `You answered ${practiceScore} out of ${PRACTICE_TOTAL} questions correctly (${percentage}%).`;

  if (percentage >= 70) {
    practiceResultTitle.textContent = "Excellent work! 🎉";
  } else if (percentage >= 50) {
    practiceResultTitle.textContent = "Good effort! Keep practicing. 💪";
  } else {
    practiceResultTitle.textContent = "Keep going — practice makes progress. 📚";
  }

  document.getElementById("practice").scrollIntoView({ behavior: "smooth" });
}

practicePreviousQuestion.addEventListener("click", function () {
  if (practiceIndex === 0) return;

  practiceIndex--;
  renderPracticeQuestion();
});

practiceNextQuestion.addEventListener("click", function () {
  if (!practiceAnswered) return;

  if (practiceIndex === PRACTICE_TOTAL - 1) {
    finishPractice();
    return;
  }

  practiceIndex++;
  renderPracticeQuestion();
});

document.querySelectorAll("[data-practice-subject]").forEach((button) => {
  button.addEventListener("click", function () {
    startPractice(this.dataset.practiceSubject);
  });
});

practiceRetry.addEventListener("click", function () {
  startPractice(practiceSubject);
});

practiceChooseAnother.addEventListener("click", function () {
  showPracticeStart();
  document.getElementById("practice").scrollIntoView({ behavior: "smooth" });
});

backToPracticeSubjects.addEventListener("click", function () {
  showPracticeStart();
});

// Make the navbar Practice link work even when a subject/lesson is open.
const practiceNavLink = document.querySelector('.menu a[href="#practice"]');

practiceNavLink.addEventListener("click", function (event) {
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

  document.getElementById("practice").scrollIntoView({ behavior: "smooth" });

  if (typeof menu !== "undefined") {
    menu.classList.remove("show");
  }
});

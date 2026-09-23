// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {

  menu.classList.toggle("show");

});


// ===============================
// START LEARNING BUTTON
// ===============================

const startLearning =
  document.querySelector("#startLearning");

const lessonsSection =
  document.querySelector("#lessons");

startLearning.addEventListener("click", function () {

  lessonsSection.scrollIntoView({
    behavior: "smooth"
  });

});


// ===============================
// HTML ELEMENTS
// ===============================

const lessonView =
  document.getElementById("lessonView");

const lessonContent =
  document.getElementById("lessonContent");

const answerInput =
  document.getElementById("answerInput");

const checkAnswer =
  document.getElementById("checkAnswer");

const answerFeedback =
  document.getElementById("answerFeedback");

const lessonTitle =
  document.getElementById("lessonTitle");

const lessonDescription =
  document.getElementById("lessonDescription");

const practiceQuestion =
  document.getElementById("practiceQuestion");

const scoreDisplay =
  document.getElementById("scoreDisplay");

const quizResult =
  document.getElementById("quizResult");

const nextQuestion =
  document.getElementById("nextQuestion");


// ===============================
// SUBJECT PAGE ELEMENTS
// ===============================

const subjectPage =
  document.getElementById("subjectPage");

const subjectTitle =
  document.getElementById("subjectTitle");

const subjectDescription =
  document.getElementById("subjectDescription");

const subjectLessons =
  document.getElementById("subjectLessons");

const backToLessons =
  document.getElementById("backToLessons");

const backToSubject =
  document.getElementById("backToSubject");

const previousLesson =
  document.getElementById("previousLesson");

const nextLesson =
  document.getElementById("nextLesson");

const lessonPosition =
  document.getElementById("lessonPosition");


// ===============================
// CURRENT LESSON VARIABLES
// ===============================

let currentSubject = null;

let currentLesson = null;

let currentQuestion = 0;

let score = 0;

let questionAnswered = false;


// ===============================
// PROGRESS STORAGE
// ===============================

let completedLessons = [];

const savedProgress =
  localStorage.getItem("mathHubProgress");

if (savedProgress) {

  completedLessons =
    JSON.parse(savedProgress);

}


// ===============================
// SAVE PROGRESS
// ===============================

function saveProgress() {

  localStorage.setItem(
    "mathHubProgress",
    JSON.stringify(completedLessons)
  );

}


// ===============================
// CREATE UNIQUE LESSON ID
// ===============================

function getLessonId(subject, lessonId) {

  return `${subject}-${lessonId}`;

}


// ===============================
// SUBJECT DATA
// ===============================

const subjects = {

  algebra: algebraLessons,

  geometry: geometryLessons,

  statistics: statisticsLessons,

  calculus: calculusLessons

};


// ===============================
// CREATE LESSON CARDS
// ===============================

function createLessonCards(subject) {

  const lessons =
    subjects[subject];


  // Clear old lesson cards

  subjectLessons.innerHTML = "";


  lessons.forEach(function (lesson) {

    const lessonCard =
      document.createElement("div");


    lessonCard.classList.add(
      "algebra-lesson-card"
    );


    // Create unique ID

    const uniqueLessonId =
      getLessonId(
        subject,
        lesson.id
      );


    // Check whether lesson is completed

    const isCompleted =
      completedLessons.includes(
        uniqueLessonId
      );


    // Create lesson card

    lessonCard.innerHTML = `

            <div class="lesson-number">

                ${lesson.id}

            </div>


            <div class="algebra-lesson-info">

                <h3>
                    ${lesson.title}
                </h3>

                <p>
                    ${lesson.description}
                </p>

                <small>

                    ${isCompleted
        ? "✅ Completed"
        : "Not completed"
      }

                </small>

            </div>


            <button class="open-lesson">

                ${isCompleted
        ? "Review →"
        : "Start →"
      }

            </button>

        `;


    // Add card to page

    subjectLessons.appendChild(
      lessonCard
    );


    // Get button

    const openLessonBtn =
      lessonCard.querySelector(
        ".open-lesson"
      );


    // Open lesson when clicked

    openLessonBtn.addEventListener(
      "click",
      function () {

        openLesson(
          subject,
          lesson
        );

      }
    );

  });

}


// ===============================
// OPEN LESSON
// ===============================

function openLesson(subject, lesson) {

  currentSubject =
    subject;

  currentLesson =
    lesson;

  currentQuestion =
    0;

  score =
    0;

  questionAnswered =
    false;


  // Hide pages

  lessonsSection.style.display =
    "none";

  subjectPage.style.display =
    "none";

  lessonView.style.display =
    "block";


  // Load lesson information

  lessonTitle.textContent =
    lesson.title;

  lessonDescription.textContent =
    lesson.description;

  lessonContent.innerHTML =
    lesson.content;

  renderFormulaCard(
    subject,
    lesson.title
  );

  renderVisualAid(
    subject,
    lesson.title
  );


  // Clear result

  quizResult.textContent =
    "";


  // Show quiz controls

  answerInput.style.display =
    "inline-block";

  checkAnswer.style.display =
    "inline-block";


  nextQuestion.style.display =
    "none";


  // Show lesson position and navigation
  updateLessonNavigation();

  // Show first question

  showQuestion();


  // Scroll to lesson

  lessonView.scrollIntoView({
    behavior: "smooth"
  });

}



// ===============================
// VISUAL FORMULA CARD
// ===============================

function getFormulaForLesson(subject, title) {

  if (subject !== "calculus") {
    return null;
  }

  const formulas = {
    "Limits": ["lim x→a f(x)", "The value f(x) approaches as x approaches a."],
    "Evaluating Limits": ["lim x→a f(x)", "Evaluate the expression as x approaches a."],
    "One-Sided Limits": ["lim x→a⁻ f(x)  |  lim x→a⁺ f(x)", "Approach the point from the left or right."],
    "Continuity": ["f(a) = lim x→a f(x)", "A function is continuous at a when its value equals its limit."],
    "Average Rate of Change": ["[f(b) − f(a)] / (b − a)", "Change in output divided by change in input."],
    "The Derivative": ["f'(x) = lim h→0 [f(x+h) − f(x)] / h", "The derivative measures instantaneous rate of change."],
    "Derivative Notation": ["f'(x) = dy/dx", "Common notation for the derivative."],
    "Power Rule": ["d/dx(xⁿ) = nxⁿ⁻¹", "Multiply by the exponent and reduce the exponent by 1."],
    "Product Rule": ["(uv)' = u'v + uv'", "Use when two functions are multiplied."],
    "Quotient Rule": ["(u/v)' = (u'v − uv') / v²", "Use when one function is divided by another."],
    "Chain Rule": ["d/dx[f(g(x))] = f'(g(x))g'(x)", "Use for composite functions."],
    "Second Derivative": ["f''(x) = d/dx[f'(x)]", "The derivative of the first derivative."],
    "Related Rates": ["dy/dt = (dy/dx)(dx/dt)", "Connect rates of changing quantities."],
    "Linear Approximation": ["L(x) = f(a) + f'(a)(x − a)", "Approximate a function near a known point."],
    "Critical Points": ["f'(x) = 0  or  f'(x) undefined", "Critical points are candidates for extrema."],
    "First Derivative Test": ["f': + → −  ⇒  local maximum", "A positive-to-negative sign change indicates a local maximum."],
    "Concavity": ["f''(x) > 0 ⇒ concave up", "Positive second derivative indicates concave up."],
    "Inflection Points": ["f''(x) = 0  (candidate)", "A true inflection point requires a change in concavity."],
    "Optimization": ["Maximum / Minimum", "Use critical points and endpoints to find extreme values."],
    "Velocity and Acceleration": ["v(t)=s'(t),   a(t)=s''(t)", "Velocity is the derivative of position; acceleration is the derivative of velocity."],
    "Antiderivatives": ["F'(x) = f(x)", "An antiderivative differentiates back to the original function."],
    "Indefinite Integrals": ["∫ f(x) dx = F(x) + C", "The constant C represents the family of antiderivatives."],
    "Definite Integrals": ["∫ₐᵇ f(x) dx = F(b) − F(a)", "Evaluate an antiderivative at the upper and lower bounds."],
    "Fundamental Theorem of Calculus": ["d/dx ∫ₐˣ f(t)dt = f(x)", "Differentiation and integration are closely connected."],
    "Substitution Method": ["u = g(x)", "Substitution simplifies an integral by replacing an inner expression."],
    "Integration by Parts": ["∫u dv = uv − ∫v du", "Useful when an integrand is a product of functions."],
    "Area Between Curves": ["A = ∫ [top − bottom] dx", "Integrate the vertical difference between two curves."],
    "Volumes by Disks": ["V = π∫ R² dx", "Add the areas of circular cross-sections."],
    "Volumes by Washers": ["V = π∫(R² − r²) dx", "Subtract the inner disk from the outer disk."],
    "Volumes by Cylindrical Shells": ["V = 2π∫(radius)(height) dx", "Add the volume of thin cylindrical shells."],
    "Arc Length": ["L = ∫ √(1 + [f'(x)]²) dx", "Measure distance along a curve."],
    "Parametric Derivatives": ["dy/dx = (dy/dt)/(dx/dt)", "Differentiate x and y with respect to the parameter."],
    "Polar Area": ["A = ½∫ r² dθ", "Find area in polar coordinates."],
    "Arithmetic Sequences": ["aₙ = a₁ + (n−1)d", "The nth term of an arithmetic sequence."],
    "Geometric Sequences": ["aₙ = a₁rⁿ⁻¹", "The nth term of a geometric sequence."],
    "Infinite Geometric Series": ["S = a₁/(1−r),  |r|<1", "The infinite geometric series converges when |r| is less than 1."],
    "Taylor Series": ["Σ [f⁽ⁿ⁾(a)/n!] (x−a)ⁿ", "Represent a function as a power series around a."],
    "Maclaurin Series": ["Σ [f⁽ⁿ⁾(0)/n!] xⁿ", "A Taylor series centered at zero."],
    "Differential Equations Introduction": ["dy/dx = f(x,y)", "An equation involving an unknown function and its derivatives."],
    "Growth and Decay Models": ["P(t) = P₀eᵏᵗ", "The sign of k determines basic exponential growth or decay."]
  };

  return formulas[title] || [
    "Identify the definition or rule",
    "Check the conditions, substitute carefully, and simplify."
  ];
}

// ===============================
// VISUAL MATH DIAGRAMS
// ===============================

function getVisualType(title) {
  const derivativeTopics = [
    "The Derivative","Derivative Notation","Power Rule","Product Rule",
    "Quotient Rule","Chain Rule","Second Derivative","Related Rates",
    "Critical Points","First Derivative Test","Local Maximum and Minimum",
    "Concavity","Inflection Points","Optimization","Velocity and Acceleration"
  ];

  const integralTopics = [
    "Antiderivatives","Indefinite Integrals","Definite Integrals",
    "Riemann Sums","Area Under a Curve","Area Between Curves",
    "Average Value of a Function","Substitution Method","Integration by Substitution",
    "Integration by Parts","Volumes by Disks","Volumes by Washers",
    "Volumes by Cylindrical Shells","Arc Length","Trapezoidal Rule",
    "Midpoint Rule","Simpson's Rule"
  ];

  const seriesTopics = [
    "Sequences","Series","Arithmetic Sequences","Geometric Sequences",
    "Infinite Geometric Series","Power Series","Taylor Series",
    "Maclaurin Series","Taylor Polynomial","Applications of Taylor Series"
  ];

  if (derivativeTopics.includes(title)) return "derivative";
  if (integralTopics.includes(title)) return "integral";
  if (seriesTopics.includes(title)) return "series";
  if (title === "Polar Coordinates" || title === "Polar Area") return "polar";
  if (title === "Volumes by Disks" || title === "Volumes by Washers") return "circle";
  return null;
}

function renderVisualAid(subject, title) {

  if (subject !== "calculus") return;

  const type = getVisualType(title);
  if (!type) return;

  const card = document.createElement("div");
  card.className = "visual-math-card";

  let visual = "";
  let caption = "";

  if (type === "derivative") {
    visual = `
      <svg class="math-diagram" viewBox="0 0 520 250" role="img" aria-label="Curve with tangent line">
        <line x1="55" y1="210" x2="490" y2="210" class="axis"/>
        <line x1="80" y1="225" x2="80" y2="25" class="axis"/>
        <path d="M80 185 C150 175 165 120 225 125 S315 95 370 70 S445 45 480 35" class="curve"/>
        <line x1="120" y1="195" x2="440" y2="55" class="tangent"/>
        <circle cx="280" cy="125" r="6" class="point"/>
        <text x="292" y="118">point of tangency</text>
        <text x="470" y="230">x</text>
        <text x="60" y="38">y</text>
      </svg>`;
    caption = "The derivative gives the slope of the tangent line at a point.";
  }

  if (type === "integral") {
    visual = `
      <svg class="math-diagram" viewBox="0 0 520 250" role="img" aria-label="Area under a curve">
        <line x1="55" y1="210" x2="490" y2="210" class="axis"/>
        <line x1="70" y1="225" x2="70" y2="25" class="axis"/>
        <path d="M70 185 C140 165 175 145 225 120 S330 75 470 45 L470 210 L70 210 Z" class="area"/>
        <path d="M70 185 C140 165 175 145 225 120 S330 75 470 45" class="curve"/>
        <line x1="120" y1="210" x2="120" y2="170" class="slice"/>
        <line x1="170" y1="210" x2="170" y2="150" class="slice"/>
        <line x1="220" y1="210" x2="220" y2="122" class="slice"/>
        <line x1="270" y1="210" x2="270" y2="103" class="slice"/>
        <line x1="320" y1="210" x2="320" y2="80" class="slice"/>
        <line x1="370" y1="210" x2="370" y2="68" class="slice"/>
        <text x="255" y="235">accumulated area</text>
      </svg>`;
    caption = "A definite integral can represent accumulated change or signed area.";
  }

  if (type === "series") {
    visual = `
      <svg class="math-diagram" viewBox="0 0 520 250" role="img" aria-label="Converging series terms">
        <line x1="55" y1="210" x2="490" y2="210" class="axis"/>
        <circle cx="90" cy="90" r="22" class="series-dot"/>
        <circle cx="155" cy="125" r="16" class="series-dot"/>
        <circle cx="210" cy="150" r="11" class="series-dot"/>
        <circle cx="255" cy="170" r="8" class="series-dot"/>
        <circle cx="292" cy="183" r="6" class="series-dot"/>
        <circle cx="322" cy="191" r="4" class="series-dot"/>
        <text x="345" y="195">terms approach a limit</text>
      </svg>`;
    caption = "In a convergent series, partial sums approach a finite value.";
  }

  if (type === "polar") {
    visual = `
      <svg class="math-diagram" viewBox="0 0 520 250" role="img" aria-label="Polar coordinate diagram">
        <line x1="65" y1="135" x2="485" y2="135" class="axis"/>
        <line x1="275" y1="230" x2="275" y2="30" class="axis"/>
        <circle cx="275" cy="135" r="78" class="polar-grid"/>
        <line x1="275" y1="135" x2="345" y2="92" class="radius"/>
        <circle cx="345" cy="92" r="6" class="point"/>
        <path d="M315 135 A40 40 0 0 0 310 113" class="angle"/>
        <text x="350" y="88">r</text>
        <text x="315" y="116">θ</text>
        <text x="280" y="50">y</text>
        <text x="475" y="130">x</text>
      </svg>`;
    caption = "A polar point is described by its distance r from the origin and angle θ.";
  }

  if (type === "circle") {
    visual = `
      <svg class="math-diagram" viewBox="0 0 520 250" role="img" aria-label="Circular cross section">
        <circle cx="255" cy="125" r="78" class="circle-shape"/>
        <line x1="255" y1="125" x2="333" y2="125" class="radius"/>
        <circle cx="255" cy="125" r="5" class="point"/>
        <text x="285" y="116">R</text>
        <text x="185" y="225">circular cross-section</text>
      </svg>`;
    caption = "Disk and washer methods build volume from circular cross-sections.";
  }

  card.innerHTML = `
    <div class="visual-math-label">VISUAL EXPLANATION</div>
    ${visual}
    <p class="visual-math-caption">${caption}</p>
  `;

  lessonContent.appendChild(card);
}

function renderFormulaCard(subject, title) {

  const formula = getFormulaForLesson(subject, title);

  if (!formula) return;

  const card = document.createElement("div");
  card.className = "formula-card";

  card.innerHTML = `
    <div class="formula-label">KEY FORMULA / IDEA</div>
    <div class="formula-expression">${formula[0]}</div>
    <p>${formula[1]}</p>
  `;

  lessonContent.appendChild(card);
}

// ===============================
// LESSON NAVIGATION
// ===============================

function updateLessonNavigation() {

  if (!currentSubject || !currentLesson) return;

  const subjectLessonsList =
    subjects[currentSubject];

  const lessonIndex =
    subjectLessonsList.findIndex(
      function (lesson) {
        return lesson.id === currentLesson.id;
      }
    );

  const total =
    subjectLessonsList.length;

  lessonPosition.textContent =
    `Lesson ${lessonIndex + 1} of ${total}`;

  previousLesson.disabled =
    lessonIndex === 0;

  nextLesson.disabled =
    lessonIndex === total - 1;
}

previousLesson.addEventListener(
  "click",
  function () {

    if (!currentSubject || !currentLesson) return;

    const subjectLessonsList =
      subjects[currentSubject];

    const lessonIndex =
      subjectLessonsList.findIndex(
        function (lesson) {
          return lesson.id === currentLesson.id;
        }
      );

    if (lessonIndex > 0) {

      openLesson(
        currentSubject,
        subjectLessonsList[lessonIndex - 1]
      );

    }

  }
);

nextLesson.addEventListener(
  "click",
  function () {

    if (!currentSubject || !currentLesson) return;

    const subjectLessonsList =
      subjects[currentSubject];

    const lessonIndex =
      subjectLessonsList.findIndex(
        function (lesson) {
          return lesson.id === currentLesson.id;
        }
      );

    if (lessonIndex < subjectLessonsList.length - 1) {

      openLesson(
        currentSubject,
        subjectLessonsList[lessonIndex + 1]
      );

    }

  }
);

// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

  const question =
    currentLesson.practice[
    currentQuestion
    ];


  practiceQuestion.textContent =
    question.question;


  answerInput.value =
    "";

  answerFeedback.textContent =
    "";


  scoreDisplay.textContent =
    `Score: ${score} / ${currentLesson.practice.length}`;


  questionAnswered =
    false;


  answerInput.disabled =
    false;

  checkAnswer.disabled =
    false;


  nextQuestion.style.display =
    "none";

}


// ===============================
// CHECK ANSWER
// ===============================

checkAnswer.addEventListener(
  "click",
  function () {

    if (questionAnswered) {

      return;

    }


    const userAnswer =
      Number(
        answerInput.value
      );


    const question =
      currentLesson.practice[
      currentQuestion
      ];


    if (
      userAnswer ===
      question.answer
    ) {

      answerFeedback.textContent =
        "Correct! 🎉 Well done.";

      score++;

    } else {

      answerFeedback.textContent =
        `Not quite. The correct answer is ${question.answer}.`;

    }


    questionAnswered =
      true;


    answerInput.disabled =
      true;

    checkAnswer.disabled =
      true;


    scoreDisplay.textContent =
      `Score: ${score} / ${currentLesson.practice.length}`;


    nextQuestion.style.display =
      "block";

  }
);


// ===============================
// NEXT QUESTION
// ===============================

nextQuestion.addEventListener(
  "click",
  function () {

    currentQuestion++;


    // More questions remaining

    if (
      currentQuestion <
      currentLesson.practice.length
    ) {

      showQuestion();

      return;

    }


    // ===============================
    // QUIZ FINISHED
    // ===============================

    const totalQuestions =
      currentLesson.practice.length;


    const percentage =
      (score / totalQuestions) * 100;


    practiceQuestion.textContent =
      "🎉 You have completed all the questions!";


    answerInput.style.display =
      "none";

    checkAnswer.style.display =
      "none";

    nextQuestion.style.display =
      "none";


    answerFeedback.textContent =
      "";


    scoreDisplay.textContent =
      `Final Score: ${score} / ${totalQuestions}`;


    // ===============================
    // LESSON COMPLETED
    // ===============================

    if (percentage >= 70) {

      quizResult.textContent =
        `🎉 Excellent! You scored ${percentage}%. Lesson completed!`;


      const uniqueLessonId =
        getLessonId(
          currentSubject,
          currentLesson.id
        );


      if (
        !completedLessons.includes(
          uniqueLessonId
        )
      ) {

        completedLessons.push(
          uniqueLessonId
        );


        saveProgress();

      }


      updateProgress();


    } else {

      quizResult.textContent =
        `You scored ${percentage}%. You need at least 70% to complete this lesson. Keep practicing!`;

    }

  }
);


// ===============================
// OPEN SUBJECT
// ===============================

function openSubject(subject) {

  lessonsSection.style.display =
    "none";

  lessonView.style.display =
    "none";

  subjectPage.style.display =
    "block";


  // Format subject name

  const formattedName =
    subject.charAt(0).toUpperCase() +
    subject.slice(1);


  // Display subject name

  subjectTitle.textContent =
    formattedName;


  // Display subject description

  subjectDescription.textContent =
    `Master ${formattedName} through simple explanations, examples and interactive practice.`;


  // Create lesson cards

  createLessonCards(
    subject
  );


  // Scroll to subject page

  subjectPage.scrollIntoView({
    behavior: "smooth"
  });

}


// ===============================
// OPEN ALGEBRA
// ===============================

const algebraBtn =
  document.getElementById(
    "algebraBtn"
  );


algebraBtn.addEventListener(
  "click",
  function () {

    openSubject(
      "algebra"
    );

  }
);


// ===============================
// OPEN GEOMETRY
// ===============================

const geometryBtn =
  document.getElementById(
    "geometryBtn"
  );


geometryBtn.addEventListener(
  "click",
  function () {

    openSubject(
      "geometry"
    );

  }
);


// ===============================
// OPEN STATISTICS
// ===============================

const statisticsBtn =
  document.getElementById(
    "statisticsBtn"
  );

statisticsBtn.addEventListener(
  "click",
  function () {
    openSubject(
      "statistics"
    );
  }
);

// ===============================
// OPEN CALCULUS
// ===============================

const calculusBtn =
  document.getElementById(
    "calculusBtn"
  );

calculusBtn.addEventListener(
  "click",
  function () {
    openSubject(
      "calculus"
    );
  }
);


// ===============================
// BACK TO SUBJECT LIST
// ===============================

backToLessons.addEventListener(
  "click",
  function () {

    subjectPage.style.display =
      "none";

    lessonsSection.style.display =
      "block";


    lessonsSection.scrollIntoView({
      behavior: "smooth"
    });

  }
);


// ===============================
// BACK TO CURRENT SUBJECT
// ===============================

backToSubject.addEventListener(
  "click",
  function () {

    lessonView.style.display =
      "none";

    subjectPage.style.display =
      "block";


    // Format subject name

    const formattedName =
      currentSubject
        .charAt(0)
        .toUpperCase() +
      currentSubject.slice(1);


    subjectTitle.textContent =
      formattedName;


    subjectDescription.textContent =
      `Master ${formattedName} through simple explanations, examples and interactive practice.`;


    // Recreate lesson cards

    createLessonCards(
      currentSubject
    );


    subjectPage.scrollIntoView({
      behavior: "smooth"
    });

  }
);


// ===============================
// UPDATE PROGRESS
// ===============================

function updateProgress() {

  const progressText =
    document.getElementById(
      "progressText"
    );


  const overallProgressFill =
    document.getElementById(
      "overallProgressFill"
    );


  const overallPercentage =
    document.getElementById(
      "overallPercentage"
    );


  const lessonProgressList =
    document.getElementById(
      "lessonProgressList"
    );


  // ===============================
  // CALCULATE TOTAL LESSONS
  // ===============================

  let totalLessons =
    0;

  let totalCompleted =
    0;


  Object.keys(subjects).forEach(
    function (subject) {

      totalLessons +=
        subjects[subject].length;


      subjects[subject].forEach(
        function (lesson) {

          const uniqueLessonId =
            getLessonId(
              subject,
              lesson.id
            );


          if (
            completedLessons.includes(
              uniqueLessonId
            )
          ) {

            totalCompleted++;

          }

        }
      );

    }
  );


  // ===============================
  // CALCULATE PERCENTAGE
  // ===============================

  const percentage =
    totalLessons === 0
      ? 0
      : (totalCompleted / totalLessons) * 100;


  // ===============================
  // UPDATE OVERALL PROGRESS
  // ===============================

  progressText.textContent =
    `${totalCompleted} of ${totalLessons} lessons completed`;


  overallProgressFill.style.width =
    `${percentage}%`;


  overallPercentage.textContent =
    `${percentage.toFixed(1)}%`;


  // ===============================
  // CLEAR OLD PROGRESS
  // ===============================

  lessonProgressList.innerHTML =
    "";


  // ===============================
  // DISPLAY SUBJECT PROGRESS
  // ===============================

  Object.keys(subjects).forEach(
    function (subject) {

      const formattedName =
        subject.charAt(0).toUpperCase() +
        subject.slice(1);


      // Subject heading

      const subjectHeading =
        document.createElement(
          "h3"
        );


      subjectHeading.textContent =
        formattedName;


      lessonProgressList.appendChild(
        subjectHeading
      );


      // Lessons

      subjects[subject].forEach(
        function (lesson) {

          const lessonItem =
            document.createElement(
              "div"
            );


          lessonItem.classList.add(
            "lesson-progress-item"
          );


          const uniqueLessonId =
            getLessonId(
              subject,
              lesson.id
            );


          const isCompleted =
            completedLessons.includes(
              uniqueLessonId
            );


          lessonItem.innerHTML = `

                        <div class="lesson-progress-icon">

                            ${isCompleted
              ? "✅"
              : "🔒"
            }

                        </div>


                        <div class="lesson-progress-info">

                            <h4>
                                ${lesson.title}
                            </h4>

                            <p>

                                ${isCompleted
              ? "Completed"
              : "Not completed"
            }

                            </p>

                        </div>

                    `;


          lessonProgressList.appendChild(
            lessonItem
          );

        }
      );

    }
  );

}


// ===============================
// INITIALIZE
// ===============================

updateProgress();
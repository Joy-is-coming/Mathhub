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

const lessons =
  document.querySelector("#lessons");

startLearning.addEventListener("click", function () {

  lessons.scrollIntoView({
    behavior: "smooth"
  });

});


// ===============================
// ALGEBRA LESSONS
// ===============================

const algebraLessons = [

  {
    id: 1,

    title: "Introduction to Algebra",

    description:
      "Learn the basic ideas and language of algebra.",

    content: `

            <h3>What is Algebra?</h3>

            <p>
                Algebra is a branch of mathematics that uses
                letters and symbols to represent numbers and quantities.
            </p>

            <h3>Variables</h3>

            <p>
                A variable is a letter or symbol used to represent
                an unknown value.
            </p>

            <div class="math-example">
                x + 5 = 12
            </div>

            <p>
                In this equation, <strong>x</strong> is the variable.
            </p>

            <h3>Example</h3>

            <p>
                To solve x + 5 = 12, subtract 5 from both sides:
            </p>

            <div class="math-example">
                x = 7
            </div>

        `,

    practice: [

      {
        question: "If x + 8 = 15, what is x?",
        answer: 7
      },

      {
        question: "If x - 4 = 10, what is x?",
        answer: 14
      },

      {
        question: "If x + 12 = 20, what is x?",
        answer: 8
      },

      {
        question: "If x - 7 = 5, what is x?",
        answer: 12
      },

      {
        question: "If x + 9 = 18, what is x?",
        answer: 9
      }

    ]
  },


  // ===============================
  // LESSON 2
  // ===============================

  {
    id: 2,

    title: "Algebraic Expressions",

    description:
      "Learn how to simplify and evaluate expressions.",

    content: `

            <h3>What is an Algebraic Expression?</h3>

            <p>
                An algebraic expression is a combination of numbers,
                variables and mathematical operations.
            </p>

            <div class="math-example">
                3x + 5
            </div>

            <h3>Terms</h3>

            <p>
                The expression 3x + 5 has two terms:
                3x and 5.
            </p>

            <h3>Example</h3>

            <p>
                Simplify:
            </p>

            <div class="math-example">
                3x + 2x
            </div>

            <p>
                Since both terms contain x, we can combine them:
            </p>

            <div class="math-example">
                3x + 2x = 5x
            </div>

        `,

    practice: [

      {
        question: "Simplify: 3x + 2x. What is the coefficient of x?",
        answer: 5
      },

      {
        question: "Simplify: 4x + 3x. What is the coefficient of x?",
        answer: 7
      },

      {
        question: "If x = 2, what is the value of 3x?",
        answer: 6
      },

      {
        question: "If x = 5, what is the value of 2x?",
        answer: 10
      },

      {
        question: "Simplify: 6x + 4x. What is the coefficient of x?",
        answer: 10
      }

    ]
  },


  // ===============================
  // LESSON 3
  // ===============================

  {
    id: 3,

    title: "Linear Equations",

    description:
      "Learn how to solve equations involving one variable.",

    content: `

            <h3>What is a Linear Equation?</h3>

            <p>
                A linear equation is an equation where the highest
                power of the variable is 1.
            </p>

            <div class="math-example">
                2x + 4 = 10
            </div>

            <h3>Solving a Linear Equation</h3>

            <p>
                First subtract 4 from both sides:
            </p>

            <div class="math-example">
                2x = 6
            </div>

            <p>
                Now divide both sides by 2:
            </p>

            <div class="math-example">
                x = 3
            </div>

        `,

    practice: [

      {
        question: "Solve: 2x = 10. What is x?",
        answer: 5
      },

      {
        question: "Solve: 3x = 12. What is x?",
        answer: 4
      },

      {
        question: "Solve: x + 6 = 14. What is x?",
        answer: 8
      },

      {
        question: "Solve: x - 5 = 9. What is x?",
        answer: 14
      },

      {
        question: "Solve: 4x = 20. What is x?",
        answer: 5
      }

    ]
  },


  // ===============================
  // LESSON 4
  // ===============================

  {
    id: 4,

    title: "Factorization",

    description:
      "Learn different methods of factorizing expressions.",

    content: `

            <h3>What is Factorization?</h3>

            <p>
                Factorization is the process of writing an expression
                as a product of its factors.
            </p>

            <h3>Example</h3>

            <p>
                Factorize:
            </p>

            <div class="math-example">
                x² + 5x + 6
            </div>

            <p>
                We need two numbers whose product is 6 and whose
                sum is 5.
            </p>

            <div class="math-example">
                2 × 3 = 6
            </div>

            <p>
                Therefore:
            </p>

            <div class="math-example">
                x² + 5x + 6 = (x + 2)(x + 3)
            </div>

        `,

    practice: [

      {
        question: "What is 2 × 3?",
        answer: 6
      },

      {
        question: "What is 4 × 2?",
        answer: 8
      },

      {
        question: "What is 5 × 3?",
        answer: 15
      },

      {
        question: "What is 6 × 2?",
        answer: 12
      },

      {
        question: "What is 4 × 4?",
        answer: 16
      }

    ]
  },


  // ===============================
  // LESSON 5
  // ===============================

  {
    id: 5,

    title: "Quadratic Equations",

    description:
      "Learn how to solve quadratic equations.",

    content: `

            <h3>What is a Quadratic Equation?</h3>

            <p>
                A quadratic equation is an equation where the highest
                power of the variable is 2.
            </p>

            <div class="math-example">
                x² + 5x + 6 = 0
            </div>

            <h3>Example</h3>

            <p>
                Factorize the equation:
            </p>

            <div class="math-example">
                (x + 2)(x + 3) = 0
            </div>

            <p>
                Therefore:
            </p>

            <div class="math-example">
                x = -2 &nbsp; or &nbsp; x = -3
            </div>

        `,

    practice: [

      {
        question: "What is the highest power in a quadratic equation?",
        answer: 2
      },

      {
        question: "What is 2 × 2?",
        answer: 4
      },

      {
        question: "What is 3 × 3?",
        answer: 9
      },

      {
        question: "What is 4 × 3?",
        answer: 12
      },

      {
        question: "What is 5 × 2?",
        answer: 10
      }

    ]
  }

];


// ===============================
// GET HTML ELEMENTS
// ===============================

const algebraLessonsContainer =
  document.getElementById("algebraLessons");

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

const algebraBtn =
  document.getElementById("algebraBtn");

const lessonsSection =
  document.getElementById("lessons");

const algebraPage =
  document.getElementById("algebraPage");

const practiceQuestion =
  document.getElementById("practiceQuestion");

const scoreDisplay =
  document.getElementById("scoreDisplay");

const quizResult =
  document.getElementById("quizResult");

const nextQuestion =
  document.getElementById("nextQuestion");


// ===============================
// QUIZ VARIABLES
// ===============================

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
// CREATE ALGEBRA LESSON CARDS
// ===============================

algebraLessons.forEach(function (lesson) {

  const lessonCard =
    document.createElement("div");

  lessonCard.classList.add(
    "algebra-lesson-card"
  );


  lessonCard.innerHTML = `

        <div class="lesson-number">
            ${lesson.id}
        </div>

        <div class="algebra-lesson-info">

            <h3>${lesson.title}</h3>

            <p>${lesson.description}</p>

        </div>

        <button class="open-lesson">
            Start →
        </button>

    `;


  algebraLessonsContainer.appendChild(
    lessonCard
  );


  const openLessonBtn =
    lessonCard.querySelector(
      ".open-lesson"
    );


  openLessonBtn.addEventListener(
    "click",
    function () {

      algebraPage.style.display =
        "none";

      lessonView.style.display =
        "block";


      lessonTitle.textContent =
        lesson.title;

      lessonDescription.textContent =
        lesson.description;

      lessonContent.innerHTML =
        lesson.content;


      currentQuestion = 0;

      score = 0;

      questionAnswered = false;

      quizResult.textContent = "";


      answerInput.style.display =
        "inline-block";

      checkAnswer.style.display =
        "inline-block";


      showQuestion(lesson);


      lessonView.scrollIntoView({
        behavior: "smooth"
      });

    }
  );

});


// ===============================
// OPEN ALGEBRA PAGE
// ===============================

algebraBtn.addEventListener(
  "click",
  function () {

    lessonsSection.style.display =
      "none";

    algebraPage.style.display =
      "block";

    algebraPage.scrollIntoView({
      behavior: "smooth"
    });

  }
);


// ===============================
// BACK TO LESSONS
// ===============================

const backToLessons =
  document.getElementById("backToLessons");

backToLessons.addEventListener(
  "click",
  function () {

    algebraPage.style.display =
      "none";

    lessonsSection.style.display =
      "block";

    lessonsSection.scrollIntoView({
      behavior: "smooth"
    });

  }
);


// ===============================
// BACK TO ALGEBRA
// ===============================

const backToAlgebra =
  document.getElementById("backToAlgebra");

backToAlgebra.addEventListener(
  "click",
  function () {

    lessonView.style.display =
      "none";

    algebraPage.style.display =
      "block";

    algebraPage.scrollIntoView({
      behavior: "smooth"
    });

  }
);


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion(lesson) {

  const question =
    lesson.practice[currentQuestion];


  practiceQuestion.textContent =
    question.question;


  answerInput.value = "";

  answerFeedback.textContent = "";


  scoreDisplay.textContent =
    `Score: ${score} / ${lesson.practice.length}`;


  questionAnswered = false;


  checkAnswer.disabled =
    false;

  answerInput.disabled =
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
      Number(answerInput.value);


    const currentLesson =
      algebraLessons.find(
        function (lesson) {

          return lesson.title ===
            lessonTitle.textContent;

        }
      );


    const question =
      currentLesson.practice[
      currentQuestion
      ];


    if (userAnswer === question.answer) {

      answerFeedback.textContent =
        "Correct! 🎉 Well done.";

      score++;

    } else {

      answerFeedback.textContent =
        "Not quite. Try again!";

    }


    questionAnswered = true;


    checkAnswer.disabled =
      true;

    answerInput.disabled =
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

    const currentLesson =
      algebraLessons.find(
        function (lesson) {

          return lesson.title ===
            lessonTitle.textContent;

        }
      );


    currentQuestion++;


    if (
      currentQuestion <
      currentLesson.practice.length
    ) {

      showQuestion(currentLesson);

    } else {

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


        if (
          !completedLessons.includes(
            currentLesson.id
          )
        ) {

          completedLessons.push(
            currentLesson.id
          );


          saveProgress();

        }


        // UPDATE PROGRESS BAR
        updateProgress();


      } else {

        quizResult.textContent =
          `You scored ${percentage}%. Keep practicing and try again!`;

      }

    }

  }
);


// ===============================
// UPDATE PROGRESS
// ===============================

function updateProgress() {

  const totalLessons =
    algebraLessons.length;


  const completed =
    completedLessons.length;


  const percentage =
    (completed / totalLessons) * 100;


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


  // Overall progress

  progressText.textContent =
    `${completed} of ${totalLessons} lessons completed`;


  overallProgressFill.style.width =
    `${percentage}%`;


  overallPercentage.textContent =
    `${percentage}%`;


  // Clear previous lesson list

  lessonProgressList.innerHTML = "";


  // Create progress item for every lesson

  algebraLessons.forEach(
    function (lesson) {

      const lessonItem =
        document.createElement("div");


      lessonItem.classList.add(
        "lesson-progress-item"
      );


      const isCompleted =
        completedLessons.includes(
          lesson.id
        );


      if (isCompleted) {

        lessonItem.innerHTML = `

                    <div class="lesson-progress-icon">
                        ✅
                    </div>

                    <div class="lesson-progress-info">

                        <h4>
                            ${lesson.title}
                        </h4>

                        <p>
                            Completed
                        </p>

                    </div>

                `;

      } else {

        lessonItem.innerHTML = `

                    <div class="lesson-progress-icon">
                        🔒
                    </div>

                    <div class="lesson-progress-info">

                        <h4>
                            ${lesson.title}
                        </h4>

                        <p>
                            Not completed
                        </p>

                    </div>

                `;

      }


      lessonProgressList.appendChild(
        lessonItem
      );

    }
  );

}


// ===============================
// LOAD SAVED PROGRESS
// ===============================

updateProgress();
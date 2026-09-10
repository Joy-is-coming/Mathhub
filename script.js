const menuBtn = document.querySelector("#menuBtn");

const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {

  menu.classList.toggle("show");

});


// Start Learning button

const startLearning = document.querySelector("#startLearning");

const lessons = document.querySelector("#lessons");

startLearning.addEventListener("click", function () {

  lessons.scrollIntoView({
    behavior: "smooth"
  });

});


// Algebra lessons

const algebraLessons = [

  {
    id: 1,
    title: "Introduction to Algebra",
    description: "Learn the basic ideas and language of algebra.",

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


  {
    id: 2,
    title: "Algebraic Expressions",
    description: "Learn how to simplify and evaluate expressions.",

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
        `
  },


  {
    id: 3,
    title: "Linear Equations",
    description: "Learn how to solve equations involving one variable.",

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
        `
  },


  {
    id: 4,
    title: "Factorization",
    description: "Learn different methods of factorizing expressions.",

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
        `
  },


  {
    id: 5,
    title: "Quadratic Equations",
    description: "Learn how to solve quadratic equations.",

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
        `
  }

];


// Get elements we will need

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

let currentQuestion = 0;

let score = 0;

let questionAnswered = false;

let completedLessons = [];

const savedProgress =
  localStorage.getItem("mathHubProgress");

if (savedProgress) {

  completedLessons = JSON.parse(savedProgress);

}


// Create Algebra lesson cards

algebraLessons.forEach(function (lesson) {

  const lessonCard = document.createElement("div");

  lessonCard.classList.add("algebra-lesson-card");

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

  algebraLessonsContainer.appendChild(lessonCard);


  // Get the Start button

  const openLessonBtn =
    lessonCard.querySelector(".open-lesson");


  // When Start is clicked

  openLessonBtn.addEventListener("click", function () {

    algebraPage.style.display = "none";

    lessonView.style.display = "block";

    lessonTitle.textContent = lesson.title;

    lessonDescription.textContent = lesson.description;

    lessonContent.innerHTML = lesson.content;

    currentQuestion = 0;

    score = 0;

    questionAnswered = false;

    quizResult.textContent = "";

    answerInput.style.display = "inline-block";

    checkAnswer.style.display = "inline-block";

    showQuestion(lesson);

    lessonView.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// Open Algebra page

algebraBtn.addEventListener("click", function () {

  lessonsSection.style.display = "none";

  algebraPage.style.display = "block";

  algebraPage.scrollIntoView({
    behavior: "smooth"
  });

});


// Back to Lessons button

const backToLessons =
  document.getElementById("backToLessons");

backToLessons.addEventListener("click", function () {

  algebraPage.style.display = "none";

  lessonsSection.style.display = "block";

  lessonsSection.scrollIntoView({
    behavior: "smooth"
  });

});


// Back to Algebra button

const backToAlgebra =
  document.getElementById("backToAlgebra");

backToAlgebra.addEventListener("click", function () {

  lessonView.style.display = "none";

  algebraPage.style.display = "block";

  algebraPage.scrollIntoView({
    behavior: "smooth"
  });

});

// check Answer button
checkAnswer.addEventListener("click", function () {

  // Don't allow the same question to be scored twice
  if (questionAnswered) {
    return;
  }

  const userAnswer = Number(answerInput.value);

  const currentLesson =
    algebraLessons.find(function (lesson) {

      return lesson.title === lessonTitle.textContent;

    });

  const question =
    currentLesson.practice[currentQuestion];


  // Check the answer

  if (userAnswer === question.answer) {

    answerFeedback.textContent =
      "Correct! 🎉 Well done.";

    score++;

  } else {

    answerFeedback.textContent =
      "Not quite. Try again!";

  }


  // Mark question as answered

  questionAnswered = true;


  // Disable the answer controls

  checkAnswer.disabled = true;

  answerInput.disabled = true;


  // Update score

  scoreDisplay.textContent =
    `Score: ${score} / ${currentLesson.practice.length}`;


  // Show Next Question button

  nextQuestion.style.display = "block";

});

// show question section

function showQuestion(lesson) {
  const question = lesson.practice[currentQuestion];
  practiceQuestion.textContent = question.question;

  answerInput.value = "";
  answerFeedback.textContent = "";

  scoreDisplay.textContent = `score: ${score} / ${lesson.practice.length}`;

  questionAnswered = false;

  checkAnswer.disabled = false;

  answerInput.disabled = false;

  nextQuestion.style.display = "none";
}

// nextQuestion button

nextQuestion.addEventListener("click", function () {

  const currentLesson =
    algebraLessons.find(function (lesson) {

      return lesson.title === lessonTitle.textContent;

    });

  currentQuestion++;

  if (currentQuestion < currentLesson.practice.length) {

    showQuestion(currentLesson);

    nextQuestion.style.display = "none";

  } else {

    const totalQuestions =
      currentLesson.practice.length;

    const percentage =
      (score / totalQuestions) * 100;

    practiceQuestion.textContent =
      "🎉 You have completed all the questions!";

    answerInput.style.display = "none";

    checkAnswer.style.display = "none";

    nextQuestion.style.display = "none";

    answerFeedback.textContent = "";

    scoreDisplay.textContent =
      `Final Score: ${score} / ${totalQuestions}`;

    if (percentage >= 70) {

      quizResult.textContent =
        `🎉 Excellent! You scored ${percentage}%. Lesson completed!`;

    } else {

      quizResult.textContent =
        `You scored ${percentage}%. Keep practicing and try again!`;

    }

  }

});
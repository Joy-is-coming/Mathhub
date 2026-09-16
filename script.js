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
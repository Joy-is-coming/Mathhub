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
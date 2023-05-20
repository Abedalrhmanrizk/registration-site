// ENGLISH TEST ELEMENTS
// Qusation

const quizData = [
  {
    question:
      "What is the correct form of the verb 'to be' in the sentence 'I _____ a student'?",
    a: "is",
    b: "am",
    c: "are",
    d: "be",
    correct: "b",
  },
  {
    question: "Which word is a pronoun?",
    a: "book",
    b: "table",
    c: "he",
    d: "run",
    correct: "c",
  },
  {
    question: "What is the opposite of the word 'hot'?",
    a: "big",
    b: "small",
    c: "cold",
    d: "fast",
    correct: "c",
  },
  {
    question: "Which sentence is written correctly?",
    a: "She go to the store.",
    b: "He am playing soccer.",
    c: "I is happy.",
    d: "They are my friends.",
    correct: "d",
  },
  {
    question: "What is the plural form of the word 'cat'?",
    a: "cats",
    b: "caties",
    c: "cates",
    d: "catz",
    correct: "a",
  },
  {
    question: "Which word is a preposition?",
    a: "play",
    b: "with",
    c: "jump",
    d: "good",
    correct: "b",
  },
  {
    question: "What is the past tense of the verb 'eat'?",
    a: "eated",
    b: "ate",
    c: "eat",
    d: "eaten",
    correct: "b",
  },
  {
    question: "Which sentence is a question?",
    a: "I like ice cream.",
    b: "They are going to the park.",
    c: "Do you want some juice?",
    d: "The dog is sleeping.",
    correct: "c",
  },
  {
    question: "What is the plural form of the word 'child'?",
    a: "childs",
    b: "childes",
    c: "children",
    d: "childz",
    correct: "c",
  },
  {
    question:
      "What is the correct spelling of the color that is a mixture of blue and yellow?",
    a: "grean",
    b: "yellow",
    c: "green",
    d: "bluy",
    correct: "c",
  },
  {
    question: "Which word is an adjective?",
    a: "run",
    b: "quickly",
    c: "happy",
    d: "outside",
    correct: "c",
  },
  {
    question: "Which sentence is written correctly?",
    a: "I doesn't like bananas.",
    b: "He have two cats.",
    c: "She is playing soccer.",
    d: "We are go to the park.",
    correct: "c",
  },
  {
    question: "What is the opposite of the word 'big'?",
    a: "small",
    b: "tall",
    c: "fast",
    d: "long",
    correct: "a",
  },
  {
    question: "Which word is a conjunction?",
    a: "and",
    b: "sing",
    c: "ball",
    d: "good",
    correct: "a",
  },
  {
    question: "What is the present participle of the verb 'run'?",
    a: "running",
    b: "runned",
    c: "run",
    d: "runs",
    correct: "a",
  },
  {
    question: "Which sentence is a command?",
    a: "You are my friend.",
    b: "Go to bed!",
    c: "She is reading a book.",
    d: "We went to the park.",
    correct: "b",
  },
  {
    question: "What is the plural form of the word 'mouse'?",
    a: "mouses",
    b: "mices",
    c: "mice",
    d: "mices",
    correct: "c",
  },
];

quizData.sort(() => Math.random() - 0.5);
/// end of Qustion
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const answerTextA = document.getElementById("a_text");
const answerTextB = document.getElementById("b_text");
const answerTextC = document.getElementById("c_text");
const answerTextD = document.getElementById("d_text");
const nextBtn = document.getElementById("next_btn");
const timerEl = document.getElementById("quiz-timer");
const quizNumberEl = document.getElementById("q-number");

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 12; // 20 minutes in seconds

// Function to start the quiz
function startQuiz() {
  showQuestion();
  startTimer();
}

// Function to display a question and its options
function showQuestion() {
  quizNumberEl.innerHTML = `Qustion Number : ${currentQuestionIndex + 1}`;
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  answerTextA.innerText = currentQuestion.a;
  answerTextB.innerText = currentQuestion.b;
  answerTextC.innerText = currentQuestion.c;
  answerTextD.innerText = currentQuestion.d;
}

// Function to start the timer
function startTimer() {
  const interval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerEl.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (timeRemaining === 0) {
      clearInterval(interval);
      endQuiz();
    } else {
      timeRemaining--;
    }
  }, 1000);
}

// function  returns  a user selected option
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Function to handle user's answer submission and check if the option correct
function submitAnswer() {
  const selectedAnswer = getSelected();

  if (selectedAnswer === quizData[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < 15) {
    showQuestion();
    selectedAnswer.checked = false;
  } else {
    endQuiz();
  }
}

// Function to end the quiz and display the final score
function endQuiz() {
  localStorage.setItem("EnglishT", "Done");
  localStorage.setItem("English-Score", score);
}

nextBtn.addEventListener("click", submitAnswer);
// to start the quiz we call the below method
startQuiz();

const questions = [
  {
    text: "What is the #1 cause of Sydney's housing affordability crisis?",
    options: [
      "Foreign investment driving up prices",
      "Population growth outpacing infrastructure",
      "Insufficient housing supply",
      "Low interest rates inflated over the past decade"
    ],
    correct: 2
  },
  {
    text: "What salary do you think would be required to buy a home today?",
    options: ["130k", "172k", "224k", "232k"],
    correct: 3
  },
  {
    text: "What does negative gearing allow property investors to do?",
    options: [
      "Claim rental losses as a tax deduction",
      "Guarantee profit",
      "Generate cash flow",
      "Protect investors against rising interest rates"
    ],
    correct: 0
  },
  {
    text: "The 'First Home Guarantee' scheme in NSW now allows eligible buyers to purchase properties valued up to _____ with only a 5% deposit",
    options: ["$900k", "$1.5M", "$1.75M", "$1.8M"],
    correct: 1
  }
];
let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const pollContainer = document.getElementById("poll-container");
const resultScreen = document.getElementById("result-screen");
const scoreText = document.getElementById("score-text");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");

document.getElementById("start-btn").onclick = startQuiz;
document.getElementById("retry-btn").onclick = restartQuiz;


function startQuiz() {
  startScreen.classList.add("hidden");
  pollContainer.classList.remove("hidden");
  progressContainer.classList.remove("hidden");
  loadQuestion();
}
function loadQuestion() {
  pollContainer.innerHTML = "";
  const q = questions[currentQuestion];
const card = document.createElement("div");
  card.className = "question-card";

  const questionText = document.createElement("h3");
  questionText.textContent = q.text;
  card.appendChild(questionText);

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "poll-btn";

    btn.onclick = () => {
      const allButtons = card.querySelectorAll("button");
      allButtons.forEach(b => b.disabled = true);

      if (i === q.correct) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("incorrect");
        allButtons[q.correct].classList.add("correct");
      }
      setTimeout(nextQuestion, 900);
    };

    card.appendChild(btn);
  });

  pollContainer.appendChild(card);

  updateProgress();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}
function updateProgress() {
  const percent = ((currentQuestion) / questions.length) * 100;
  progressBar.style.width = percent + "%";
}

function showResults() {
  pollContainer.classList.add("hidden");
  progressContainer.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  resultScreen.classList.add("hidden");
  pollContainer.classList.remove("hidden");
  progressContainer.classList.remove("hidden");

  loadQuestion();
}
    

      

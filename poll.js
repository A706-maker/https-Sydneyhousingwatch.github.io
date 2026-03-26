const questions = [
  {
    text: "What is the #1 cause of Sydney's housing affordability crisis?",
    options: [
      "Foreign investment driving up prices",
      "Population growth outpacing infrastructure",
      "Insufficient housing supply",
      "Low interest rates inflated over the past decade"
    ],
    correct: 3
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
    correct: 2
  }
];

const container = document.getElementById("poll-container");

questions.forEach((q) => {
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
      // Disable all buttons after answering
      const allButtons = card.querySelectorAll("button");
      allButtons.forEach(b => b.disabled = true);

      if (i === q.correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
        // highlight the correct one
        allButtons[q.correct].classList.add("correct");
      }
    };

    card.appendChild(btn);
  });

  container.appendChild(card);
});

  
    

      

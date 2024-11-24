const questions = [
  {
    question: "Which river is home to the Amazonian pink dolphin?",
    choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correct: "Amazon River"
  },
  {
    question: "What is the primary role of rivers in an ecosystem?",
    choices: ["Transport goods", "Provide drinking water", "Support biodiversity", "Generate electricity"],
    correct: "Support biodiversity"
  },
  {
    question: "Which plant is commonly found along riverbanks?",
    choices: ["Cactus", "Mangrove", "Willow", "Baobab"],
    correct: "Willow"
  }
];

let currentQuestion = 0;
let score = 0;

const questionDiv = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionDiv.textContent = q.question;
  choicesDiv.innerHTML = "";
  q.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => handleAnswer(choice);
    choicesDiv.appendChild(button);
  });
  nextButton.disabled = true;
}

function handleAnswer(choice) {
  if (choice === questions[currentQuestion].correct) {
    score++;
  }
  nextButton.disabled = false;
}

nextButton.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionDiv.textContent = `Quiz Over! Your score is ${score}/${questions.length}`;
    choicesDiv.innerHTML = "";
    nextButton.style.display = "none";
  }
};

loadQuestion();
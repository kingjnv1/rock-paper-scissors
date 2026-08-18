let userScore = 0;
let pcScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const pcChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultText = "";

  if (userChoice === pcChoice) {
    resultText = `KING chose ${userChoice}, PC chose ${pcChoice}. It's a draw!`;
  } else if (
    (userChoice === "rock" && pcChoice === "scissors") ||
    (userChoice === "paper" && pcChoice === "rock") ||
    (userChoice === "scissors" && pcChoice === "paper")
  ) {
    userScore++;
    resultText = `KING chose ${userChoice}, PC chose ${pcChoice}. KING wins!`;
  } else {
    pcScore++;
    resultText = `KING chose ${userChoice}, PC chose ${pcChoice}. PC wins!`;
  }

  document.getElementById("userScore").textContent = userScore;
  document.getElementById("pcScore").textContent = pcScore;
  document.getElementById("result").textContent = resultText;
}

function resetGame() {
  userScore = 0;
  pcScore = 0;
  document.getElementById("userScore").textContent = 0;
  document.getElementById("pcScore").textContent = 0;
  document.getElementById("result").textContent = "Make your move!";
}

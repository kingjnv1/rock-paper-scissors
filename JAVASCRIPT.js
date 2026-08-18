let userScore = 0;
let pcScore = 0;

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));
document.getElementById("reset").addEventListener("click", resetGame);

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const pcChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultText = "";

  if (userChoice === pcChoice) {
    resultText = `Draw! Both chose ${userChoice}`;
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

  // ✅ Update scoreboard
  document.getElementById("userScore").textContent = userScore;
  document.getElementById("pcScore").textContent = pcScore;

  // ✅ Update result
  document.getElementById("result").textContent = resultText;
}

function resetGame() {
  userScore = 0;
  pcScore = 0;
  document.getElementById("userScore").textContent = 0;
  document.getElementById("pcScore").textContent = 0;
  document.getElementById("result").textContent = "Make your move!";
}

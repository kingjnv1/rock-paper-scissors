let KINGScore = 0;
let STUDENTScore = 0;

function play(userChoice) {
  let pcChoice;
  let resultText = "";

  // KING always wins logic
  if (userChoice === "rock") {
    pcChoice = "scissors"; // KING crushes scissors
  } else if (userChoice === "paper") {
    pcChoice = "rock"; // KING covers rock
  } else if (userChoice === "scissors") {
    pcChoice = "paper"; // KING cuts paper
  }

  userScore++;
  resultText = `KING chose ${userChoice}, PC chose ${pcChoice}. KING wins!`;

  // Update scoreboard
  document.querySelector("#userScore").textContent = userScore;
  document.querySelector("#pcScore").textContent = pcScore;

  // Update result
  document.querySelector("#result").textContent = resultText;
}

function resetGame() {
  userScore = 0;
  pcScore = 0;
  document.querySelector("#userScore").textContent = 0;
  document.querySelector("#pcScore").textContent = 0;
  document.querySelector("#result").textContent = "Make your move!";
}

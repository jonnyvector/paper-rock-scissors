const buttons = document.querySelectorAll("button");
const startButton = document.querySelector("#start");
const playerScoreBox = document.querySelector(".player-score");
const computerScoreBox = document.querySelector(".computer-score");
const roundResult = document.querySelector(".round-result");

let playerScore = 0;
let computerScore = 0;

// Computer selects randomly
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const gameChoicesArray = ["rock", "paper", "scissors"];
  const computerChoice = gameChoicesArray[randomNumber];
  return computerChoice;
};

const playRound = (playerSelection) => {
  // assign player choice w/ click

  function compareChoices(playerSelection, computerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelection === "") alert("Please make a selection.");
    if (
      (playerSelectionLowerCase === "rock" &&
        computerSelection === "scissors") ||
      (playerSelectionLowerCase === "scissors" &&
        computerSelection === "paper") ||
      (playerSelectionLowerCase === "paper" && computerSelection === "rock")
    ) {
      playerScore++;
      playerScoreBox.textContent = `${playerScore}`;
      console.log(`Player Score is ${playerScore}`);
      roundResult.textContent = `You win! ${playerSelectionLowerCase} beats ${computerSelection}`;
    } else if (
      (computerSelection === "rock" &&
        playerSelectionLowerCase === "scissors") ||
      (computerSelection === "scissors" &&
        playerSelectionLowerCase === "paper") ||
      (computerSelection === "paper" && playerSelectionLowerCase === "rock")
    ) {
      computerScore++;
      computerScoreBox.textContent = `${computerScore}`;
      console.log(`Computer score is ${computerScore}`);

      roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelectionLowerCase}!`;
    } else if (playerSelectionLowerCase === computerSelection) {
      roundResult.textContent = `You both got ${playerSelectionLowerCase}! Try again!`;
    }
  }

  compareChoices(playerSelection, getComputerChoice());
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value);
  });
});

// console.log(game(3));

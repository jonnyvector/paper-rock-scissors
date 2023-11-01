let playersChoice = "";
const buttons = document.querySelectorAll("button");
const startButton = document.querySelector("#start");

let playerScore = 0;
let computerScore = 0;

// Computer selects randomly
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const gameChoicesArray = ["rock", "paper", "scissors"];
  const computerChoice = gameChoicesArray[randomNumber];
  return computerChoice;
};

const game = () => {
  // assign player choice w/ click
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playersChoice = button.value;
    });
  });

  function compareChoices(playerSelection, computerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    if (
      (playerSelectionLowerCase === "rock" &&
        computerSelection === "scissors") ||
      (playerSelectionLowerCase === "scissors" &&
        computerSelection === "paper") ||
      (playerSelectionLowerCase === "paper" && computerSelection === "rock")
    ) {
      playerScore++;
      console.log(`Player Score is ${playerScore}`);
      return `You win! ${playerSelectionLowerCase} beats ${computerSelection}`;
    } else if (
      (computerSelection === "rock" &&
        playerSelectionLowerCase === "scissors") ||
      (computerSelection === "scissors" &&
        playerSelectionLowerCase === "paper") ||
      (computerSelection === "paper" && playerSelectionLowerCase === "rock")
    ) {
      computerScore++;
      console.log(`Computer score is ${computerScore}`);
      return `You lose! ${computerSelection} beats ${playerSelectionLowerCase}!`;
    } else if (playerSelectionLowerCase === computerSelection) {
      return `You both got ${playerSelectionLowerCase}! Try again!`;
    }
  }

  compareChoices(playersChoice, getComputerChoice());
  if (playerScore > computerScore) {
    // console.log("Congratulations! You win");
  } else {
    // console.log("Sorry, pal. You lose!");
  }
  // console.log(
  // `The player's score is ${playerScore} and the computer's score is ${computerScore}!`
  // );
};

startButton.addEventListener("click", function () {
  game();
});

// console.log(game(3));

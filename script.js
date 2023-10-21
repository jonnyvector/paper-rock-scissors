const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const gameChoicesArray = ["rock", "paper", "scissors"];
  const computerChoice = gameChoicesArray[randomNumber];
  console.log(computerChoice);
  return computerChoice;
};

console.log();

function compareChoices(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  if (
    (playerSelectionLowerCase === "rock" && computerSelection === "scissors") ||
    (playerSelectionLowerCase === "scissors" &&
      computerSelection === "paper") ||
    (playerSelectionLowerCase === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelectionLowerCase} beats ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelectionLowerCase === "scissors") ||
    (computerSelection === "scissors" &&
      playerSelectionLowerCase === "paper") ||
    (computerSelection === "paper" && playerSelectionLowerCase === "rock")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelectionLowerCase}!`;
  } else if (playerSelectionLowerCase === computerSelection) {
    return `You both got ${playerSelectionLowerCase}! Try again!`;
  }
}

console.log(compareChoices("SCISSORS", getComputerChoice()));

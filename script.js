const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const gameChoicesArray = ["rock", "paper", "scissors"];
  const computerChoice = gameChoicesArray[randomNumber];
  console.log(computerChoice);
  return computerChoice;
};

console.log();

function compareChoices(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return `You both got ${playerSelection}! Try again!`;
  }
}

console.log(compareChoices("rock", getComputerChoice()));

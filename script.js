const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const gameChoicesArray = ["rock", "paper", "scissors"];
  const computerChoice = gameChoicesArray[randomNumber];
  //   console.log(computerChoice);
  return computerChoice;
};

// console.log();

// console.log(compareChoices("SCISSORS", getComputerChoice()));

function game(num) {
  let playerScore = 0;
  let computerScore = 0;

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
      return `You lose! ${computerSelection} beats ${playerSelectionLowerCase}!`;
    } else if (playerSelectionLowerCase === computerSelection) {
      return `You both got ${playerSelectionLowerCase}! Try again!`;
    }
  }

  for (let i = 1; i <= num; i++) {
    console.log(compareChoices("scissors", getComputerChoice()));
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You win");
  } else {
    console.log("Sorry, pal. You lose!");
  }
  console.log(
    `The player's score is ${playerScore} and the computer's score is ${computerScore}!`
  );
}

game(5);

// console.log(game(3));

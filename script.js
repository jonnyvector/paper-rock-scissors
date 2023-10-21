function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const gameChoicesArray = ["Rock", "Paper", "Scissors"];
  return gameChoicesArray[randomNumber];
}

let playerScore = 0
let computerScore = 0

function playRound() {
  let choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  let choice = prompt("Your choice sir");
  const playerSelection = choice.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++
    return "Human wins!";
  } else {
    computerScore++
    return "Computer wins!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) 
  console.log(playRound());
}

console.log(game());
console.log(computerScore);
console.log(playerScore);

const container = document.querySelector("#container");
const btnScissors = document.querySelector("#btn-scissors");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const scoreContainer = document.querySelector("#score-container");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let computerSelection = 0;
let playerSelection = ""


btnScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice()
  playRound(playerSelection, computerSelection);
});
btnRock.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice()
 playRound(playerSelection, computerSelection);
});
btnPaper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice()
 playRound(playerSelection, computerSelection);
});

let humanScore = 0;
let computerScore = 0;
let tieScore = 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tieScore++;
    scoreContainer.textContent = `Player - ${humanScore} Computer - ${computerScore} Tie - ${tieScore}`
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    humanScore++;
    scoreContainer.textContent = `Player - ${humanScore} Computer - ${computerScore} Tie - ${tieScore}`;
    
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    computerScore++;
    scoreContainer.textContent = `Player - ${humanScore} Computer - ${computerScore} Tie - ${tieScore}`;
    
  }
}
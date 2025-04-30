/*
pseudocode:
played against the computer
computer picks from 3 options: Rock, Paper, Scissors
player picks from same 3 options
compare choices
declare winner
*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1) {
    computerChoice = "Rock";
  } else if (computerChoice === 2){
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice(){
  let humanChoice = prompt("Enter Rock, Paper, or Scissors");
  getComputerChoice();
  return humanChoice;
}

function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    let upperChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    let plainComputer = computerChoice.toLowerCase();
    let plainHuman = humanChoice.toLowerCase();
    if (plainComputer === plainHuman) {
      console.log("Tie! Try again.");
      console.log(`The score is: ${computerScore} to ${humanScore}`);
    } else if 
    (
      (plainComputer === "rock" && plainHuman === "scissors") || (plainComputer === "paper" && plainHuman === "rock") || (plainComputer === "scissors" && plainHuman === "paper")
    )
    {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${upperChoice}`);
      console.log(`Computer Score: ${computerScore}`);
    } else {
      humanScore++;
      console.log(`Winner! Winner! Chicken Dinner! ${upperChoice} beats ${computerChoice}`);
      console.log(`Your Score: ${humanScore}`);
    }
    console.log(upperChoice);
    console.log(computerChoice);
  }
  playRound(humanSelection, computerSelection);
  
  if (humanScore + computerScore === 5 && (humanScore > computerScore)) {
    console.log("Congratulations! You won best out of 5!");
  } else {
    console.log("You lose!");
  }
}

playGame();
/*
pseudocode:
played against the computer
computer picks from 3 options: Rock, Paper, Scissors
player picks from same 3 options
compare choices
declare winner
*/


function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1) {
    console.log("Rock");
  } else if (computerChoice === 2){
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

getComputerChoice();

function getHumanChoice(){
  let humanChoice = prompt("Enter Rock, Paper, or Scissors")
  console.log(humanChoice);
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  
}
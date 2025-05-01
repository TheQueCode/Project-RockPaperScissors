const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice(){
  let computerChoice;
  const computerNum = Math.floor(Math.random() * 3 + 1);

  if(computerNum === 1){
    computerChoice = 'Rock';
    console.log(computerChoice);
    return computerChoice;
  } else if (computerNum === 2){
    computerChoice = 'Paper';
    console.log(computerChoice);
    return computerChoice;
  } else {
    computerChoice = 'Scissors';
    console.log(computerChoice);
    return computerChoice;
  } 
};

function getHumanChoice(){
  const humanChoice = prompt("Enter your choice: Rock, Paper, Scissors")
  return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  
  let plainChoice = humanChoice.toLowerCase();
  let plainComputerChoice = computerChoice.toLowerCase();
  let fancyChoice = plainChoice[0].toUpperCase() + plainChoice.slice(1);
  console.log(plainChoice);
  console.log(fancyChoice);
  if (plainChoice === plainComputerChoice){
    console.log("Tie! Try again.");
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);
  } else if (
    plainComputerChoice === 'rock' && plainChoice === 'scissors' ||
    plainComputerChoice === 'paper' && plainChoice === 'rock' ||
    plainComputerChoice === 'scissors' && plainChoice === 'paper'
  ){
    computerScore++;
    console.log(`You lost! ${computerChoice} beats ${fancyChoice}. Try again.`);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);
  } else {
    humanScore++;
    console.log(`Congratulations! You won! ${fancyChoice} beats ${computerChoice}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);
  }
  
};

playRound(humanSelection, computerSelection);
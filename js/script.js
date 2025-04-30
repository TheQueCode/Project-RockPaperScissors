const humanScore = 0;
const computerScore = 0;

function getComputerchoice(){
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1){
    console.log("Rock");
  } else if (computerChoice === 2){
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

getComputerchoice();

function getHumanChoice(){
  const humanChoice = prompt("Enter Rock, Paper, or Scissors")
  console.log(humanChoice);
}

getHumanChoice();


function getComputerChoice(){
  const computerPick = Math.floor(Math.random() * 3 + 1);
  if (computerPick === 3){
    const computerChoice = 'rock';
    console.log(computerChoice);
    return computerChoice;
  } else if (computerPick === 2){
    const computerChoice = 'paper';
    console.log(computerChoice);
    return computerChoice;
  } else {
    const computerChoice = 'scissors';
    console.log(computerChoice);
    return computerChoice;  
  }
}

getComputerChoice();


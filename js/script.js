

function getComputerChoice(){
  let computerChoice;
  const computerNum = Math.floor(Math.random() * 3 + 1);

  if(computerNum === 1){
    computerChoice = 'rock';
    console.log(computerChoice);
    return computerChoice;
  } else if (computerNum === 2){
    computerChoice = 'paper';
    console.log(computerChoice);
    return computerChoice;
  } else {
    computerChoice = 'scissors';
    console.log(computerChoice);
    return computerChoice;
  } 
};

getComputerChoice();
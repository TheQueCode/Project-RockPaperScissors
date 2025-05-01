function getComputerChoice(){
  let computerChoice;
  const computerNum = Math.floor(Math.random() * 3 + 1);

  if(computerNum === 1){
    computerChoice = 'Rock';
    return computerChoice;
  } else if (computerNum === 2){
    computerChoice = 'Paper';
    return computerChoice;
  } else {
    computerChoice = 'Scissors';
    return computerChoice;
  } 
};

function getHumanChoice(){
  const humanChoice = prompt("Enter your choice: Rock, Paper, Scissors")
  return humanChoice;
};

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice){
    const plainChoice = humanChoice.toLowerCase();
    const plainComputerChoice = computerChoice.toLowerCase();
    const fancyChoice = plainChoice[0].toUpperCase() + plainChoice.slice(1);

    if (plainChoice === plainComputerChoice){
      console.log("Tie! Try again.");
    } else if (
      plainComputerChoice === 'rock' && plainChoice === 'scissors' ||
      plainComputerChoice === 'paper' && plainChoice === 'rock' ||
      plainComputerChoice === 'scissors' && plainChoice === 'paper'
    ){
      computerScore++;
      console.log(`You lost! ${computerChoice} beats ${fancyChoice}. Try again.`);
    } else {
      humanScore++;
      console.log(`Congratulations! You won! ${fancyChoice} beats ${computerChoice}`);
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);
  };

  for (let i = 1; humanScore + computerScore < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You've won best out of five!`);
  } else {
    console.log(`Oh no! You lost best out of five! Try again.`);
  }
};

playGame();


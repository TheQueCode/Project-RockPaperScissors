let humanScore = 0;
let computerScore = 0;

document.querySelector('.rockBtn').addEventListener('click', () => getComputerChoice('Rock'));
  
document.querySelector('.paperBtn').addEventListener('click', () => getComputerChoice('Paper'));

document.querySelector('.scissorsBtn').addEventListener('click', () => getComputerChoice('Scissors'));

function getComputerChoice (humanChoice)
{
  let computerChoice;
  const computerNum = Math.floor(Math.random() * 3 + 1);

  if(computerNum === 1){
    computerChoice = 'Rock';
  } else if (computerNum === 2){
    computerChoice = 'Paper';
  } else {
    computerChoice = 'Scissors';
  } 
  playGame(humanChoice, computerChoice);
}

function playGame (humanChoice, computerChoice)
{
  console.log(`Computer's Pick: ${computerChoice}`);
  console.log(`Player's Pick: ${humanChoice}`);
  playRound(humanChoice, computerChoice);

  function playRound (humanChoice, computerChoice)
  {

    if (humanChoice === computerChoice) {
      console.log("Tie! Try again.");
    } else if (
      computerChoice === 'Rock' && humanChoice === 'Scissors' ||
      computerChoice === 'Paper' && humanChoice === 'Rock' ||
      computerChoice === 'Scissors' && humanChoice === 'Paper'
    ) {
      computerScore++;
      console.log(`You lost! ${computerChoice} beats ${humanChoice}. Try again.`);
    } else {
      humanScore++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);

    if (humanScore === 3 || computerScore === 3) {
      const winner = humanScore > computerScore ? 'Congratulations! You won best out of 5!' : 'Oops! You lost best out of 5! Try again.'
      console.log(winner);
      resetGame();
    }
  }
}

function resetGame ()
{
  humanScore = 0;
  computerScore = 0;
  console.log('Match reset. Play Again!');
}








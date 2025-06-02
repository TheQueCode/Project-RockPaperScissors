let humanScore = 0;
let computerScore = 0;

const resultDisplay = document.querySelector('.resultDisplay');

const computerPick = document.createElement('div');
const computerPickText = document.createTextNode(`Computer's Pick: `);

const playerPick = document.createElement('div');
const playerPickText = document.createTextNode(`Player's Pick: `);

const results = document.createElement('div');
const resultsText = document.createTextNode('Results: ');

const computerScoreDisplay = document.createElement('div');
const computerScoreDisplayText = document.createTextNode(`Computer's Score: 0`);

const playerScoreDisplay = document.createElement('div');
const playerScoreDisplayText = document.createTextNode(`Player's Score: 0`);

computerPick.appendChild(computerPickText);
playerPick.appendChild(playerPickText);
results.appendChild(resultsText);
computerScoreDisplay.appendChild(computerScoreDisplayText);
playerScoreDisplay.appendChild(playerScoreDisplayText);
resultDisplay.appendChild(computerPick);
resultDisplay.appendChild(playerPick);
resultDisplay.appendChild(results);
resultDisplay.appendChild(computerScoreDisplay);
resultDisplay.appendChild(playerScoreDisplay);



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
  computerPickText.textContent = `Computer's Pick: ${computerChoice}`;
  playerPickText.textContent = `Player's Pick: ${humanChoice}`;
  playRound(humanChoice, computerChoice);

  function playRound (humanChoice, computerChoice)
  {

    if (humanChoice === computerChoice) {
      resultsText.textContent = `Results: Tie! Try again.`;
    } else if (
      computerChoice === 'Rock' && humanChoice === 'Scissors' ||
      computerChoice === 'Paper' && humanChoice === 'Rock' ||
      computerChoice === 'Scissors' && humanChoice === 'Paper'
    ) {
      computerScore++;
      resultsText.textContent = `Results: You lost! ${computerChoice} beats ${humanChoice}. Try again.`;
    } else {
      humanScore++;
      resultsText.textContent = `Results: You won! ${humanChoice} beats ${computerChoice}`;
    }
    computerScoreDisplayText.textContent = `Computer Score: ${computerScore}`;
    playerScoreDisplayText.textContent = `Player Score: ${humanScore}`;

    if (humanScore === 5 || computerScore === 5) {
      const winner = `Congratulations! You won best out of 5! Match Reset. Do it again.`;
      const loser = 'Oops! You lost best out of 5! Match Reset. Try again.';

      if (humanScore > computerScore) {
        resultsText.textContent = `Results: ${winner}`;
      } else {
        resultsText.textContent = `Results: ${loser}`;
      }
      
      resetGame();
    }
  }
}

function resetGame ()
{
  humanScore = 0;
  computerScore = 0;
}








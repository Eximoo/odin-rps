function getComputerChoice() {
  let x = Math.round(Math.random() * 2 + 1);
  switch (x) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      break;
  }
}

function fight(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) return draw(playerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return winner(playerSelection,computerSelection);
  }
  return loser(playerSelection,computerSelection);   
}

function draw(playerSelection) {
    return `draw`;
}
function winner(playerSelection, computerSelection) {
    return `win`;
}

function loser(playerSelection, computerSelection) {
    return `lose`;
}
let playersScore = 0
let computerScore = 0
// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();
// console.log(fight(playerSelection, computerSelection));
game()
function game() {
    for (i = 0; i<5; i++) {
        setTimeout(1000)
        const playerSelection = prompt(`Choose ROCK/PAPER/SCISSORS`);
        const computerSelection = getComputerChoice();
        switch (fight(playerSelection, computerSelection)) {
            case 'draw':
                console.log(`It's a draw! Two times ${playerSelection} Score: ${playersScore} : ${computerScore}`)
                break;
            case 'win':
                console.log(`You won! ${playerSelection} beats ${computerSelection} Score: ${++playersScore} : ${computerScore}`)
                break;
            case 'lose':
                console.log(`You lost! ${computerSelection} beats ${playerSelection} Score: ${playersScore} : ${++computerScore}`)
                break;
            default:
                break;
        }
    }
}
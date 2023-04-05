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
    return winner(playerSelection, computerSelection);
  }
  return loser(playerSelection, computerSelection);
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
let playersScore = 0;
let computerScore = 0;
let playerSelection;
const displayScore = document.querySelector("div");
const btns = document.querySelectorAll("button");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.textContent);
    // playerSelection = button.textContent;
    // console.log(playerSelection);
  });
});

// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();
// console.log(fight(playerSelection, computerSelection));
// game();

function game(playerSelection) {
  // const playerSelection = prompt(`Choose ROCK/PAPER/SCISSORS`);
  if(playersScore === 5 || computerScore === 5) {
    return;
  }
  const computerSelection = getComputerChoice();
  switch (fight(playerSelection, computerSelection)) {
    case "draw":
      displayScore.textContent = `It's a draw! Two times ${playerSelection} Score: ${playersScore} : ${computerScore}`;
      break;
    case "win":
      displayScore.textContent = `You won! ${playerSelection} beats ${computerSelection} Score: ${++playersScore} : ${computerScore}`;
      break;
    case "lose":
      displayScore.textContent = `You lost! ${computerSelection} beats ${playerSelection} Score: ${playersScore} : ${++computerScore}`;
      break;
    default:
      break;
  }
  if (playersScore === 5 || computerScore === 5) {
    if (playersScore === 5) {
      displayScore.textContent = `Player WON with score ${playersScore}:${computerScore}`;
    } else {
      displayScore.textContent = `Computer WON with score ${computerScore}:${playersScore}`;
    }
    btns.forEach((button) => {
      button.removeEventListener("click", () => {
        game(button.textContent);
      });
    });
  }
}

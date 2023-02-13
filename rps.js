const playerScore = document.querySelector("div.playerScore");
const computerScore = document.querySelector("div.computerScore");
const roundResult = document.querySelector("div.roundResult")
const gameResult = document.querySelector("div.gameResult")

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    
    let computerChoice = choices[randomChoice];
    return computerChoice;
}

function resetGame() {
    playerScore.textContent = computerScore.textContent = 0;
}

function playerMove(e) {
    playRound(this.getAttribute('data-selection'), getComputerChoice());
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playerMove)
});

function playRound(playerSelection, computerSelection) {
    gameResult.textContent = "";
    
    if (playerSelection === computerSelection) {
        roundResult.textContent = `You selected ${playerSelection} and computer selected ${computerSelection}. It's a draw!`;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        roundResult.textContent = `You selected ${playerSelection} and computer selected ${computerSelection}. You win!`;
        playerScore.textContent = (++playerScore.textContent).toString();
    }
    else {
        roundResult.textContent = `You selected ${playerSelection} and computer selected ${computerSelection}. Computer wins!`;
        computerScore.textContent = (++computerScore.textContent).toString();
    }
    
    if (computerScore.textContent == 5) {
        gameResult.textContent = `The computer wins the game with a score of ${computerScore.textContent} to ${playerScore.textContent}! A new game will be started.`;
        resetGame();
    }
    else if(playerScore.textContent == 5) {
        gameResult.textContent = `You win the game with a score of ${playerScore.textContent} to ${computerScore.textContent}! A new game will be started.`;
        resetGame();
    }
}
const choices = ['rock', 'paper', 'scissor'];
const playerDisplay = document.getElementById('player-choice');
const playerDisplayImage = document.getElementById('player-img');
const playerScore = document.getElementById('player-score');
const computerDisplay = document.getElementById('computer-choice');
const computerDisplayImage = document.getElementById('computer-img');
const computerScore = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result-text');
let playerScoreset = 0;
let computerScoreset = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';


    if (playerChoice === computerChoice) {
        result = 'Draw';
    }
    else {
        switch (playerChoice) {
            case 'rock':
                if (computerChoice === 'scissor') {
                    result = 'Win';
                    playerScoreset++;
                }
                else {
                    result = 'Lose';
                    computerScoreset++;
                }
                break;
            case 'paper':
                if (computerChoice === 'rock') {
                    result = 'Win';
                    playerScoreset++;
                }
                else {
                    result = 'Lose';
                    computerScoreset++;
                }
                break;
            case 'scissor':
                if (computerChoice === 'paper') {
                    result = 'Win';
                    playerScoreset++;
                }
                else {
                    result = 'Lose';
                    computerScoreset++;
                }
                break;
        }
    }

    playerDisplay.textContent = playerChoice;
    playerDisplayImage.src = playerChoice + '.png';
    playerScore.textContent = playerScoreset;
    computerDisplayImage.src = computerChoice + '.png';
    computerDisplay.textContent = computerChoice;
    computerScore.textContent = computerScoreset;
    resultDisplay.textContent = result;
}

function restartScore() {
    playerScoreset = 0;
    computerScoreset = 0;
    playerScore.textContent = playerScoreset;
    computerScore.textContent = computerScoreset;
}
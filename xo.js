const cells = document.querySelectorAll('.cell');
const gameMessage = document.getElementById('gameMessage');
const restartButton = document.getElementById('restartButton');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
let scores = { X: 0, O: 0 };

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', restartGame);

function handleCellClick(e) {
    const cellIndex = e.target.getAttribute('data-index');
    
    if (board[cellIndex] !== '' || gameOver) return;
    
    board[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    let roundWon = false;
    
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }
    
    if (roundWon) {
        gameOver = true;
        gameMessage.textContent = `${currentPlayer} Wins!`;
        scores[currentPlayer]++;
        updateScores();
        showGameOver();
    } else if (!board.includes('')) {
        gameOver = true;
        gameMessage.textContent = `It's a Tie!`;
        showGameOver();
    }
}

function updateScores() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
}

function showGameOver() {
    document.querySelector('.game-over').style.display = 'block';
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => (cell.textContent = ''));
    gameOver = false;
    document.querySelector('.game-over').style.display = 'none';
    currentPlayer = 'X';
}

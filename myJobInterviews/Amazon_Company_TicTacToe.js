/*
    Tic Tac Toe Game
    Technical interview.
*/

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const TURNS = {
  X: 'X',
  O: 'O',
};
let turn = TURNS.X;
let winner = null; // null = no winner yet; true there is a winner; false there is a tie

function createBoard() {
  return Array(9).fill(null);
}

function updateBoard(board, index, player) {
  if (!board[index]) {
    board[index] = player;
    updateTurn();
  }

  return board;
}

function updateTurn() {
  turn = turn === TURNS.X ? TURNS.O : TURNS.X;
}

function playTurn(board, index, player) {
  const newBoard = updateBoard(board, index, player);

  const newWinner = checkWinner(newBoard);

  if (newWinner) {
    winner = newWinner;

    if (winner) {
      console.log(`Winner is ${winner}`);
    } else {
      console.log('Tie');
    }
  } else if (checkEndGame(board)) {
    winner = false;
  }
}

function checkWinner(board) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  // If no winner, return null
  return null;
}

function checkEndGame(board) {
  return board.every((cell) => cell !== null);
}

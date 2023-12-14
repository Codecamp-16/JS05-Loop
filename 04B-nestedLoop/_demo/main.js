const X = 'X';
const O = 'O';
const _ = '_';

// Model-1
// const gameBoard = [X, O, X, O, X, O, O, O, X];

// Model-2
// const row1 = [X, O, X];
// const row2 = [O, X, O];
// const row3 = [O, O, X];

// const gameBoard = [row1, row2, row3];

// console.log(gameBoard[1][1]);

// const gameBoard = [
//   [X, O, X],
//   [O, X, O],
//   [O, O, X],
// ];

// const row1 = [1, 2, 3];
// const row2 = [4, 5, 6];
// const row3 = [7, 8, 9];
// const row4 = ['*', 0, '#'];

// const phonePad = [row1, row2, row3, row4];

// 062-534-8769

// 062
// console.log(phonePad[3][1]);
// console.log(phonePad[1][2]);
// console.log(phonePad[0][1]);

// 534
// console.log(phonePad[1][1]);
// console.log(phonePad[0][2]);
// console.log(phonePad[1][0]);

// 8769
// console.log(phonePad[2][1]);
// console.log(phonePad[2][0]);
// console.log(phonePad[1][2]);
// console.log(phonePad[2][2]);

// GameBoard

const gameBoard = [
  [X, _, X],
  [_, O, _],
  [O, _, X],
];

// Problem : WalkThrough Each Cell

// outer loop row = 1
// for (let i = 0; i < 3; i++) {
//   console.log('ROW:', i + 1);

//   for (let j = 0; j < 3; j++) {
//     console.log(gameBoard[i][j]);
//   }
// }

for (let i = 0; i < gameBoard.length; i++) {
  console.log('ROW:', i + 1, gameBoard[i]);
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

// OUTER : i = 0
// INNER : j = 0 // gameBoard[0][0] === "X"
// INNER : j = 1 // gameBoard[0][1] === "_"
// INNER : j = 2 // gameBoard[0][2] === "X"

// // OUTER : i = 1
// INNER : j = 0 // gameBoard[1][0] === "_"
// INNER : j = 1 // gameBoard[1][1] === "O"
// INNER : j = 2 // gameBoard[1][2] === "_"

// // OUTER : i = 2
// INNER : j = 0 // gameBoard[2][0] === "O"
// INNER : j = 1 // gameBoard[2][1] === "_"
// INNER : j = 2 // gameBoard[2][2] === "X"

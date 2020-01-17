/* eslint-disable max-len */

// Gameboard represents the tiles of the board
// Module
const Gameboard = (() => {
  const gameboard = ['', '', '', '', '', '', '', '', ''];

  const domBoard = document.querySelector('.board');

  const boardDisplay = document.querySelector('.board-display');

  // Select DOM board, render the Array to the DOM
  // This would be better if we wanted to not mutate the original Array, but I want to in the gamelogic.
  // const renderBoard = () => {
  //   gameboard.map((tile, index) => domBoard.insertAdjacentHTML('beforeend', `<div class="board-tile" data-num="${index}">${tile}</div>`));
  // };

  const renderBoard = () => {
    let count = 0;

    for (const item of gameboard) {
      domBoard.insertAdjacentHTML('beforeend', `<div class="board-tile" data-num="${count}">${item}</div>`);
      count++;
    }
  };

  // The winning positions on the Board
  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return {
    gameboard,
    boardDisplay,
    renderBoard,
    domBoard,
    winningCombos
  };
})();

export { Gameboard as default };

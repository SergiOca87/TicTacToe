/* eslint-disable max-len */

// Gameboard represents the tiles of the board
// Module
const Gameboard = (() => {
  const gameboard = ['', '', '', '', '', '', '', '', ''];

  const domBoard = document.querySelector('.board');

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

  const playerFactory = (playerName, playerNumber, playerSign, playerArr) => ({
    playerName, playerNumber, playerSign, playerArr,
  });

  // TODO - Finish it and create form
  // Create players on form submit

  // Initiate the players, make a form to choose the signs
  const player1 = playerFactory('player1', 1, 'X', []);
  const player2 = playerFactory('player2', 2, 'O', []);

  // const player = 0;

  // document.querySelector('#playerForm').addEventListener('submit', function(e) {
  //   e.preventDefault();

  //   //get name value, pass it to playerFacotryName
  //   const playerName = '';

  //   //Get sign value, pass it to playerFactorySign
  //   const playerSign = '';

  //   playerFactory(playerName, 1, playerSign, []);

  //   //after that, change player to 1, and don't allow more form submissions
  // });

  return {
    gameboard,
    renderBoard,
    domBoard,
    winningCombos,
    playerFactory,
    player1,
    player2,
  };
})();

export { Gameboard as default };


import Gameboard from './gameboard';

const GameLogic = ((boardctrl) => {
  // Turn, changes from 0 to 1
  let turn = 0;

  // Has the player won?
  // Check possible combinations
  const playerHasWon = (playerArr) => {
    // const sorted = arr.sort();

    // THis checks that the targetArr (Each of the winningCombos inner Arrays) matches with the numbers of the player Array
    const hasWonCheck = (playerArr, targetArr) => targetArr.every((num) => playerArr.includes(num));
    let hasWon = '';

    for (const combo of boardctrl.winningCombos) {
      // Need a final true or false
      if (playerArr.length > 2 && hasWonCheck(playerArr, combo)) {
        hasWon = hasWonCheck(playerArr, combo);
      }
    }
    return hasWon;
  };

  // Clicking on a tile, we pass in the turn to check which player did it
  boardctrl.domBoard.addEventListener('click', (e) => {
    // TODO:
    // ON every click fire a check for win function
    // Inspect the Array and check for winning combinations?
    // This should be 1 function
    // Deconstruct something, like boardctrl.player1
    if (e.target.classList.contains('board-tile') && turn === 0 && e.target.textContent === '') {
      e.target.textContent = boardctrl.player1.playerSign;

      // Find the num of the clicked tile and add the playerSign to the Array
      // eslint-disable-next-line no-param-reassign
      boardctrl.gameboard[e.target.dataset.num] = boardctrl.player1.playerSign;

      // Add the number of the tile, to the player Array
      boardctrl.player1.playerArr.push(parseFloat(e.target.dataset.num));

      // Change the turn
      turn = 1;

      console.log(playerHasWon( boardctrl.player1.playerArr) );
    } else if (e.target.classList.contains('board-tile') && turn === 1 && e.target.textContent === '') {
      e.target.textContent = boardctrl.player2.playerSign;

      // eslint-disable-next-line no-param-reassign
      boardctrl.gameboard[e.target.dataset.num] = boardctrl.player2.playerSign;

      boardctrl.player2.playerArr.push(parseFloat(e.target.dataset.num));

      turn = 0;
    }
  });

  
    // We pass in the boardctrl controller so that we can use it's returned methods but
    // Doing it like this keeps the modules more independant.
})(Gameboard);

export { GameLogic as default };

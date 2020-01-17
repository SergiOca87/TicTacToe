
import Gameboard from './gameboard';
import Players from './players';

const GameLogic = ((boardctrl, players) => {
  // Turn, changes from 0 to 1
  let turn = 0;

  // Has the player won?
  // Check possible combinations
  const playerHasWon = (player) => {

    const playerArr = player.playerArr;
    //  This checks that the targetArr (Each of the winningCombos inner Arrays) matches with the Array each player 
    //  Accumulates when clicking on tiles
    const hasWonCheck = (playerArr, targetArr) => targetArr.every((num) => playerArr.includes(num));
    let hasWon = '';

    for (const combo of boardctrl.winningCombos) {
      // Need a final true or false
      if (playerArr.length > 2 && hasWonCheck(playerArr, combo)) {
        hasWon = hasWonCheck(playerArr, combo);
      }
    }
    isGameOver( player.playerName, hasWon );
  };

  const isGameOver = (playerName, isTrue) => {
    if( isTrue ) {
      boardctrl.domBoard.classList.toggle('locked');
      boardctrl.boardDisplay.classList.toggle('visible');
      alert(`${playerName} Has Won!`);
    }
  };

  //A function to keep code DRY and to use inside on every tile click
  const playerClick = ( player, e ) => {

    e.target.textContent = player.playerSign;
    // Find the num of the clicked tile and add the playerSign to the Array
    // eslint-disable-next-line no-param-reassign
    boardctrl.gameboard[e.target.dataset.num] = player.playerSign;

    // Add the number of the tile, to the player Array
    player.playerArr.push(parseFloat(e.target.dataset.num));

    // Check if the player has won
    // Small SetTimeout so that it can render the playerSIn in time before announcing a winner
    setTimeout( function() {
      playerHasWon( player );
    }, 100);
    
    // Change the turn
    turn === 1 ? turn = 0 : turn = 1;
  };

  // Clicking on a tile, we pass in the turn to check which player did it
  boardctrl.domBoard.addEventListener('click', (e) => {
 
    if (e.target.classList.contains('board-tile') && turn === 0 && e.target.textContent === '') {

      playerClick( players.player1, e );
     
    } else if (e.target.classList.contains('board-tile') && turn === 1 && e.target.textContent === '') {

      playerClick( players.player2, e );
      
    }
  });

    // We pass in the boardctrl and players controllers so that we can use it's returned methods and values
    // Doing it like this keeps the modules more independant.
})(Gameboard, Players);

export { GameLogic as default };

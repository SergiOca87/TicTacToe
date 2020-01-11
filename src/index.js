import './style.scss';

import Gameboard from './gameboard';
import GameLogic from './gamelogic';

// As little global code as possible!
console.log('test hello5');
// /* Factory, more than one, like players */
// const playerFactory = (playerName, playerNumber, playerSign, playerArr) => {
//   return { playerName, playerNumber, playerSign, playerArr };
// };

// Start Game, belongs in GameLogic?
Gameboard.renderBoard();
GameLogic();
// Gameboard.markTile()

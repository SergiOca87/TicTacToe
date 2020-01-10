import './style.scss';

import Gameboard from './gameboard';
import GameLogic from './gamelogic';

// As little global code as possible!

// /* Factory, more than one, like players */
// const playerFactory = (playerName, playerNumber, playerSign, playerArr) => {
//   return { playerName, playerNumber, playerSign, playerArr };
// };

// Start Game, belongs in GameLogic?
Gameboard.renderBoard();
GameLogic();
// Gameboard.markTile()

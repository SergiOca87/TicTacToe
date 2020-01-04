import './style.scss';

//As little global code as possible!

//Gameboard represents the tiles of the board
//Module
const Gameboard = (() => {

    const gameboard = [ "", "", "", "", "", "", "", "", ""];

    const domBoard = document.querySelector('.board');

    //Select DOM board, render the Array to the DOM 
    const renderBoard = () => {
      let count = 0;
        
        for(let item of gameboard) {
            domBoard.insertAdjacentHTML("beforeend",`<div class="board-tile" data-num="${count}">${item}</div>`);
            count++;
        }
    };

    //The winning positions on the Board
    const winningCombos = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8]
    ];

    const playerFactory = (playerName, playerNumber, playerSign, playerArr) => {
      return { playerName, playerNumber, playerSign, playerArr };
    };

    //TODO - Finish it and create form
    //Create players on form submit

    let player = 0;

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
        playerFactory
    };

})();

// /* Factory, more than one, like players */
// const playerFactory = (playerName, playerNumber, playerSign, playerArr) => {
//   return { playerName, playerNumber, playerSign, playerArr };
// };

//Initiate the players, make a form to choose the signs?
const player1 = Gameboard.playerFactory('player1', 1, 'X', []);
const player2 = Gameboard.playerFactory('player2', 2, 'O', []);



const GameLogic = (( boardCtrl ) => {

    //Turn, changes from 0 to 1
    let turn = 0;

    //Clicking on a tile, we pass in the turn to check which player did it
    boardCtrl.domBoard.addEventListener('click', function(e) {

      //TODO:
      //ON every click fire a check for win function
      //Inspect the Array and check for winning combinations?
      //This should be 1 function
      if( e.target.classList.contains('board-tile') && turn === 0 && e.target.textContent === '' ) {
        e.target.textContent = player1.playerSign;

        //Find the num of the clicked tile and add the playerSign to the Array
        boardCtrl.gameboard[ e.target.dataset.num ] = player1.playerSign;

        //Add the number of the tile, to the player Array
        player1.playerArr.push( parseFloat( e.target.dataset.num ) );

        //Change the turn
        turn = 1;

      } else if( e.target.classList.contains('board-tile') && turn === 1 && e.target.textContent === '' ) {
        e.target.textContent = player2.playerSign;

        boardCtrl.gameboard[ e.target.dataset.num ] = player2.playerSign;

        player2.playerArr.push( parseFloat( e.target.dataset.num ) );

        console.log( 'player2', playerHasWon( player1.playerArr ) );

        turn = 0;
      }

    });

    //Has the player won?
    //Check possible combinations
    const playerHasWon = ( playerArr ) => {
      //const sorted = arr.sort();

      //THis checks that the targetArr (Each of the winningCombos inner Arrays) matches with the numbers of the player Array
      let hasWonCheck = ( playerArr, targetArr ) => targetArr.every( num => playerArr.includes(num));
      let hasWon = '';

      for( let combo of boardCtrl.winningCombos ){
    
        //Need a final true or false
        if( playerArr.length > 2  && hasWonCheck(playerArr, combo) ) {
          hasWon = hasWonCheck(playerArr, combo);
        }
      }
      return hasWon;
    };
    //We pass in the GameBoard controller so that we can use it's returned methods but 
    //Doing it like this keeps the modules more independant.
})( Gameboard );


//Start Game, belongs in GameLogic?
Gameboard.renderBoard();
//Gameboard.markTile()

console.log("watching");

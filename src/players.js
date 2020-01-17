const Players = (() => {

    const playerFactory = (playerName, playerNumber, playerSign, playerArr) => ({
        playerName, playerNumber, playerSign, playerArr,
    });

    // TODO - Finish it and create form
    // Create players on form submit

    // Initiate the players, make a form to choose the signs
    const player1 = playerFactory('player1', 1, 'X', []);
    const player2 = playerFactory('player2', 2, 'O', []);

    return {
        player1,
        player2
    };
})();

export { Players as default };



 


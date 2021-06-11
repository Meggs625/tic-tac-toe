class Game {
  constructor(player1, player2) {
    this.pig = player1;
    this.tiger = player2;
    this.turn = 1;
  }

  trackTurns() {
    // this.turn++;
    if (this.turn % 2 === 0) {
      return this.tiger;
    } else {
      return this.pig;
    }
  }

  followingGameBoard(whichSection, whichPlayer) {
    // Update "tally" with each turn
    // call callADraw(currentBoard);
  }


  assessWinning(currentwhichPlayer) {
    // invoke evaluateRows(whichPlayer);
    // invoke evaluateColumns(whichPlayer);
    // invoke evaluateDiagonals(whichPlayer);

  }
  evaluateRows(whichPlayer) {
    // iterate through the 3 winning row comibinations
      // (1, 4, 7), (2, 5, 8), (3, 6, 9)
    // if all true in one comibinattion for that player, invoke callAWin
    //else, invoke evaluateColumns(whichPlayer);
  }
  evaluateColumns() {
    // iterate through the 3 winning row comibinations
      // (1, 2, 3), (4, 5, 6), (7, 8, 9)
    // if all true in one comibinattion for that player, invoke callAWin
    //else, invoke evaluateDiagonals(whichPlayer);
  }
  evaluateDiagonals() {
    // iterate through the 2 winning diagonal comibinations
      // (1, 5, 9), (3, 5, 7)
    //if all true in one combination for the player, invoke callAWin
    // else, invoke
  }

  callADraw(currentBoard) {
    // assess if all values
    //Update localStorage with whose turn it is
  }

  callAWin(winningPlayer) {
    // Change <h1> to show winning player
    // Add one win to the winning player's count. (winningPlayer.wins++;)
    // invoke the saveWinsToStorage for the winning Player
    //Update localStorage with whose turn it is
    //invoke setNewGame();
  }


  setNewGame() {
    // removing all added items,
    // showing the updated # of wins for the players - retrievedFromStorage
    // Displaying whose turn is next - retrievedFromStorage
  }

  // where to trackTurns

}

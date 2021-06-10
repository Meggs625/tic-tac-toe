class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = 1;
  }

  trackTurns() {
    this.turn++;
    if (this.turn % 2 === 0) {
      return player2.name;
    } else {
      return player1.name;
    }
  }

  followingGameBoard(whichSection, whichPlayer) {
    // Update "tally" with each turn
    // call assessWinning(currentBoard);
    // trackTurns();
  }

  assessWinning(currentBoard) {
    // set winning conditions to check against:
    // Winning Combos: (1, 2, 3), (4, 5, 6), (7, 8, 9), (1, 4, 7), (2, 5, 8), (3, 6, 9), (1, 5, 9), (3, 5, 7)
    // Invoke callingAWin passing the winning Player or
    // evalutes to False, invoke turnTracker
    // or, invoke callingADraw if game has no more winning moves possible
  }

  callingAWin(winningPlayer) {
    // Change <h1> to show winning player
    // Add one win to the winning player's count. (winningPlayer.wins++;)
    // invoke the saveWinsToStorage for the winning Player
    //Update localStorage with whose turn it is
  }

  callingADraw() {
    // invoked with a certain condition in the assessWinning method
    // none of the winningConditions are possible
    // return "It's a Draw!" in <h1>
    //invoke trackTurns
    //Update localStorage with whose turn it is
  }

  setNewGame() {
    // removing all added items,
    // showing the updated # of wins for the players - retrievedFromStorage
    // Displaying whose turn is next - retrievedFromStorage
  }

}

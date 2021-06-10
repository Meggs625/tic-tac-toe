class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = 1;
  }

  trackTurns() {
    this.turn++;
    if (this.turn % 2 === 0) {
      return player2.icon;
    } else {
      return player1.icon;
    }
    // localStorage save point
  }

  followingGameBoard(whichSection, whichPlayer) {
    // Update with each turn
    // call assessWinning(currentBoard);
    // if assessWinning returns True, invoke callingAWin passing winning Player as argument
    // if assessWinning returns false, then trackTurns();
    // When to call a draw
  }

  assessWinning(currentBoard) {
    // set winning conditions to check against:
    // Winning Combos: (1, 2, 3), (4, 5, 6), (7, 8, 9), (1, 4, 7), (2, 5, 8), (3, 6, 9), (1, 5, 9), (3, 5, 7)
    // Return true with winning Player or False
  }

  callingAWin(winningPlayer) {
    // Change <h1> to show winning player
    // Add one win to the winning player's count.
    // invoke the saveWinsToStorage for the winning Player
  }

  callingADraw() {
    // invoked with a certain condition in the assessWinning method
    // none of the winningConditions are possible
    // return "It's a Draw!" in <h1>
  }

  setNewGame() {
    // removing all added items,
    // showing the updated # of wins for the players - retrievedFromStorage
    // Displaying whose turn is next - retrievedFromStorage
  }

}

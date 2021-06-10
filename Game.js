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
    
  }

}

class Player {
  constructor(name, title, token) {
    this.name = name;
    this.title = title;
    this.token = token;
    this.wins = 0;
  }

  // retrievePlayerFromStorage() {
  //   // var thePlayer = JSON.stringify(this.title);
  //   var parsedPlayer = JSON.parse(localStorage.getItem(this.title));
  //   this.player = parsedPlayer;
  // }


  savePlayerToStorage() {
    var currentPlayer = JSON.stringify(this);
    localStorage.setItem(this.title, currentPlayer);
  };
  // saveWinsToStorage() {
  //   var currentWins = JSON.stringify(this.wins);
  //   var thePlayer = JSON.stringify(this.name);
  //   localStorage.setItem(thePlayer, currentWins);
  // }


  retrieveWinsFromStorage() {
    // var thePlayer = JSON.stringify(this.title);
    var parsedPlayer = JSON.parse(localStorage.getItem(this.title));
    if (!parsedPlayer) {
      this.wins = 0;
    } else {
      this.wins = parsedPlayer.wins;
    }
  }
};

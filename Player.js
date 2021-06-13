class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var currentWins = JSON.stringify(this.wins);
    var thePlayer = JSON.stringify(this.name);
    localStorage.setItem(thePlayer, currentWins);
  }

  retrieveWinsFromStorage() {
    var thePlayer = JSON.stringify(this.name);
    var parsedWins = JSON.parse(localStorage.getItem(thePlayer));
    if (!parsedWins) {
      this.wins = 0;
    } else {
      this.wins = parsedWins;
    }
  }
};

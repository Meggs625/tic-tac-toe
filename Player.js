class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
  }

  saveWinsToStorage() {
    var currentWins = JSON.stringify(this.wins);
    var thePlayer = JSON.stringify(this.name);
    localStorage.setItem(thePlayer, currentWins);
  }

  retrieveWinsFromStorage() {
    var thePlayer = JSON.stringify(this.name);
    var parsedWins = JSON.parse(localStorage.getItem(thePlayer));
    this.wins = parsedWins;
  }
};

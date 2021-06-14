class Player {
  constructor(name, title, token) {
    this.name = name;
    this.title = title;
    this.token = token;
    this.wins = 0;
  }

  savePlayerToStorage() {
    var currentPlayer = JSON.stringify(this);
    localStorage.setItem(this.title, currentPlayer);
  }

  retrieveWinsFromStorage() {
    var parsedPlayer = JSON.parse(localStorage.getItem(this.title));
    if (!parsedPlayer) {
      this.wins = 0;
    } else {
      this.wins = parsedPlayer.wins;
    }
  }
}

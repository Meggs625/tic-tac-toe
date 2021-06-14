class Game {
  constructor(player1, player2) {
    this.pig = player1;
    this.tiger = player2;
    this.turn = 1;
    this.victory = false;
    this.gameSectionStatus = {
      item1: false,
      item2: false,
      item3: false,
      item4: false,
      item5: false,
      item6: false,
      item7: false,
      item8: false,
      item9: false,
    };
  }

  trackTurns() {
    if (this.turn % 2 === 0) {
      this.resetTurns();
      return this.tiger;
    } else {
      this.resetTurns();
      return this.pig;
    }
  }

  resetTurns() {
    if (this.turn > 50) {
      this.turn = 1;
    }
  }

  updateGameBoard(sectionId, playerName, playerToken) {
    this.gameSectionStatus[sectionId] = playerName;
    renderToken(event, playerToken);
    this.evaluateRows(playerName);
  }

  evaluateRows(playerName) {
    if (this.gameSectionStatus.item1 === playerName && this.gameSectionStatus.item2 === playerName && this.gameSectionStatus.item3 === playerName) {
      this.callAWin(playerName);
    } else if (this.gameSectionStatus.item4 === playerName && this.gameSectionStatus.item5 === playerName && this.gameSectionStatus.item6 === playerName) {
      this.callAWin(playerName);
    } else if (this.gameSectionStatus.item7 === playerName && this.gameSectionStatus.item8 === playerName && this.gameSectionStatus.item9 === playerName) {
      this.callAWin(playerName);
    } else {
      this.evaluateColumns(playerName)
    }
  }

  evaluateColumns(playerName) {
    if (this.gameSectionStatus.item1 === playerName && this.gameSectionStatus.item4 === playerName && this.gameSectionStatus.item7 === playerName) {
      this.callAWin(playerName);
    } else if (this.gameSectionStatus.item2 === playerName && this.gameSectionStatus.item5 === playerName && this.gameSectionStatus.item8 === playerName) {
      this.callAWin(playerName);
    } else if (this.gameSectionStatus.item3 === playerName && this.gameSectionStatus.item6 === playerName && this.gameSectionStatus.item9 === playerName) {
      this.callAWin(playerName);
    } else {
      this.evaluateDiagonals(playerName)
    }
  }

  evaluateDiagonals(playerName) {
    if (this.gameSectionStatus.item1 === playerName && this.gameSectionStatus.item5 === playerName && this.gameSectionStatus.item9 === playerName) {
      this.callAWin(playerName);
    } else if (this.gameSectionStatus.item3 === playerName && this.gameSectionStatus.item5 === playerName && this.gameSectionStatus.item7 === playerName) {
      this.callAWin(playerName);
    } else {
      this.callADraw()
    }
  }

  callADraw(currentBoard) {
    var modifiedGame = Object.values(this.gameSectionStatus);
    var isGameFull = modifiedGame.every(this.isFull);
    if (!isGameFull) {
      this.changeTurns();
    } else {
      this.victory = true;
      this.changeTurns();
      renderDraw();
      this.prepareForNextGame();
    }
  }

  isFull(currentValue) {
    return(currentValue);
  }

  changeTurns() {
    this.turn++;
    displayTurn();
  }

  callAWin(playerName) {
    this.victory = true;
    this[playerName].wins++;
    this[playerName].savePlayerToStorage();
    this.turn++;
    renderWinner(this[playerName].token);
    this.prepareForNextGame();
  }

  prepareForNextGame() {
    this.storeWhoseTurn();
    this.clearGameSections();
    setTimeout(loadNextGame, 1500);
  }

  clearGameSections() {
    this.gameSectionStatus = {
      item1: false,
      item2: false,
      item3: false,
      item4: false,
      item5: false,
      item6: false,
      item7: false,
      item8: false,
      item9: false,
    };
  }

  storeWhoseTurn() {
    var currentTurn = JSON.stringify(this.turn);
    localStorage.setItem('whose turn', currentTurn);
  }
}

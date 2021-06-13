class Game {
  constructor(player1, player2) {
    this.pig = player1;
    this.tiger = player2;
    this.turn = 1;
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
    gameSectionStatus[sectionId] = playerName;
    renderToken(event, playerToken);
    this.evaluateRows(playerName);
  }

  evaluateRows(playerName) {
    if (gameSectionStatus.item1 === playerName && gameSectionStatus.item4 === playerName && gameSectionStatus.item7 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item2 === playerName && gameSectionStatus.item5 === playerName && gameSectionStatus.item8 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item3 === playerName && gameSectionStatus.item6 === playerName && gameSectionStatus.item9 === playerName) {
      this.callAWin(playerName);
    } else {
      this.evaluateColumns(playerName)
    }
  }

  evaluateColumns(playerName) {
    if (gameSectionStatus.item1 === playerName && gameSectionStatus.item2 === playerName && gameSectionStatus.item3 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item4 === playerName && gameSectionStatus.item5 === playerName && gameSectionStatus.item6 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item7 === playerName && gameSectionStatus.item8 === playerName && gameSectionStatus.item9 === playerName) {
      this.callAWin(playerName);
    } else {
      this.evaluateDiagonals(playerName)
    }
  }

  evaluateDiagonals(playerName) {
    if (gameSectionStatus.item1 === playerName && gameSectionStatus.item5 === playerName && gameSectionStatus.item9 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item3 === playerName && gameSectionStatus.item5 === playerName && gameSectionStatus.item7 === playerName) {
      this.callAWin(playerName);
    } else {
      this.callADraw()
    }
  }

  callADraw(currentBoard) {
    var modifiedGame = Object.values(gameSectionStatus);
    var isGameFull = modifiedGame.every(this.isFull);
    if (!isGameFull) {
      this.changeTurns();
    } else {
      this.changeTurns();
      renderDraw();
      this.storeWhoseTurn();
      setTimeout(this.setNewGame, 1000);
    }
  }

  isFull(currentValue) {
    return (currentValue === 'pig' || currentValue === 'tiger');
  }

  changeTurns() {
    this.turn++;
    displayTurn();
  }

  callAWin(playerName) {
    if (playerName === this.pig.name) {
      this.pig.wins++;
      this.pig.saveWinsToStorage();
      this.turn++;
      renderWinner(this.pig.token);
      this.storeWhoseTurn();
      setTimeout(this.setNewGame, 1000);
    } else {
      this.tiger.wins++;
      this.tiger.saveWinsToStorage();
      this.turn++;
      renderWinner(this.tiger.token);
      this.storeWhoseTurn();
      setTimeout(this.setNewGame, 1000);
    }
  }

  setNewGame() {
    location.reload();
  }

  storeWhoseTurn() {
    var currentTurn = JSON.stringify(this.turn);
    localStorage.setItem('whose turn', currentTurn);
  }
}

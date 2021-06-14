class Game {
  constructor(player1, player2) {
    this.pig = player1;
    this.tiger = player2;
    this.turn = 1;
    this.victory = false;
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
    console.log(playerName)
    if (gameSectionStatus.item1 === playerName && gameSectionStatus.item2 === playerName && gameSectionStatus.item3 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item4 === playerName && gameSectionStatus.item5 === playerName && gameSectionStatus.item6 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item7 === playerName && gameSectionStatus.item8 === playerName && gameSectionStatus.item9 === playerName) {
      this.callAWin(playerName);
    } else {
      this.evaluateColumns(playerName)
    }
  }

  evaluateColumns(playerName) {
    if (gameSectionStatus.item1 === playerName && gameSectionStatus.item4 === playerName && gameSectionStatus.item7 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item2 === playerName && gameSectionStatus.item5 === playerName && gameSectionStatus.item8 === playerName) {
      this.callAWin(playerName);
    } else if (gameSectionStatus.item3 === playerName && gameSectionStatus.item6 === playerName && gameSectionStatus.item9 === playerName) {
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
      this.clearGameSections();
      setTimeout(loadNextGame, 1500);
      // setTimeout(this.setNewGame, 1500);
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
    debugger
    console.log('player', this[playerName])
    this[playerName].wins++;
    console.log(this[playerName].wins)
    this[playerName].savePlayerToStorage();
    this.turn++;
    renderWinner(this[playerName].token);
    this.storeWhoseTurn();
    this.clearGameSections();
    setTimeout(loadNextGame, 1500);
    // this.setNewGame();
    // setTimeout(this.setNewGame, 1500);
  }

  // setNewGame() {
  //   this.clearGameSections();
  //   // location.reload();
  // }

  clearGameSections() {
    gameSectionStatus = {
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

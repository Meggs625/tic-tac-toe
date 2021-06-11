class Game {
  constructor(player1, player2) {
    this.pig = player1;
    this.tiger = player2;
    this.turn = 1;
  }

  trackTurns() {
    if (this.turn % 2 === 0) {
      return this.tiger;
    } else {
      return this.pig;
    }
  }

  updateGameBoard(sectionId, playerName) {
    console.log(gameSectionStatus);
    console.log(this.pig.wins)
    gameSectionStatus[sectionId] = playerName;
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
      this.turns++;
      this.setNewGame();
      //localStorage for whose turn it is
      //and invoke the method to reset the Game
    }
  }

  isFull(currentValue) {
      return (currentValue === 'Pig' || currentValue === 'Tiger');
    }

  changeTurns() {
    this.turn++;
    //invoke the function to update to the DOM for the next player - both in the
    //heading of whose turn as well as with the icon that will be dropped
  }

  callAWin(playerName) {
    if (playerName === this.pig.name) {
      console.log('Pig wins!')
      this.pig.wins++;
      this.pig.saveWinsToStorage();
      this.turn++;
      this.setNewGame();
    // invoke DOM to update <h1> with winningPlayer's name
  } else {
      console.log('Tiger wins!')
      this.tiger.wins++;
      this.tiger.saveWinsToStorage();
      this.turn++;
      this.setNewGame();
      // invoke DOM to update <h1> with winningPlayer's name
    }
  }

  //
  setNewGame() {
    this.storeWhoseTurn();
    location.reload();
  }
  storeWhoseTurn() {
    var currentTurn = JSON.stringify(this.turn);
    localStorage.setItem('whose turn', currentTurn);
  }
}

  // where to trackTurns

class Game {
  constructor(player1, player2) {
    this.pig = player1;
    this.tiger = player2;
    this.turn = 1;
  }

  trackTurns() {
    // this.turn++;
    if (this.turn % 2 === 0) {
      return this.tiger;
    } else {
      return this.pig;
    }
  }

  updateGameBoard(sectionId, playerName) {
    gameSectionStatus[sectionId] = playerName;
    // for (var i = 0; i < winningConditions.length; i++) {
    //     if (winningConditions[i][sectionId] === false) {
    //     winningConditions[i][sectionId] = playerName;
    //   }
    // }
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
    // var rowOne = Object.values(winningConditions[3]);
    //   if (rowOne.every(this.isPigWinner) || rowOne.every(this.isTigerWinner)) {
    //     console.log('yes')
    //     //add return and then move to else if statement for row 2
    //   }
    //
    // var rowTwo = Object.values(winningConditions[4]);
    // var rowThree = Object.values(winningConditions[5]);
    // }


  // isPigWinner(currentValue) {
  //   return (currentValue === 'Pig')
  // }
  //



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
  //
  callADraw(currentBoard) {
    var modifiedGame = Object.values(gameSectionStatus);
    var isGameFull = modifiedGame.every(this.isFull);
    if (!isGameFull) {
      console.log('Uh oh');
    };
    // assess if all values
    //Update localStorage with whose turn it is
  }

  isFull(currentValue) {
      return (currentValue === 'Pig' || currentValue === 'Tiger');
    }
  //
  // callAWin(winningPlayer) {
  //   // Change <h1> to show winning player
  //   // Add one win to the winning player's count. (winningPlayer.wins++;)
  //   // invoke the saveWinsToStorage for the winning Player
  //   //Update localStorage with whose turn it is
  //   //invoke setNewGame();
  // }

  //
  // setNewGame() {
  //   // removing all added items,
  //   // showing the updated # of wins for the players - retrievedFromStorage
  //   // Displaying whose turn is next - retrievedFromStorage
  // }
}

  // where to trackTurns

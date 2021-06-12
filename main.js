//Query Selectors
  var gameBoard = document.getElementById('board');
  var playerOnesWins = document.getElementById('player-one');
  var playerTwosWins = document.getElementById('player-two');
  var whoseTurn = document.getElementById('whose-turn');
  var mainSection = document.getElementById('main-section');


//Global variables
var theGame;


//Event Listeners
window.addEventListener('load', loadGame);
gameBoard.addEventListener('click', function(event) {
  populateSection(event)});


//Functions
function loadGame() {
  var pig = new Player('Pig', '🐷');
  var tiger = new Player('Tiger', '🐯');
  theGame = new Game(pig, tiger);
  loadPreviousWins(pig, tiger);
  loadCurrentTurn();
  displayStoredWins();
  displayTurn();
}

function loadPreviousWins(pig, tiger) {
  pig.retrieveWinsFromStorage();
  tiger.retrieveWinsFromStorage();
}

function loadCurrentTurn() {
  var parsedTurns = JSON.parse(localStorage.getItem('whose turn'));
  if (!parsedTurns) {
    theGame.turn = 1;
  } else {
    theGame.turn = parseInt(parsedTurns);
  }
}

function displayStoredWins() {
  displayPigStoredWins();
  displayTigerStoredWins();
}

function displayTigerStoredWins() {
  if (theGame.tiger.wins === 1) {
    playerTwosWins.innerHTML = `${theGame.tiger.wins} Win`;
  } else {
    playerTwosWins.innerHTML = `${theGame.tiger.wins} Wins`;
  }
}

function displayPigStoredWins() {
  if (theGame.pig.wins === 1) {
    playerOnesWins.innerHTML = `${theGame.pig.wins} Win`;
  } else {
    playerOnesWins.innerHTML = `${theGame.pig.wins} Wins`;
  }
}

function displayTurn() {
  whoseTurn.innerHTML = `It's ${theGame.trackTurns().token}'s turn!'`;
}

function populateSection(event) {
  var playerName = theGame.trackTurns().name;
  var playerToken = theGame.trackTurns().token;
  if (!gameSectionStatus[event.target.id]) {
      theGame.updateGameBoard(event.target.id, playerName, playerToken);
  }
}

function renderToken(event, playerToken) {
    event.target.closest('.item').innerHTML = playerToken;
}

function renderDraw() {
    whoseTurn.innerHTML = 'It\'s a Draw!';
  }

function renderWinner(playerToken) {
    whoseTurn.innerHTML = `${playerToken} wins!!!`;
  }

function resetGame() {
    if (whoseTurn.innerHTML === 'It\'s a Draw!') {
      theGame.setNewGame();
    } else if (whoseTurn.innerHTML === `${theGame.pig.token} wins!!!` || whoseTurn.innerHTML === `${theGame.tiger.token} wins!!!`) {
      theGame.setNewGame();
    }
  }

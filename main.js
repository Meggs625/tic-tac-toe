//Query Selectors
  var gameBoard = document.getElementById('board');
  var playerOnesWins = document.getElementById('player-one');
  var playerTwosWins = document.getElementById('player-two');
  var whoseTurn = document.getElementById('whose-turn');


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
  playerOnesWins.innerHTML = `${theGame.pig.wins} Wins`;
  playerTwosWins.innerHTML = `${theGame.tiger.wins} Wins`;
}

function displayTurn() {
  whoseTurn.innerHTML = `It's ${theGame.trackTurns().token}'s turn!'`;
}

function populateSection(event) {
  var playerName = theGame.trackTurns().name;
  if (!gameSectionStatus[event.target.id])
      theGame.updateGameBoard(event.target.id, playerName);
      // update innderHTML of the right Section to the player's token
  }

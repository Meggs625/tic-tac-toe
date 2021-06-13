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
  var pig = new Player('pig', '🐷');
  var tiger = new Player('tiger', '🐯');
  theGame = new Game(pig, tiger);
  loadPreviousWins(pig, tiger);
  loadCurrentTurn();
  displayStoredWins(pig, tiger);
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

function displayStoredWins(pig, tiger) {
  displayPlayerStoredWins(pig, playerOnesWins);
  displayPlayerStoredWins(tiger, playerTwosWins);
}

function displayPlayerStoredWins(player, winDisplay) {
  console.log(player);
  if (player.wins === 1) {
    winDisplay.innerHTML = `${player.wins} Win`;
  } else {
    winDisplay.innerHTML = `${player.wins} Wins`;
  }
}

function displayTurn() {
  whoseTurn.innerHTML = `It's ${theGame.trackTurns().token}'s turn!`;
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

//Query Selectors
  var gameBoard = document.getElementById('board');
  var gameSections = document.querySelectorAll('.item');
  var playerOnesWins = document.getElementById('player-one-wins');
  var playerOneForm = document.getElementById('player-one-form');
  var playerOneName = document.getElementById('player-one-name');
  var playerOneSubmitBtn = document.getElementById('player-one-submit');
  var playerOneNameDisplay = document.getElementById('one-name-display');
  var playerTwoForm = document.getElementById('player-two-form');
  var playerTwosWins = document.getElementById('player-two-wins');
  var playerTwoName = document.getElementById('player-two-name');
  var playerTwoSubmitBtn = document.getElementById('player-two-submit');
  var playerTwoNameDisplay = document.getElementById('two-name-display');
  var whoseTurn = document.getElementById('whose-turn');
  var centerPanel = document.getElementById('center-panel')
  var clearHistoryBtn =document.getElementById('clear-btn');

//Global variables
var theGame;
var pig;
var tiger;

//Event Listeners
window.addEventListener('load', loadGame);
playerOneSubmitBtn.addEventListener('click', function(event) {
  createPlayerOne(event)});
playerTwoSubmitBtn.addEventListener('click', function(event) {
  createPlayerTwo(event)});
gameBoard.addEventListener('click', function(event) {
    populateSection(event)});
centerPanel.addEventListener('click', function(event) {
  clearStoredHistory(event)});


//Functions
function loadGame() {
  var parsedPig = JSON.parse(localStorage.getItem("pig"));
  var parsedTiger = JSON.parse(localStorage.getItem("tiger"));
  if (parsedPig && parsedTiger) {
  pig = new Player(parsedPig.name, parsedPig. title, parsedPig.token);
  tiger = new Player(parsedTiger.name, parsedTiger.title, parsedTiger.token);
  theGame = new Game(pig, tiger);
  playerOneForm.classList.add('hidden');
  playerTwoForm.classList.add('hidden');
  loadCurrentTurn();
  loadPreviousWins();
  displayStoredWins(pig, tiger);
  displayTurn();
  displayBtn(pig, tiger);
  displayNames(pig, tiger);
} else {
  whoseTurn.innerText = 'Welcome! Enter Player One\'s Name';
  playerOnesWins.innerText = '0 Wins';
  playerTwosWins.innerText= '0 Wins';
}
}
  //if localStorage has value for pig and tiger, load that information
  //and h1 reads 'Welcome back!'
  //else,

// function loadGame() {
//   var pig = new Player('pig', '🐷');
//   var tiger = new Player('tiger', '🐯');
//   theGame = new Game(pig, tiger);
//   loadPreviousWins(pig, tiger);
//   loadCurrentTurn();
//   displayStoredWins(pig, tiger);
//   displayTurn();
//   displayBtn(pig, tiger);
// }

function createPlayerOne(event) {
  event.preventDefault(event);
  playerOneForm.classList.add('hidden');
  playerOneNameDisplay.innerText = playerOneName.value;
  pig = new Player(playerOneName.value, 'pig', '🐷');
  playerTwoSubmitBtn.disabled = false;
}

function createPlayerTwo(event) {
  event.preventDefault(event);
  playerTwoForm.classList.add('hidden');
  playerTwoNameDisplay.innerText = playerTwoName.value;
  tiger = new Player(playerTwoName.value, 'tiger', '🐯');
  theGame = new Game(pig, tiger);
  displayTurn();
}

function loadNextGame() {
  clearTokens();
  theGame.victory = false;
  loadPreviousWins();
  loadCurrentTurn();
  displayStoredWins(pig, tiger);
  displayTurn();
  displayBtn(pig, tiger);
}

function clearTokens() {
  for (var i = 0; i < gameSections.length; i++) {
    if (gameSections[i].innerText) {
      gameSections[i].innerText = '';
    }
  }
}

function loadPreviousWins() {
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
  if (player.wins === 1) {
    winDisplay.innerHTML = `${player.wins} Win`;
  } else {
    winDisplay.innerHTML = `${player.wins} Wins`;
  }
}

function displayTurn() {
  whoseTurn.innerHTML = `It's ${theGame.trackTurns().token}'s Turn!`;
}

function displayNames(pig, tiger) {
  playerOneNameDisplay.innerText = pig.name;
  playerTwoNameDisplay.innerText = tiger.name;
}


function populateSection(event) {
  var playerName = theGame.trackTurns().title;
  var playerToken = theGame.trackTurns().token;
  if (!gameSectionStatus[event.target.id] && !theGame.victory) {
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
  whoseTurn.innerHTML = `${playerToken} Wins!!!`;
}

function displayBtn(pig, tiger) {
  if(pig.wins >= 1 || tiger.wins >= 1) {
    clearHistoryBtn.classList.remove("hidden");
  }
}

function clearStoredHistory(event) {
  if (event.target.id === 'clear-btn') {
  localStorage.clear();
  location.reload();
  }
}

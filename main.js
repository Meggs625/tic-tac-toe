//Query Selectors
  var gameBoard = document.getElementById('board');
  var sectionFive = document.getElementById('item5');

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
}

function loadPreviousWins(pig, tiger) {
  pig.retrieveWinsFromStorage();
  tiger.retrieveWinsFromStorage();
}

function populateSection(event) {
  var playerName = theGame.trackTurns().name;
  if (!gameSectionStatus[event.target.id])
      theGame.updateGameBoard(event.target.id, playerName);
      // update innderHTML of the right Section to the player's token
  }

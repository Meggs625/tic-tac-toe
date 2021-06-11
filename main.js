//Query Selectors
  var gameBoard = document.getElementById('board');
  var sectionFive = document.getElementById('item5');

//Global variables
var theGame;

//Event Listeners
window.addEventListener('load', loadGame);
gameBoard.addEventListener('click', function(event) {
  testFunctionality(event)});
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

function testFunctionality(event) {
  for (var i = 0; i < winningConditions.length; i++){
  if (!winningConditions[1][event.target.id]) {
    sectionFive.innerHTML = theGame.trackTurns().token;
    console.log(winningConditions[1][event.target.id]);
  }
  }
}

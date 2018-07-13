let winArr1 = [
  ["#0-0", "#1-0", "#2-0"],
  // top row
//continue untill all rows are filled
["#0-0", "#0-1", "0-2"],
["#1-0", "#1-1", "#1-2"],
["#2-0", "#2-1", "#2-2"],
["#0-1", "#1-1", "#2-1"],
["#0-2", "#1-2", "#2-2"],
["#0-0", "#1-1", "#2-2"],
["#2-0", "#1-1", "#0-2"]]

let mark='X';

	
//create an event listener that works as a function for when players are marking
	function listenForClicksOnCell() {
  return $('.cell').click(markCell) === mark
}
listenForClicksOnCells()

function markCell(){
  if (!this.innerText) {
    this.innerText = mark
    if (playerWon(mark)) {
      console.log(mark,'You won the game!')
    }
  }
}

// this function runs after each turn
// it checks whether a given (either 'x' or 'o') populates all
// three spots in any given win combination
function playerWon () {
  for (let i = ; i < ; i) {
    let winCombo = 
    let won = w
    // checks if elementContains returns true for every id
    if (won) return;
	
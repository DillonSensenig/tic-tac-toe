// Built with HTML and JavaScript, the page should load an empty 3x3 grid roughly the same size as the window of desktop browser. DONE

// **Players will take turns clicking on empty cells of the grid with their mouse to fill the cell with an X or O symbol, one for each player.** //--// **For the first turn, randomize the starting symbol. After that, alternate the player symbol after playing an empty square. The current player should be shown beneath the grid.**


// Added currentPlayer variable. Math.floor avoids decimals. Math.random to alternate from X to O

var currentPlayer = Math.floor(Math.random() * 2) == 0 ? "X" : "O";

// Added cellChosen function that detects click in each cell "cellNumber" uses .innerHTML to insert X / O into empty cell.

function cellChosen(cellNumber) {
  if(document.getElementById(cellNumber.toString()).innerHTML == "") {
    document.getElementById(cellNumber.toString()).innerHTML = currentPlayer;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
};

// The game should detect a winner or a draw and print the result beneath the grid.

// A win is 3 consecutive symbols in a row, a column, or either diagonal through the center.

// A draw is a filled grid without a winner.
//create array of winning combinations
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// loop through each winning combination. Then, it needs to loop through the 3 cell numbers and check if they're the same
// create a boolean variable that keeps track if each cell is the same in the combination
// start as true, but if it ever is not the same, become false, and go to the next combination
// if it finds any, prevent further play (use a global variable that disables cellchosen) and print winner
// check if every cell is full, and if they are, and there is no winner, then it needs to print out that it's a draw

function checkWin(winner) {
  if (winner === currentPlayer);
  console.log("You win!");
}



// Bonus: The grid should no longer be playable after the game ends, but you could create a button to reset the grid to play a second game. The losing symbol should go first.

// Bonus: The game can be played on smaller screens if it was designed to be responsive.

//remove "X's" and "O's"
//restart game

//const restart = document.querySelector(".restart");
//restart.addEventListener("click", () => {
//});

// Function that removes XO's inside of the cells after clicking the restart button. Previous iteration broke the onClick for the cells.
function resetGame() {
  for(i = 0; i < 9; i++) {
  document.getElementById(i.toString()).innerHTML = "";
 }
}


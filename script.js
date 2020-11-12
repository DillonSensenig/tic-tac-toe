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
}

// The game should detect a winner or a draw and print the result beneath the grid.

// A win is 3 consecutive symbols in a row, a column, or either diagonal through the center.

// A draw is a filled grid without a winner.

// Bonus: The grid should no longer be playable after the game ends, but you could create a button to reset the grid to play a second game. The losing symbol should go first.

// Bonus: The game can be played on smaller screens if it was designed to be responsive.


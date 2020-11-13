
// Added currentPlayer variable. Math.floor avoids decimals. Math.random to alternate from X to O

var currentPlayer = Math.floor(Math.random() * 2) == 0 ? "X" : "O";

// Added cellChosen function that detects click in each cell "cellNumber" uses .innerHTML to insert X / O into empty cell.

function cellChosen(cellNumber) {
  if(document.getElementById(cellNumber.toString()).innerHTML == "") {
    document.getElementById(cellNumber.toString()).innerHTML = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
};

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

// function to check for a winner. Loops through array and cells to see if one matches the other. Returns "result". Boolean to check if said is true/false
function checkWin() {
  for (let i = 0; i < winner.length; i++) {
    var canBeWin = true;
    for (let j = 0; j < winner[i].length; j++) {
      if(document.getElementById(winner[i][j].toString()).innerHTML != currentPlayer) {
        canBeWin = false;
        break;
      }
    }
    if(canBeWin) {
        return (document.getElementById("result"))
        .innerHTML ="Winner!" 
       break;
    }
  }
}


// resetGame function loops through cells to change them back to empty using innerHTML. Also changes result back to "Win or Draw"
function resetGame() {
  for(i = 0; i < 9; i++) {
  document.getElementById(i.toString()).innerHTML = "";
  document.getElementById("result").innerHTML = "Win or Draw";
 }
}

  
// The game should detect a winner or a draw and print the result beneath the grid. <--- Need draw still

// A draw is a filled grid without a winner. <--- Need

// Bonus: The grid should no longer be playable after the game ends, but you could create a button to reset the grid to play a second game. The losing symbol should go first.

// Bonus: The game can be played on smaller screens if it was designed to be responsive.

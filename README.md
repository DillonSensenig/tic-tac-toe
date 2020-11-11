
CSET-115 Week 4
Project: Tic-Tac-Toe

Last week, we learned about different git workflows and realized we'd been following the Centralized workflow but without collaborators. We'll continue with this workflow for this project to see how it's different with other people. So no need to create forks or feature branches. Commit onto the main branch as usual, but this time you'll have to be more careful about pushing and pulling from the remote.

Requirements
Built with HTML and JavaScript, the page should load an empty 3x3 grid roughly the same size as the window of desktop browser.
Players will take turns clicking on empty cells of the grid with their mouse to fill the cell with an X or O symbol, one for each player.
For the first turn, randomize the starting symbol. After that, alternate the player symbol after playing an empty square. The current player should be shown beneath the grid.
The game should detect a winner or a draw and print the result beneath the grid.
A win is 3 consecutive symbols in a row, a column, or either diagonal through the center.
A draw is a filled grid without a winner.
Bonus: The grid should no longer be playable after the game ends, but you could create a button to reset the grid to play a second game. The losing symbol should go first.
Bonus: The game can be played on smaller screens if it was designed to be responsive.

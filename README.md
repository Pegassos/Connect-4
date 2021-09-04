# Connect-4
Connect4 is a classic grid (6 rows &amp; 7 columns) based game where two players take turns to be the first to form a horizontal, vertical, or diagonal line of four of one's own grids.
JavaScirpt only.

Connect 4 is based on a kata from codewars by Adrian Eyre.


# How To
Create a new instance game of Connect4:
```
let game = new Connect4()
```  
Players take turns using the play() method, and after each turn u get a message about the current game state in the console:
```
game.play(2)
```
# Example
```
let game = new Connect4() 

game.play(0)
game.play(0)
game.play(1)
game.play(1)
game.play(2)
game.play(2)
game.play(3)
```

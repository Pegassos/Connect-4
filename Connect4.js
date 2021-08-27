function Connect4 (){
  let grid = []
  for(let i = 0; i < 6; i++)
  	grid.push(Array(7).fill(0))
  
  this.grid = grid
  this.turn = 1
  this.gameFinished = 0
  
  this.checkWin = () => {
    // check 4 successive numbers:
    const check4Consecutive = (arr) => {
      const limit = arr.length - 3
      for(let c = 0; c < limit ; c++) {
        let sum = 0
        for(let i = 0; i < 4; i++) {
          if(arr[c] !== 0 && arr[c] === arr[c+i])
            sum++ 
        }
        if(sum === 4)
          return 1
      }
      return 0
    }    
    
    // get Column
    const arrayColumn = (arr, n) => arr.map(x => x[n]);
    
    // get diagonals of array // returns array of arrays
    const getDiag = (array) => {
      let arr = []
      const row = array.length,
      	    col = array[0].length
      
	    for(let line = 0; line < (row+col-1); line++) {
  		  let x = [],
      		  startCol = Math.max(0, line - row),
      		  count = Math.min(line, Math.min(row, col - startCol))

  		  for(let j = 0; j < count; j++) {
    	    		x.push( array[Math.min(row, line) -j -1][startCol + j] )
  		  }
  		
        if(x.length >= 4)
		arr.push(x)
	 }
      
      return arr
    }
    
    // horizontal
    for(let i = 0 ; i < 6; i++) {
      const win = check4Consecutive(grid[i])
      if(win)
        return win
    }
    // Vertically
    for(let i = 0; i < 7 ; i++) {
      const win = check4Consecutive(arrayColumn(grid,i))
      if(win)
        return win
    }
    // Diagonally
    // for diagonal we need to check it from both sides
    // we check the first one & for the 2nd we just invert grid twice  & check again
    let inverted = []
	  for(let i = 0; i < 7; i++)
  	  	inverted.push(arrayColumn(grid,i))
   	let i2 = []
	  for(let i = 5; i >= 0; i--)
 	    i2.push(arrayColumn(inverted,i))
      
    const diags = getDiag(grid),
          diags2= getDiag(i2)
   
    for(let i = 0; i < diags.length ; i++) {
      const win = check4Consecutive(diags[i])
      if(win) 
        return win
    }
    for(let i = 0; i < diags2.length ; i++) {
      const win = check4Consecutive(diags2[i])
      if(win) 
        return win
    }
    
  return 0
  }
};

Connect4.prototype.play = function (col){
  let i = 5, result
  while(i >= 0) {
    if(this.grid[i][col] === 0) {
      break;
    }
    i--
  }
  if(i === - 1)
    result =  'Column full!'
  else {
    this.grid[i][col] = this.turn
  	result = `Player ${this.turn} has a turn`
  }
  
  // check win & game Finished
  if(this.gameFinished)
    result = 'Game has finished!'
  else if(this.checkWin()) {
    result = `Player ${this.turn} wins!`
    this.gameFinished = 1
  }
  
  // swap players
  this.turn = this.turn === 1 ? 2 : 1
  
  return result
};

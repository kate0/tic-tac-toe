class TicTacToe {
    constructor() {
		this.move = 'x';
		this.board = [[null,null,null],[null,null,null],[null,null,null]]
		this.counter = 0;
    }

    getCurrentPlayerSymbol() {
		return this.move;
    }

    nextTurn(rowIndex, columnIndex) {
		
		if(this.board[rowIndex][columnIndex] == null) {
			this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
			if (this.move == 'x')
				this.move = 'o';
            else 
				this.move = 'x';
			this.counter++;
        } 
		
    }

    isFinished() {
		if(this.getWinner() != null) 
			return true;
        return this.isDraw();
    }

    getWinner() {
		if (this.getFieldValue(0,0) == this.getFieldValue(0,1) && this.getFieldValue(0,1) == this.getFieldValue(0,2)) 
			return this.getFieldValue(0,0);
		if (this.getFieldValue(1,0) == this.getFieldValue(1,1) && this.getFieldValue(1,1) == this.getFieldValue(1,2)) 
			return this.getFieldValue(1,0);
		if (this.getFieldValue(2,0) == this.getFieldValue(2,1) && this.getFieldValue(2,1) == this.getFieldValue(2,2)) 
			return this.getFieldValue(2,0);
		if (this.getFieldValue(0,0) == this.getFieldValue(1,0) && this.getFieldValue(1,0) == this.getFieldValue(2,0)) 
			return this.getFieldValue(0,0);
		if (this.getFieldValue(0,1) == this.getFieldValue(1,1) && this.getFieldValue(1,1) == this.getFieldValue(2,1)) 
			return this.getFieldValue(0,1);
		if (this.getFieldValue(0,2) == this.getFieldValue(1,2) && this.getFieldValue(1,2) == this.getFieldValue(2,2)) 
			return this.getFieldValue(0,2);
		if (this.getFieldValue(0,0) == this.getFieldValue(1,1) && this.getFieldValue(1,1) == this.getFieldValue(2,2)) 
			return this.getFieldValue(0,0);
		if (this.getFieldValue(0,2) == this.getFieldValue(1,1) && this.getFieldValue(1,1) == this.getFieldValue(2,0)) 
			return this.getFieldValue(0,2);
		return null;
    }

    noMoreTurns() {
		if (this.counter == 9) 
			return true;
		return false;
    }

    isDraw() {
		if (this.getWinner() == null && this.noMoreTurns()) 
			return true;
		else 
			return false;
    }

    getFieldValue(rowIndex, colIndex) {
		return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

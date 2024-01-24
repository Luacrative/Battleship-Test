class Player { 
    constructor(onTurnStart, onTurnEnd) { 
        this.onTurnStart = onTurnStart;
        this.onTurnEnd = onTurnEnd; 
        this.board = undefined;
    }

    setBoard(board) {
        this.board = board; 
    }

    startTurn() { 
        if (this.onTurnStart) 
            this.onTurnStart();
    }

    endTurn() { 
        if (this.onTurnEnd) 
            this.onTurnEnd();
    }
}

class Bot extends Player { 
    constructor(onTurnStart, onTurnEnd) { 
        super(Player, onTurnStart, onTurnEnd); 
    }
}

export {Player, Bot};
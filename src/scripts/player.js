import config from "./config.js";

const GRID_SIZE = config.GRID_SIZE;

class Player {
    constructor(board) {
        this.onTurnStart = undefined;
        this.onTurnEnd = undefined;
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

    fireShot(enemyBoard, col, row) {
        const [success, hitShip, sunkShip] = enemyBoard.fireShot(col, row);
        if (!success)
            return;

        this.endTurn();

        return [hitShip, sunkShip];
    }
}

class Bot extends Player {
    constructor(board) {
        super(board);
    }

    placeShips() {
        const ships = [];
        for (const [name, { size }] of Object.entries(config.SHIPS))
            ships.push({ name, size });

        for (const ship of ships) {
            let placed = false;

            while (!placed) {
                const startRow = Math.floor(Math.random() * 9);
                const startCol = Math.floor(Math.random() * 9);

                placed = this.board.placeShip(ship.name, Math.min(startCol, GRID_SIZE - ship.size), +startRow, true)
                    || this.board.placeShip(ship.name, +startCol, Math.min(startRow, GRID_SIZE - ship.size), false);
            }
        }
    }

    fireShot() {
    }
}

export { Player, Bot };
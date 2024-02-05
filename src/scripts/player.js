import config from "./config.js";
import RandomSet from "./randomSet.js";

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
}
class Bot extends Player {
    constructor(board) {
        super(board);
    }

    placeShips() {
        const ships = [];
        for (const [name, { size }] of Object.entries(config.SHIPS))
            ships.push({ name, size });

        const freeCells = new RandomSet();
        for (let row = 0; row < GRID_SIZE; row++)
            for (let col = 0; col < GRID_SIZE; col++)
                freeCells.add(`${row}x${col}`);

        for (const ship of ships) {
            let placed = false;
            while (!placed) {
                const cell = freeCells.random();
                const [startRow, startCol] = cell.split("x");

                placed = this.board.placeShip(ship.name, Math.min(startCol, GRID_SIZE - ship.size), +startRow, true)
                    || this.board.placeShip(ship.name, +startCol, Math.min(startRow, GRID_SIZE - ship.size), false);
            }
        }

        console.log(this.board.getGrid());
    }
}

export { Player, Bot };
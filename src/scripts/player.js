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
        const [success, hit, sunk] = enemyBoard.fireShot(col, row);
        if (!success)
            return;

        this.endTurn();

        return [hit, sunk];
    }
}

class Bot extends Player {
    #lastHit = [];
    #directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    #nextDirection = 0;

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

    fireShot(callback) {
        const tryFire = () => {
            let col, row;

            if (this.#lastHit.length === 0) {
                col = Math.floor(Math.random() * 9);
                row = Math.floor(Math.random() * 9);
            } else {
                col = this.#lastHit[0] + this.#directions[this.#nextDirection][0];
                row = this.#lastHit[1] + this.#directions[this.#nextDirection][1];
            }

            const [success, hit, sunk] = callback(col, row);
            if (!success)
                return false;

            if (sunk) {
                this.#lastHit = [];
                this.#nextDirection = 0;
            } else if (hit)
                this.#lastHit = [col, row];
            else if (this.#lastHit.length > 0)
                this.#nextDirection++;

            return [success, hit, sunk, col, row];
        };

        var status;
        do {
            status = tryFire();
        } while (!status[0]);

        return status.slice(1);
    }
}

export { Player, Bot };
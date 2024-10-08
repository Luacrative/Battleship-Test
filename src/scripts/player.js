import config from "./config.js";

class Player {
    constructor(board, totalShips) {
        this.onTurnStart = undefined;
        this.onTurnEnd = undefined;
        this.board = board;
        this.shipsAlive = totalShips;
    }

    startTurn() {
        if (this.onTurnStart)
            this.onTurnStart();
    }

    endTurn() {
        if (this.onTurnEnd)
            this.onTurnEnd();
    }

    fireShot(enemyBoard, cell) {
        if (!this.alive())
            return;

        const col = +cell.getAttribute("col");
        const row = +cell.getAttribute("row");

        const [success, hit, sunk] = enemyBoard.fireShot(col, row);
        if (success)
            this.endTurn();

        return { onResult: callback => callback(...[success, hit, sunk, col, row]) };
    }

    shipSunk() {
        this.shipsAlive--;
    }

    alive() {
        return this.shipsAlive > 0;
    }
}

class Bot extends Player {
    #lastHit = [];
    #directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    #nextDirection = 0;

    constructor(board, totalShips) {
        super(board, totalShips);
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

                placed = this.board.placeShip(ship.name, Math.min(startCol, config.GRID_SIZE - ship.size), +startRow, true)
                    || this.board.placeShip(ship.name, +startCol, Math.min(startRow, config.GRID_SIZE - ship.size), false);
            }
        }
    }

    fireShot(callback) {
        if (!this.alive())
            return;

        const tryFire = () => {
            let hitLastShot = this.#lastHit.length > 0;
            let col, row;

            if (hitLastShot) {
                col = this.#lastHit[0] + this.#directions[this.#nextDirection][0];
                row = this.#lastHit[1] + this.#directions[this.#nextDirection][1];
            } else {
                col = Math.floor(Math.random() * 9);
                row = Math.floor(Math.random() * 9);
            }

            const [success, hit, sunk] = callback(col, row);

            if (!success) {
                if (hitLastShot) {
                    this.#nextDirection = (this.#nextDirection + 1) % this.#directions.length;

                    if (this.#nextDirection == 0)
                        this.#lastHit = [];
                }

                return false;
            }

            if (sunk) {
                this.#lastHit = [];
                this.#nextDirection = 0;
            } else if (hit)
                this.#lastHit = [col, row];
            else if (hitLastShot)
                this.#nextDirection = (this.#nextDirection + 1) % this.#directions.length;

            return [success, hit, sunk, col, row];
        };

        var status;
        do {
            status = tryFire();
        } while (!status[0]);

        this.endTurn();

        return {
            onResult: (callback, delay) => {
                setTimeout(callback, delay, ...status.slice(1));
            }
        }
    }
}

export { Player, Bot };
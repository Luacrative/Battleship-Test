import config from "./config.js";
import Ship from "./ship.js";

class Grid {
    constructor(size) {
        this.cells = new Array(size).fill(new Array(size, null));
        this.cellsHit = new Array(size).fill(new Array(size, false));
        this.size = size;
    }
}

class Board {
    #grid;
    #ships;

    constructor() {
        this.#grid = new Grid(config.GRID_SIZE);
        this.#ships = [];
    }

    #makeShip(shipName) {
        const shipConfig = config.SHIPS[shipName]

        const ship = new Ship({ shipConfig });
        this.#ships.push(ship);

        return this.#ships.length;
    }

    placeShip(shipName, xStart, yStart) {
        if (xStart < 0 || yStart < 0)
            return false;

        const size = config.SHIPS[shipName].size;
        const xEnd = xStart + size, yEnd = yStart + size;

        if (xEnd > 10 || yEnd > 10)
            return false;

        const shipId = this.#makeShip(shipName);
        for (let y = yStart; y < yEnd; y++)
            for (let x = xStart; x < xEnd; x++)
                this.#grid[y][x] = shipId;

        return true;
    }

    fireShot(x, y) { // -> [success, hitShip, sunkShip]
        if (x < 0 || y < 0 || x > this.#grid.size || y > this.#grid.size)
            throw new Error("Tried to fire out of bounds");

        const cell = this.#grid[y][x];
        if (this.#grid.cellsHit[y][x])
            return [false, false, false];

        const ship = this.#ships(cell);
        if (ship) {
            ship.hit();
            this.#grid.cellsHit[y][x] = true;
        }

        return [true, ship != null, ship.isSunk()];
    }
}

export default Board;
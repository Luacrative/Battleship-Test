import config from "./config.js";
import Ship from "./ship.js";

class Grid {
    constructor(size) {
        this.cells = Array.from({ length: size }, _ => Array().fill(null));
        this.cellsHit = Array.from({ length: size }, _ => Array().fill(false));
        this.size = size;
    }

    setCells(value, xStart, xEnd, yStart, yEnd) {
        for (let y = yStart; y < yEnd; y++)
            for (let x = xStart; x < xEnd; x++)
                if (this.cells[y][x] != null)
                    return false;

        for (let y = yStart; y < yEnd; y++)
            for (let x = xStart; x < xEnd; x++)
                this.cells[y][x] = value;

        return true;
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

        const ship = new Ship(shipConfig);
        this.#ships.push(ship);

        return this.#ships.length - 1;
    }

    placeShip(shipName, xStart, yStart, horizontal) {
        if (xStart < 0 || yStart < 0)
            return false;

        const size = config.SHIPS[shipName].size;
        const xEnd = horizontal ? (xStart + size) : (xStart + 1);
        const yEnd = horizontal ? (yStart + 1) : (yStart + size);

        if (xEnd > 10 || yEnd > 10)
            return false;

        const shipId = this.#makeShip(shipName);
        const placed = this.#grid.setCells(shipId, xStart, xEnd, yStart, yEnd);

        if (!placed)
            this.#ships.pop();

        return placed;
    }

    fireShot(x, y) { // -> [success, hitShip, sunkShip]
        if (x < 0 || y < 0 || x > this.#grid.size || y > this.#grid.size)
            throw new Error("Tried to fire out of bounds");

        const cell = this.#grid.cells[y][x];
        if (this.#grid.cellsHit[y][x])
            return [false, false, false];

        const ship = this.#ships[cell];
        if (ship != null) {
            ship.hit();
            this.#grid.cellsHit[y][x] = true;
        }

        return [true, ship != null, ship?.isSunk()];
    }

    getGrid() {
        return this.#grid;
    }
}

export default Board;
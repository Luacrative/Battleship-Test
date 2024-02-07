import config from "./config.js";
import { Ship } from "./ship.js";

class Grid {
    constructor(size) {
        this.cells = Array.from({ length: size }, _ => Array().fill(null));
        this.firedCells = new Set();
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

    wasFiredAt(x, y) {
        return this.firedCells.has(`${x}#${y}`);
    }

    fire(x, y) {
        this.firedCells.add(`${x}#${y}`);
    }
}

class Board {
    #grid;
    #ships;

    constructor() {
        this.#grid = new Grid(config.GRID_SIZE);
        this.#ships = [];
    }

    #makeShip(name, x, y, horizontal) {
        const shipConfig = config.SHIPS[name]

        const ship = new Ship({ ...shipConfig, name, x, y, horizontal });
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

        const shipId = this.#makeShip(shipName, xStart, yStart, horizontal);
        const placed = this.#grid.setCells(shipId, xStart, xEnd, yStart, yEnd);

        if (!placed)
            this.#ships.pop();

        return placed;
    }

    fireShot(x, y) {
        if (x < 0 || y < 0 || x > this.#grid.size || y > this.#grid.size)
            throw new Error("Tried to fire out of bounds");

        if (this.#grid.wasFiredAt(x, y))
            return [false, false, false];

        this.#grid.fire(x, y);

        const ship = this.getShipAtCell(x, y);
        if (ship != null)
            ship.hit();

        return [true, ship != null, ship?.isSunk()];
    }

    getShipAtCell(x, y) {
        return this.#ships[this.#grid.cells[y][x]];
    }
}

export default Board;
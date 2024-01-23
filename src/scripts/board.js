import config from "./config.js";

class Grid {
    constructor(size) {
        this.cells = new Array(size).fill(new Array(size, null));
    }
}

class Board {
    #grid;

    constructor() {
        this.#grid = new Grid(config.GRID_SIZE);
    }

    placeShip(shipName, xStart, yStart) {
        if (xStart < 0 || yStart < 0)
            return false;

        const size = config.SHIPS[shipName].size;
        const xEnd = xStart + size, yEnd = yStart + size;

        if (xEnd > 10 || yEnd > 10)
            return false;

        return true;
    }
}

export default Board;
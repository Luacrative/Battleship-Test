const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const addCellBorders = (cell, isTop, isBot, isLeft, isRight) => {
    if (isTop)
        cell.classList.add("grid-cell-border-top");
    else if (isBot)
        cell.classList.add("grid-cell-border-bot");

    if (isLeft)
        cell.classList.add("grid-cell-border-left");
    else if (isRight)
        cell.classList.add("grid-cell-border-right");
}

class Grid {
    selectedCells = [];
    grid;
    gridShips;
    #gridCells;

    constructor(size, parent, reverse) {    
        // Column ticks 
        const columnTicks = document.createElement("div");
        columnTicks.classList.add("column-ticks");
        parent.appendChild(columnTicks);

        for (let c = 1; c <= size; c++) {
            const tick = document.createElement("p");
            tick.classList.add("column-tick");
            tick.textContent = c;
            columnTicks.appendChild(tick);
        }

        const gridCenter = document.createElement("div");
        gridCenter.classList.add(`grid-center${reverse ? "-reverse" : ""}`);
        parent.appendChild(gridCenter);

        // Row ticks 
        const rowTicks = document.createElement("div");
        rowTicks.classList.add("row-ticks");
        gridCenter.appendChild(rowTicks);

        for (let r = 1; r <= size; r++) {
            const tick = document.createElement("p");
            tick.classList.add("row-tick");
            tick.textContent = (r <= 26) ? alphabet[r - 1] : r + 26;
            rowTicks.appendChild(tick);
        }

        // Main grid 
        this.grid = document.createElement("div");
        this.grid.classList.add("grid");

        // Make ship layer 
        this.gridShips = document.createElement("div");
        this.gridShips.classList.add("grid-ships");
        this.grid.appendChild(this.gridShips);

        // Make cells 
        this.#gridCells = Array.from({ length: size }, _ => Array().fill(null));

        for (let r = 0; r < size; r++)
            for (let c = 0; c < size; c++) {
                const cell = document.createElement("div");
                cell.classList.add("grid-cell");
                cell.setAttribute("row", r);
                cell.setAttribute("col", c);
                addCellBorders(cell, r == 0, r == size - 1, c == 0, c == size - 1);

                this.grid.appendChild(cell);
                this.#gridCells[r][c] = cell;
            }

        gridCenter.appendChild(this.grid);
    }

    deselectCells() {
        this.selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
        this.selectedCells.length = 0;
    }

    selectCells(startCol, startRow, size, horizontal) {
        if (horizontal)
            for (let col = startCol; col < startCol + size; col++) {
                const adjCell = this.#gridCells[startRow][col];
                adjCell.classList.add("cell-selected");
                this.selectedCells.push(adjCell);
            }
        else
            for (let row = startRow; row < startRow + size; row++) {
                const adjCell = this.#gridCells[row][startCol];
                adjCell.classList.add("cell-selected");
                this.selectedCells.push(adjCell);
            }
    }

    addShip(shipOption, col, row, horizontal) {
        const ship = shipOption.image.cloneNode(true);
        ship.classList.add("placed-ship");

        if (horizontal) {
            ship.style.width = `${(50 * shipOption.size) - 5}px`;
            ship.style.left = `${(50 * col) + 2}px`;
            ship.style.top = `${(50 * row) + 3}px`;
        } else {
            ship.style.width = "45px";
            ship.style.height = `${(50 * shipOption.size) - 5}px`;
            ship.style.left = `${(50 * col) + 2}px`;
            ship.style.top = `${(50 * row) + 3}px`;
        }

        this.gridShips.appendChild(ship);

        return ship;
    }

    setShips(ships) { 
        ships.forEach(ship => { 
            this.addShip(ship.shipOption, ship.startCol, ship.startRow, ship.horizontal);
        });
    }
}

export default Grid;
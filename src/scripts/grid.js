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

        for (let col = 1; col <= size; col++) {
            const tick = document.createElement("p");
            tick.classList.add("column-tick");
            tick.textContent = col;
            columnTicks.appendChild(tick);
        }

        const gridCenter = document.createElement("div");
        gridCenter.classList.add(`grid-center${reverse ? "-reverse" : ""}`);
        parent.appendChild(gridCenter);

        // Row ticks 
        const rowTicks = document.createElement("div");
        rowTicks.classList.add("row-ticks");
        gridCenter.appendChild(rowTicks);

        for (let row = 1; row <= size; row++) {
            const tick = document.createElement("p");
            tick.classList.add("row-tick");
            tick.textContent = (row <= 26) ? alphabet[row - 1] : row + 26;
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

        for (let row = 0; row < size; row++)
            for (let col = 0; col < size; col++) {
                const cell = document.createElement("div");
                cell.classList.add("grid-cell");
                cell.setAttribute("row", row);
                cell.setAttribute("col", col);
                addCellBorders(cell, row === 0, row === size - 1, col === 0, col === size - 1);

                this.grid.appendChild(cell);
                this.#gridCells[row][col] = cell;
            }

        gridCenter.appendChild(this.grid);
    }

    nameCells(name) {
        this.#gridCells.forEach(row => {
            row.forEach(cell => {
                cell.classList.add(name);
            });
        });
    }

    deselectCells() {
        this.selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
        this.selectedCells.length = 0;
    }

    selectCell(col, row) {
        const cell = this.#gridCells[row][col];
        cell.classList.add("cell-selected");
        this.selectedCells.push(cell);
    }

    selectCells(startCol, startRow, size, horizontal) {
        if (horizontal)
            for (let col = startCol; col < startCol + size; col++)
                this.selectCell(col, startRow);
        else
            for (let row = startRow; row < startRow + size; row++)
                this.selectCell(startCol, row);
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

    setCellHit(cell) {
        const hitCell = document.createElement("div");
        hitCell.classList.add("hit-cell");
        cell.appendChild(hitCell);
    }

    setCellMissed(cell) { 
        const missCell = document.createElement("div");
        missCell.classList.add("miss-cell");
        cell.appendChild(missCell); 
    }
}

export default Grid;
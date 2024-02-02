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

const makeGrid = (size, parent, reverse) => {    
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
    const grid = document.createElement("div");
    grid.classList.add("grid");
    
    // Make ship layer 
    const gridShips = document.createElement("div");
    gridShips.classList.add("grid-ships");
    grid.appendChild(gridShips);

    // Make cells 
    const gridCells = Array.from({ length: size }, _ => Array().fill(null));

    for (let r = 0; r < size; r++)
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.setAttribute("row", r);
            cell.setAttribute("col", c);
            addCellBorders(cell, r == 0, r == size - 1, c == 0, c == size - 1);

            grid.appendChild(cell);
            gridCells[r][c] = cell;
        }

    gridCenter.appendChild(grid);
 
    return [gridCells, gridShips];
}

export default makeGrid;
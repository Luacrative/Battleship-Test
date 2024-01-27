import config from "../scripts/config.js";

const setup = document.querySelector("#setup");

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

const makeGrid = () => {
    const size = config.GRID_SIZE;

    // Column ticks 
    const columnTicks = document.createElement("div");
    columnTicks.classList.add("column-ticks");
    setup.appendChild(columnTicks);

    for (let c = 1; c <= size; c++) {
        const tick = document.createElement("p");
        tick.classList.add("column-tick");
        tick.textContent = c;
        columnTicks.appendChild(tick);
    }

    const gridCenter = document.createElement("div");
    gridCenter.classList.add("grid-center");
    setup.appendChild(gridCenter);

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
    const setupGrid = document.createElement("div");
    setupGrid.classList.add("grid");
    setupGrid.setAttribute("id", "setup-grid");

    // Make cells 
    for (let r = 0; r < size; r++)
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.setAttribute("row", r);
            cell.setAttribute("col", c);
            addCellBorders(cell, r == 0, r == size - 1, c == 0, c == size - 1);

            setupGrid.appendChild(cell);
        }

    gridCenter.appendChild(setupGrid);
}

const start = () => {
    makeGrid();
};

const end = () => {

};

export default { start, end };
import config from "../scripts/config.js";
import Draggable from "../scripts/draggable.js";

const setup = document.querySelector("#setup");

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
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

const makeShipOptions = () => {
    const shipOptions = document.createElement("div");
    shipOptions.setAttribute("id", "ship-options");

    const ships = [];

    for (const [ship, { size }] of Object.entries(config.SHIPS)) {
        const image = document.createElement("div");
        image.classList.add("ship-image");

        for (let i = 0; i < size; i++) {
            const segment = document.createElement("div");
            segment.classList.add("ship-segment");
            image.appendChild(segment);
        }

        shipOptions.appendChild(image);
        ships.push(image);
    }

    setup.appendChild(shipOptions);

    return ships;
}

const start = () => {
    makeGrid();

    const shipOptions = makeShipOptions();
    shipOptions.forEach(shipOption => {
        const dragController = new Draggable(shipOption);
        dragController.connect();
    });
};

const end = () => {

};

export default { start, end };
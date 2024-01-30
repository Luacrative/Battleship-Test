import config from "../scripts/config.js";
import mouse from "../scripts/mouse.js";
import Board from "../scripts/board.js";
import Draggable from "../scripts/draggable.js";

const setup = document.querySelector("#setup");
const GRID_SIZE = config.GRID_SIZE;

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
    // Column ticks 
    const columnTicks = document.createElement("div");
    columnTicks.classList.add("column-ticks");
    setup.appendChild(columnTicks);

    for (let c = 1; c <= GRID_SIZE; c++) {
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

    for (let r = 1; r <= GRID_SIZE; r++) {
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
    const gridCells = Array.from({ length: GRID_SIZE }, _ => Array().fill(null));

    for (let r = 0; r < GRID_SIZE; r++)
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.setAttribute("row", r);
            cell.setAttribute("col", c);
            addCellBorders(cell, r == 0, r == GRID_SIZE - 1, c == 0, c == GRID_SIZE - 1);

            setupGrid.appendChild(cell);
            gridCells[r][c] = cell;
        }

    gridCenter.appendChild(setupGrid);

    return gridCells;
}

const makeShipOptions = () => {
    const rotateContainer = document.createElement("button");
    rotateContainer.setAttribute("id", "rotate-ship-container");

    const rotateButton = document.createElement("img");
    rotateButton.setAttribute("src", "../assets/rotate-icon.png");
    rotateButton.setAttribute("id", "rotate-ship-button");
    rotateContainer.appendChild(rotateButton);

    const rotateText = document.createElement("h2");
    rotateText.textContent = "Rotate ( - )";
    rotateText.setAttribute("id", "rotate-ship-text");
    rotateContainer.appendChild(rotateText);

    setup.appendChild(rotateContainer);

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
        ships.push({ image, size });
    }

    setup.appendChild(shipOptions);

    return [rotateButton, ships];
}

const start = () => {
    const gridCells = makeGrid();

    const board = new Board();
    const [rotateButton, ships] = makeShipOptions();

    const selectedCells = [];

    ships.forEach(shipOption => {
        const { size } = shipOption;

        const dragController = new Draggable(shipOption.image);
        dragController.connect();
        dragController.setUpdateCallback(clone => {
            clone.hidden = true;

            const cell = mouse.target;
            if (cell.classList.contains("grid-cell")) {
                let row = +cell.getAttribute("row");
                let col = +cell.getAttribute("col");

                if ((col + size) > GRID_SIZE)
                    col = GRID_SIZE - size;

                selectedCells.map(lastCell => {
                    lastCell.classList.remove("cell-selected");
                });

                for (let c = col; c < col + size; c++) {
                    const adjCell = gridCells[row][c];
                    adjCell.classList.add("cell-selected");
                    selectedCells.push(adjCell);
                }
            }

            clone.hidden = false;
        });
    });
};

const end = () => {

};

export default { start, end };
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

    // Make ship layer 
    const gridShips = document.createElement("div");
    gridShips.classList.add("grid-ships");
    setupGrid.appendChild(gridShips);

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

    return [gridCells, gridShips];
}

const makeShipOptions = () => {
    const rotateButton = document.createElement("button");
    rotateButton.setAttribute("id", "rotate-ship");

    const rotateIcon = document.createElement("img");
    rotateIcon.setAttribute("src", "../assets/rotate-icon.png");
    rotateIcon.setAttribute("id", "rotate-icon");
    rotateButton.appendChild(rotateIcon);

    const rotateText = document.createElement("h2");
    rotateText.textContent = "Rotate (H)";
    rotateText.setAttribute("id", "rotate-text");
    rotateButton.appendChild(rotateText);

    setup.appendChild(rotateButton);

    const shipOptions = document.createElement("div");
    shipOptions.setAttribute("id", "ship-options");

    const ships = [];

    for (const [name, { size }] of Object.entries(config.SHIPS)) {
        const image = document.createElement("div");
        image.classList.add("ship-image");
        image.style.width = `${size * 40}px`;
        shipOptions.appendChild(image);
        ships.push({ image, size, name });
    }

    setup.appendChild(shipOptions);

    return [rotateButton, rotateText, ships];
}

const start = () => {
    const board = new Board();
    const [gridCells, gridShips] = makeGrid();
    const [rotateButton, rotateText, ships] = makeShipOptions();

    const config = {
        horizontal: true
    };

    const selectedCells = [];

    ships.forEach(shipOption => {
        const { size } = shipOption;

        var startRow, startCol;
        var dragController = new Draggable(shipOption.image, config);
        dragController.connect();
        dragController.setUpdateCallback(clone => {
            clone.hidden = true;

            const cell = mouse.target;
            if (cell.classList.contains("grid-cell")) {
                startRow = +cell.getAttribute("row");
                startCol = +cell.getAttribute("col");

                if (config.horizontal && (startCol + size) > GRID_SIZE)
                    startCol = GRID_SIZE - size;
                else if (!config.horizontal && (startRow + size) > GRID_SIZE)
                    startRow = GRID_SIZE - size;

                selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
                selectedCells.length = 0;

                if (config.horizontal)
                    for (let col = startCol; col < startCol + size; col++) {
                        const adjCell = gridCells[startRow][col];
                        adjCell.classList.add("cell-selected");
                        selectedCells.push(adjCell);
                    }
                else
                    for (let row = startRow; row < startRow + size; row++) {
                        const adjCell = gridCells[row][startCol];
                        adjCell.classList.add("cell-selected");
                        selectedCells.push(adjCell);
                    }
            }

            clone.hidden = false;
        });
        dragController.setReleaseCallback(() => {
            selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
            selectedCells.length = 0;

            const placed = board.placeShip(shipOption.name, startCol, startRow, config.horizontal);
            if (!placed) return false;

            dragController.disconnect();
            dragController = {};

            const clone = shipOption.image.cloneNode(true);
            clone.classList.add("placed-ship");
            clone.style.width = `${(50 * shipOption.size) - 5}px`;
            clone.style.left = `${(50 * startCol) + 2}px`;
            clone.style.top = `${(50 * startRow) + 3}px`;
            gridShips.appendChild(clone);

            return true;
        });
    });

    rotateButton.addEventListener("click", () => {
        config.horizontal = !config.horizontal;
        rotateText.textContent = `Rotate (${(config.horizontal) ? "H" : "V"})`;
    })
};

const end = () => {

};

export default { start, end };
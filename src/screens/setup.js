import config from "../scripts/config.js";
import mouse from "../scripts/mouse.js";
import Board from "../scripts/board.js";
import Draggable from "../scripts/draggable.js";
import game from "./game.js";
import makeGrid from "../scripts/grid.js";

const setup = document.querySelector("#setup");
const GRID_SIZE = config.GRID_SIZE;

const makeShipOptions = () => {
    const shipOptions = document.createElement("div");
    shipOptions.setAttribute("id", "ship-options");

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

    setup.appendChild(shipOptions);

    return [shipOptions, rotateButton, rotateText];
}

const makeShipImages = shipOptions => {
    const ships = [];

    for (const [name, { size }] of Object.entries(config.SHIPS)) {
        const image = document.createElement("div");
        image.classList.add("ship-image");
        image.style.width = `${size * 40}px`;
        shipOptions.appendChild(image);
        ships.push({ image, size, name });
    }

    return ships;
}

const selectCells = (startCol, startRow, size, horizontal, gridCells, selectedCells) => {
    selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
    selectedCells.length = 0;

    if (horizontal)
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

const cloneShipAt = (shipOption, col, row, horizontal) => {
    const clone = shipOption.image.cloneNode(true);
    clone.classList.add("placed-ship");

    if (horizontal) {
        clone.style.width = `${(50 * shipOption.size) - 5}px`;
        clone.style.left = `${(50 * col) + 2}px`;
        clone.style.top = `${(50 * row) + 3}px`;
    } else {
        clone.style.width = "45px";
        clone.style.height = `${(50 * shipOption.size) - 5}px`;
        clone.style.left = `${(50 * col) + 2}px`;
        clone.style.top = `${(50 * row) + 3}px`;
    }

    return clone;
}

const start = () => {
    const board = new Board();
    const [gridCells, gridShips] = makeGrid(GRID_SIZE, setup);
    const [shipOptions, rotateButton, rotateText] = makeShipOptions();
    const ships = makeShipImages(shipOptions);

    const config = {
        horizontal: true
    };

    const selectedCells = [];
    const shipsPlaced = [];

    ships.forEach(shipOption => {
        const size = shipOption.size;
        let startRow, startCol, cell;

        let dragController = new Draggable(shipOption.image, config);
        dragController.connect();
        dragController.setUpdateCallback(clone => {
            clone.hidden = true;

            cell = mouse.target;
            if (cell.classList.contains("grid-cell")) {
                startRow = +cell.getAttribute("row");
                startCol = +cell.getAttribute("col");

                if (config.horizontal && (startCol + size) > GRID_SIZE)
                    startCol = GRID_SIZE - size;
                else if (!config.horizontal && (startRow + size) > GRID_SIZE)
                    startRow = GRID_SIZE - size;

                selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
                selectedCells.length = 0;

                selectCells(startCol, startRow, size, config.horizontal, gridCells, selectedCells);
            }

            clone.hidden = false;
        });
        
        dragController.setReleaseCallback(() => {
            selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
            selectedCells.length = 0;

            if (!cell.classList.contains("grid-cell"))
                return false;

            const placed = board.placeShip(shipOption.name, startCol, startRow, config.horizontal);
            if (!placed) return false;

            dragController.disconnect();
            dragController = {};

            const clone = cloneShipAt(shipOption, startCol, startRow, config.horizontal);
            gridShips.appendChild(clone);
            
            shipsPlaced.push({...shipOption, startCol, startRow}); 
            if (shipsPlaced.length == ships.length)
                startGame(shipsPlaced); 
            
            return true;
        });
    });

    rotateButton.addEventListener("click", () => {
        config.horizontal = !config.horizontal;
        rotateText.textContent = `Rotate (${(config.horizontal) ? "H" : "V"})`;
    })

    setup.classList.remove("hidden");
};

const startGame = shipsPlaced => {
    setup.querySelectorAll("*").forEach(child => child.remove());

    game(shipsPlaced);
};

export default start
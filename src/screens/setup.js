import config from "../scripts/config.js";
import mouse from "../scripts/mouse.js";
import Board from "../scripts/board.js";
import Draggable from "../scripts/draggable.js";
import Grid from "../scripts/grid.js";
import game from "./game.js";

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

const start = () => {
    const board = new Board();
    const grid = new Grid(GRID_SIZE, setup);
    const [shipOptions, rotateButton, rotateText] = makeShipOptions();
    const ships = makeShipImages(shipOptions);

    const config = {
        horizontal: true
    };

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

                grid.deselectCells();
                grid.selectCells(startCol, startRow, size, config.horizontal);
            }

            clone.hidden = false;
        });

        dragController.setReleaseCallback(() => {
            grid.deselectCells();

            if (!cell.classList.contains("grid-cell"))
                return false;

            const placed = board.placeShip(shipOption.name, startCol, startRow, config.horizontal);
            if (!placed) return false;

            dragController.disconnect();
            dragController = {};

            grid.addShip(shipOption, startCol, startRow, config.horizontal);

            shipsPlaced.push({ ...shipOption, startCol, startRow });
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
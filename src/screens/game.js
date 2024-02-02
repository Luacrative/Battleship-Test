import config from "../scripts/config.js";
import makeGrid from "../scripts/grid.js";

const game = document.querySelector("#game");
const GRID_SIZE = config.GRID_SIZE;

const makeHeader = (text, color, parent) => { 
    const header = document.createElement("h2");
    header.textContent = text;
    header.classList.add("grid-header");
    header.classList.add(color);
    parent.appendChild(header);
    return header;
}

const start = () => {
    const gridsContainer = document.createElement("div");
    gridsContainer.classList.add("grids"); 
    game.appendChild(gridsContainer);

    const grid1Container = document.createElement("div"); 
    const header1 = makeHeader("You", "blue", grid1Container);
    header1.classList.add("turn-selected");
    gridsContainer.appendChild(grid1Container);
    
    const grid2Container = document.createElement("div");
    const header2 = makeHeader("Enemy", "red", grid2Container);
    gridsContainer.appendChild(grid2Container);

    var [gridCells1, gridShips1] = makeGrid(GRID_SIZE, grid1Container);
    var [gridCells2, gridShips2] = makeGrid(GRID_SIZE, grid2Container, true);

    game.classList.remove("hidden");
};

export default start;
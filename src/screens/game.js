import config from "../scripts/config.js";
import makeGrid from "../scripts/grid.js";

const GRID_SIZE = config.GRID_SIZE;
const DIALOGUES = {
    start: () => "Take the first shot when you're ready! We got this"
}

const game = document.querySelector("#game");

const makeHeader = (text, color, parent) => {
    const header = document.createElement("h2");
    header.textContent = text;
    header.classList.add("grid-header");
    header.classList.add(color);
    parent.appendChild(header);

    return header;
}

const makeDialogue = parent => {
    const dialogue = document.createElement("div");
    dialogue.classList.add("dialogue-container");
    parent.appendChild(dialogue);

    const header = document.createElement("h2");
    header.classList.add("dialogue-header");
    dialogue.appendChild(header);

    const msg = document.createElement("p");
    msg.classList.add("dialogue-msg");
    dialogue.appendChild(msg);

    const setText = (title, text, speed) => {
        header.textContent = title;
        msg.textContent = ""; 

        const write = i => { 
            if (i >= text.length)
                return; 
            
            msg.textContent += text[i]; 

            setTimeout(write, speed / text.length, i + 1);
        }

        write(0); 

        msg.textContent = text;
    }

    return { dialogue, setText };
}

const start = () => {
    const gridsContainer = document.createElement("div");
    gridsContainer.classList.add("grids");
    game.appendChild(gridsContainer);

    const grid1Container = document.createElement("div");
    makeHeader("You", "blue", grid1Container).classList.add("turn-selected");
    gridsContainer.appendChild(grid1Container);

    const grid2Container = document.createElement("div");
    grid2Container.classList.add("reverse");
    makeHeader("Enemy", "red", grid2Container);
    gridsContainer.appendChild(grid2Container);

    var [gridCells1, gridShips1] = makeGrid(GRID_SIZE, grid1Container);
    var [gridCells2, gridShips2] = makeGrid(GRID_SIZE, grid2Container, true);

    const dialogue = makeDialogue(game);
    dialogue.setText("General", DIALOGUES.start(), 0.1);

    game.classList.remove("hidden");
};

export default start;
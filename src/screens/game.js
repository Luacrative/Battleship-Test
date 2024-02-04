import config from "../scripts/config.js";
import Grid from "../scripts/grid.js";
import mouse from "../scripts/mouse.js";

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
            if (i > text.length)
                return; 
            
            msg.textContent = text.substr(0, i);
            setTimeout(write, speed / text.length, i + 1);
        }

        write(0); 

        msg.textContent = text;
    }

    return { dialogue, setText };
}

const start = shipsPlaced => {
    // Make grid container
    const gridsContainer = document.createElement("div");
    gridsContainer.classList.add("grids");
    game.appendChild(gridsContainer);

    const grid1Container = document.createElement("div");
    gridsContainer.appendChild(grid1Container);
    
    const grid2Container = document.createElement("div");
    grid2Container.classList.add("reverse");
    gridsContainer.appendChild(grid2Container);
    
    makeHeader("You", "blue", grid1Container).classList.add("turn-selected");
    makeHeader("Enemy", "red", grid2Container);
    
    // Make grids
    const grid1 = new Grid(GRID_SIZE, grid1Container);
    grid1.setShips(shipsPlaced);

    const grid2 = new Grid(GRID_SIZE, grid2Container, true);
    grid2.nameCells("enemy-cell");

    // Set dialogue
    const dialogue = makeDialogue(game);
    dialogue.setText("General", DIALOGUES.start(), 0.02);

    // Cell selection
    mouse.setFilter(selected => { 
        if (selected.classList.contains("enemy-cell"))
            return true; 
        
        grid2.deselectCells();

        return false;
    });

    mouse.onHit = selected => { 
        grid2.deselectCells();
        grid2.selectCell(selected.getAttribute("col"), selected.getAttribute("row"));
    }

    game.classList.remove("hidden");    
};

export default start;
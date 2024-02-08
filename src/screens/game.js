import config from "../scripts/config.js";
import Grid from "../scripts/grid.js";
import { Player, Bot } from "../scripts/player.js";
import { ShipData } from "../scripts/ship.js";
import Board from "../scripts/board.js";
import mouse from "../scripts/mouse.js";

const MAX_ATTACK_TIME = 1000;
const MIN_ATTACK_TIME = 500;
const GRID_SIZE = config.GRID_SIZE;
const DIALOGUES = {
    start: "Take the first shot when you're ready! We got this",

    hit: "Nice one! Let's hit them like that again.",
    sunk: "We sunk their battleship!",
    miss: "That one missed. Keep trying.",

    wasHit: "They just hit us!",
    wasSunk: "We lost a ship!",
    wasMissed: "Looks like they tried to hit us."
};

const game = document.querySelector("#game");

const makeHeader = (text, color, parent) => {
    const header = document.createElement("h2");
    header.textContent = text;
    header.classList.add("grid-header");
    header.classList.add(color);
    parent.appendChild(header);

    var toggled = false;
    const toggle = () => {
        if (!toggled)
            header.classList.add("turn-selected");
        else
            header.classList.remove("turn-selected");

        toggled = !toggled;
    };

    return { header, toggle };
};

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
};

const makeUI = shipsPlaced => {
    // Make grid container
    const gridsContainer = document.createElement("div");
    gridsContainer.classList.add("grids");
    game.appendChild(gridsContainer);

    const grid1Container = document.createElement("div");
    gridsContainer.appendChild(grid1Container);

    const grid2Container = document.createElement("div");
    grid2Container.classList.add("reverse");
    gridsContainer.appendChild(grid2Container);

    // Make headers
    const header1 = makeHeader("You", "blue", grid1Container)
    const header2 = makeHeader("Enemy", "red", grid2Container);

    // Make grids
    const grid1 = new Grid(GRID_SIZE, grid1Container);
    grid1.setShips(shipsPlaced);

    const grid2 = new Grid(GRID_SIZE, grid2Container, true);
    grid2.nameCells("enemy-cell");

    // Set dialogue
    const dialogue = makeDialogue(game);
    dialogue.setText("General", DIALOGUES.start, 0.02);

    return { grid1, grid2, dialogue, header1, header2 };
};

const start = (board1, shipsPlaced) => {
    const UI = makeUI(shipsPlaced);
    const numShips = Object.keys(config.SHIPS).length;

    // Add players
    const player1 = new Player(board1, numShips);
    player1.onTurnEnd = () => {
        mouse.disconnectClick();
        UI.header1.toggle();

        player2.startTurn();
    };

    player1.startTurn = () => {
        UI.header1.toggle();

        mouse.connectClick(() => {
            const cell = mouse.target;
            if (!mouse.filter(cell)) return;

            player1.fireShot(player2.board, cell).onResult((success, hit, sunk, col, row) => {
                if (!success) return;

                UI.grid2.setCellStatus(cell, hit);
                UI.dialogue.setText("General", (sunk) ? DIALOGUES.sunk : (hit) ? DIALOGUES.hit : DIALOGUES.miss, 0.02);

                if (sunk) {
                    const ship = player2.board.getShipAtCell(col, row);
                    UI.grid2.addShip(ShipData(ship.name, ship.size), ship.pos.x, ship.pos.y, ship.horizontal);

                    player2.shipSunk();

                    if (!player2.alive())
                        console.log("Player1 won!");
                }
            });
        });
    };

    const player2 = new Bot(new Board(), numShips);
    player2.placeShips();
    player2.onTurnStart = () => {
        UI.header2.toggle();

        setTimeout(() => {
            player2.fireShot((col, row) => player1.board.fireShot(col, row)).onResult((hit, sunk, col, row) => {
                const cell = UI.grid1.getCellByColumnRow(col, row);
                UI.grid1.setCellStatus(cell, hit);
                UI.dialogue.setText("General", (sunk) ? DIALOGUES.wasSunk : (hit) ? DIALOGUES.wasHit : DIALOGUES.wasMissed, 0.02);

                if (sunk) {
                    player1.shipSunk();

                    if (!player1.alive()) {
                        console.log("Player2 won!");
                    }
                }
            });
        }, (Math.random() * (MAX_ATTACK_TIME - MIN_ATTACK_TIME)) + MIN_ATTACK_TIME);
    };
    player2.onTurnEnd = () => {
        UI.header2.toggle();
        player1.startTurn();
    };

    // Cell selection
    mouse.setFilter(selected => {
        if (selected.classList.contains("enemy-cell"))
            return !selected.querySelector(".hit-cell");

        UI.grid2.deselectCells();

        return false;
    });

    mouse.onHit = selected => {
        UI.grid2.deselectCells();
        UI.grid2.selectCell(selected.getAttribute("col"), selected.getAttribute("row"));
    }

    // Initiate game 
    game.classList.remove("hidden");
    player1.startTurn();
};

export default start;

import Board from "./src/scripts/board.js";

const tests = {
    "Place carrier on empty board": {
        test: () => {
            const board = new Board();
            return board.placeShip("Carrier", 2, 3, true);
        },

        expected: true
    },

    "Place carrier on top of another": {
        test: () => {
            const board = new Board();
            board.placeShip("Carrier", 2, 3, true);
            return board.placeShip("Carrier", 2, 3, true);
        },

        expected: false
    },

    "Place battleship out of bounds": { 
        test: () => { 
            const board = new Board(); 
            return board.placeShip("Battleship", 8, 7, false);
        },

        expected: false 
    },

    "Fire at battleship and hit": { 
        test: () => { 
            const board = new Board(); 
            board.placeShip("Battleship", 2, 3, true);
            return board.fireShot(3, 3)[1];
        },

        expected: true 
    },

    "Fire at battleship and miss": { 
        test: () => { 
            const board = new Board(); 
            board.placeShip("Battleship", 2, 3, true);
            return board.fireShot(3, 4)[1];
        },

        expected: false
    }
};

for (const [desc, data] of Object.entries((tests))) {
    test(desc, () => {
        expect(data.test()).toBe(data.expected);
    });
}

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
    }
};

for (const [desc, data] of Object.entries((tests))) {
    test(desc, () => {
        expect(data.test()).toBe(data.expected);
    });
}
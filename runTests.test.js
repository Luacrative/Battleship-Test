
import Board from "./src/scripts/board.js";

const tests = {
    "Functional placement logic": {
        test: () => {
            const board = new Board();
            return board.placeShip("Carrier", 2, 3);
        },

        expected: true
    }
};

for (const [desc, data] of Object.entries((tests))) { 
    test(desc, () => {
        expect(data.test()).toBe(data.expected);
    });
}
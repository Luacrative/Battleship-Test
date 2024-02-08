import config from "./config.js";

class Ship {
    #sunk = false;

    constructor({ size, health, x, y, horizontal }) {
        this.size = size;
        this.health = health;
        this.pos = { x, y };
        this.horizontal = horizontal;
    }

    hit() {
        if (this.isSunk())
            return false;

        this.health--;

        if (this.health === 0)
            this.#sunk = true;

        return true;
    }

    isSunk() {
        return this.#sunk;
    }
}

const ShipData = (name, size) => {
    const image = document.createElement("div");
    image.classList.add("ship-image");
    image.style.width = `${size * config.SHIP_CELL_SIZE}px`;

    return { image, size, name };
}

export { Ship, ShipData };
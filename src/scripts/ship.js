class Ship {
    #sunk = false;

constructor({ length, health }) {
        this.length = length;
        this.health = health;
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

export default Ship;
class RandomSet {
    #values = [];
    #idx = {};

    constructor() { }

    add(value) {
        if (this.has(value))
            return;

        this.#idx[value] = this.#values.length;
        this.#values.push(value);
    }

    delete(value) {
        if (!this.has(value))
            return;

        const i = this.#idx[value];
        const values = this.#values;
        const back = values[values.length - 1];

        values[i] = back;
        values[values.length - 1] = value;
        values.pop();

        this.#idx[back] = i;
        delete this.#idx[value];
    }

    has(value) {
        return this.#idx.hasOwnProperty(value);
    }

    random() {
        return this.#values[Math.floor(Math.random() * this.#values.length)];
    }
}

export default RandomSet;
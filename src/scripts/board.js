import config from "./config.js";

class Grid { 
    constructor(size) { 
        this.cells = new Array(size).fill(new Array(size, null));
    }
}

class Board { 
    #grid; 

    constructor() { 
        this.#grid = new Grid(config.GRID_SIZE);
    }    
}
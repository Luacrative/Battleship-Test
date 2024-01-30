const X_OFFSET = 15;
const Y_OFFSET = -25;

class Draggable {
    #c1 = 0;
    #c2 = 0;
    #c3 = 0;
    #c4 = 0;
    #onMouseMove = undefined;
    #onMouseUp = undefined;
    #clone = null;

    constructor(image) {
        this.image = image;
        this.onUpdate = undefined;
        this.onRelease = undefined;
    }

    setUpdateCallback(callback) { 
        this.onUpdate = callback;
    }

    setReleaseCallback(callback) { 
        this.onRelease = callback;
    }

    #dragged(e) {
        const clone = this.image.cloneNode(true);
        clone.classList.add("draggable");
        clone.style.left = `${e.clientX + X_OFFSET}px`; 
        clone.style.top = `${e.clientY + Y_OFFSET}px`; 
        document.body.appendChild(clone);

        this.#c1 = e.clientX - clone.offsetLeft; 
        this.#c2 = e.clientY - clone.offsetTop; 
        this.#clone = clone; 

        this.#onMouseMove = e => {
            e.preventDefault();
            this.#update(e);
        }

        this.#onMouseUp = e => {
            e.preventDefault();
            this.#released(e);

            clone.remove();
            this.#clone = null;
        }

        document.addEventListener("mousemove", this.#onMouseMove);
        document.addEventListener("mouseup", this.#onMouseUp);

        this.image.classList.add("dragging");
    }

    #update(e) {
        this.#c3 = e.clientX - this.#c1; 
        this.#c4 = e.clientY - this.#c2;
        
        this.#clone.style.left = `${this.#c3}px`;
        this.#clone.style.top = `${this.#c4}px`;

        if (this.onUpdate)
            this.onUpdate(this.#clone);
    }

    #released(e) {
        document.removeEventListener("mousemove", this.#onMouseMove);
        document.removeEventListener("mouseup", this.#onMouseUp);

        if (this.onRelease)  
            this.onRelease(e.clientX, e.clientY);
        
        this.image.classList.remove("dragging");
    }

    connect() {
        this.image.addEventListener("mousedown", e => {
            e.preventDefault();
            this.#dragged(e)
        });
    }
}

export default Draggable; 
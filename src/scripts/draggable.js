class Draggable {
    #c1 = 0;
    #c2 = 0;
    #c3 = 0;
    #c4 = 0;
    #onMouseMove = undefined;
    #onMouseUp = undefined;
    #imageParent = undefined;
    #clone = null;

    constructor(image) {
        this.image = image;
        this.#imageParent = image.parentElement;
    }

    #dragged(e) {
        this.#clone = this.image.cloneNode(true);
        this.#clone.classList.add("draggable");
        this.#imageParent.appendChild(this.#clone);

        this.#c3 = e.clientX;
        this.#c4 = e.clientY;

        this.#onMouseMove = e => {
            e.preventDefault();
            this.#update(e)
        }

        this.#onMouseUp = e => {
            e.preventDefault();
            this.#released();
        }

        document.addEventListener("mousemove", this.#onMouseMove);
        document.addEventListener("mouseup", this.#onMouseUp);
    }

    #update(e) {
        const clone = this.#clone;

        this.#c1 = this.#c3 - e.clientX;
        this.#c2 = this.#c4 - e.clientY;
        this.#c3 = e.clientX;
        this.#c4 = e.clientY;

        clone.style.top = `${clone.offsetTop - this.#c2}px`;
        clone.style.left = `${clone.offsetLeft - this.#c1}px`;
    }

    #released() {
        document.removeEventListener("mousemove", this.#onMouseMove);
        document.removeEventListener("mouseup", this.#onMouseUp);
    }

    connect() {
        this.image.addEventListener("mousedown", e => {
            e.preventDefault();
            this.#dragged(e)
        });
    }
}

export default Draggable; 
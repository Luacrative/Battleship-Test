const X_OFFSET = 15;
const X_OFFSET_VERTICAL = -50;
const Y_OFFSET = -25;
const Y_OFFSET_VERTICAL = 50;

const clamp = (min, val, max) => { 
    return Math.max(Math.min(val, max), min);
};  

class Draggable {
    #c1 = 0;
    #c2 = 0;
    #c3 = 0;
    #c4 = 0;
    #onMouseMove = undefined;
    #onMouseUp = undefined;
    #clone = null;

    constructor(image, config) {
        this.image = image;
        this.onUpdate = undefined;
        this.onRelease = undefined;
        this.config = config;
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

        if (this.config.horizontal) {
            clone.style.left = `${e.clientX + X_OFFSET}px`;
            clone.style.top = `${e.clientY + Y_OFFSET}px`;
        } else {
            clone.style.left = `${e.clientX + X_OFFSET_VERTICAL}px`;
            clone.style.top = `${e.clientY + Y_OFFSET_VERTICAL}px`;
            clone.classList.add("rotate-vertical");
        }

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

        const clone = this.#clone;
        const cloneWidth = clone.clientWidth + 20; 
        const cloneHeight = clone.clientHeight + 50;

        clone.style.left = `${Math.min(this.#c3, document.body.clientWidth - cloneWidth)}px`;
        clone.style.top = `${clamp(0, this.#c4, document.body.clientHeight - cloneHeight)}px`;

        if (this.onUpdate)
            this.onUpdate(clone);
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
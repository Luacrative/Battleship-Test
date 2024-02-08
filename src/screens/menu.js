import setup from "../screens/setup.js";

const menu = document.querySelector("#menu");

const start = () => {
    menu.classList.remove("hidden");

    const startButton = document.querySelector("#start");

    const toSetup = () => {
        startButton.removeEventListener("click", toSetup);
        menu.classList.add("hidden");

        setup();
    };

    startButton.addEventListener("click", toSetup);
};

export default start;
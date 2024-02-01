import setup from "../screens/setup.js";

const menu = document.querySelector("#menu"); 

const start = () => { 
    const startButton = document.querySelector("#start");
    startButton.addEventListener("click", () => { 
        menu.classList.add("hidden");
        setup.start() 
    }); 
};

const end = () => { 

};

export default {start, end};
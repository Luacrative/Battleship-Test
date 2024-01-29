import "./styles/main.css";
import "./styles/setup.css";
import "./styles/game.css";

import setup from "./screens/setup.js";
import mouse from "./scripts/mouse.js"; 

document.addEventListener("mousemove", mouse.update);

setup.start();
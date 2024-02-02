import "./styles/main.css";
import "./styles/setup.css";
import "./styles/game.css";
import menu from "./screens/menu.js";
import mouse from "./scripts/mouse.js";

document.addEventListener("mousemove", mouse.update);

menu(); 
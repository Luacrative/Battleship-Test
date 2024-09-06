/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/game.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/game.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --ship-rounding: 10px;
}

#game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: filter 1s;
}

#game-result {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%) scale(0);
    font-size: 5rem;
    opacity: 0;
    
    animation: game-result 500ms 400ms linear forwards;
}

.blur-out {
    filter: blur(2px);
}

.ship-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 1.5px solid white;
    background-color: black;
    border-radius: var(--ship-rounding);
    height: 40px;
}

.ship-segment:nth-child(1) {
    border-radius: var(--ship-rounding) 0px 0px var(--ship-rounding);
}

.ship-segment:nth-last-child(1) {
    border-radius: 0px var(--ship-rounding) var(--ship-rounding) 0px;
}

.column-ticks {
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.row-ticks {
    display: grid;
    grid-template-rows: repeat(10, 50px);
    margin-top: 25px;
    margin-right: 10px;
}

.column-ticks,
.row-ticks {
    font-weight: 600;
}

.grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-auto-flow: row;
    position: relative;
}

.grid-center {
    margin-left: -30px;
}

.grid-center,
.grid-center-reverse {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.grid-center-reverse {
    margin-left: 30px;
    flex-direction: row-reverse;
}

.grid-cell,
.column-tick {
    width: 50px;
}

.grid-cell {
    display: flex;
    justify-content: center;
    align-items: center;
}

.status-circle {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    border: 3px solid;
    transform: scale(0);
    opacity: 1;

    animation: status-circle 50ms 10ms linear forwards;
}

.status-hit {
    border-color: red;
}

.status-miss {
    border-color: white;
}

.column-tick,
.row-tick {
    font-size: 1.25rem;
    margin: 0;
}

.grid-cell {
    height: 50px;
    border: calc(var(--grid-border-thickness) - 0.1px) solid var(--grid-border-color);
    box-sizing: border-box;
}

.grid-cell-border-left {
    border-left: var(--grid-border-thickness) solid var(--grid-border-color);
}

.grid-cell-border-top {
    border-top: var(--grid-border-thickness) solid var(--grid-border-color);
}

.grid-cell-border-bot {
    border-bottom: var(--grid-border-thickness) solid var(--grid-border-color);
}

.grid-cell-border-right {
    border-right: var(--grid-border-thickness) solid var(--grid-border-color);
}

.cell-selected {
    background-color: red;
    opacity: 0.5;
}

.grid-ships {
    position: absolute;
    top: 20;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(24, 182, 194, 0.12);
    z-index: -1;
}

.placed-ship {
    position: absolute;
    z-index: 2;
    opacity: 1;
}

.grids {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.grid-header {
    border-radius: 7px;
    width: 30%;
    padding: 15px 0px;
    text-indent: 10px;
    margin-left: 5px;
}

.blue {
    background-color: rgba(24, 182, 194, 0.75);
    opacity: 0.65;
}

.red {
    background-color: rgba(194, 24, 24, 0.75);
    opacity: 0.65;
}

.turn-selected {
    opacity: 1;
}

.dialogue-container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border: 2px solid white;
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80%;
}

.dialogue-header {
    padding: 0;
    margin: 0;
}

.dialogue-msg {
    margin-bottom: 10px;
}

@keyframes status-circle {
    100% {
        opacity: 1;
        transform: scale(0.8);
    }
}

@keyframes game-result {
    100% {
        opacity: 1;
        transform: translate(-50%, 0%) scale(1);
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/game.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,uCAAuC;IACvC,eAAe;IACf,UAAU;;IAEV,kDAAkD;AACtD;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,uBAAuB;IACvB,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,gEAAgE;AACpE;;AAEA;IACI,gEAAgE;AACpE;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;;IAEV,kDAAkD;AACtD;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,iFAAiF;IACjF,sBAAsB;AAC1B;;AAEA;IACI,wEAAwE;AAC5E;;AAEA;IACI,uEAAuE;AAC3E;;AAEA;IACI,0EAA0E;AAC9E;;AAEA;IACI,yEAAyE;AAC7E;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;AACd;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,0CAA0C;IAC1C,aAAa;AACjB;;AAEA;IACI,yCAAyC;IACzC,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI;QACI,UAAU;QACV,qBAAqB;IACzB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,uCAAuC;IAC3C;AACJ","sourcesContent":[":root {\r\n    --ship-rounding: 10px;\r\n}\r\n\r\n#game {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    transition: filter 1s;\r\n}\r\n\r\n#game-result {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%) scale(0);\r\n    font-size: 5rem;\r\n    opacity: 0;\r\n    \r\n    animation: game-result 500ms 400ms linear forwards;\r\n}\r\n\r\n.blur-out {\r\n    filter: blur(2px);\r\n}\r\n\r\n.ship-image {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 1.5px solid white;\r\n    background-color: black;\r\n    border-radius: var(--ship-rounding);\r\n    height: 40px;\r\n}\r\n\r\n.ship-segment:nth-child(1) {\r\n    border-radius: var(--ship-rounding) 0px 0px var(--ship-rounding);\r\n}\r\n\r\n.ship-segment:nth-last-child(1) {\r\n    border-radius: 0px var(--ship-rounding) var(--ship-rounding) 0px;\r\n}\r\n\r\n.column-ticks {\r\n    display: flex;\r\n    margin-bottom: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.row-ticks {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 50px);\r\n    margin-top: 25px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.column-ticks,\r\n.row-ticks {\r\n    font-weight: 600;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-auto-flow: row;\r\n    position: relative;\r\n}\r\n\r\n.grid-center {\r\n    margin-left: -30px;\r\n}\r\n\r\n.grid-center,\r\n.grid-center-reverse {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.grid-center-reverse {\r\n    margin-left: 30px;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.grid-cell,\r\n.column-tick {\r\n    width: 50px;\r\n}\r\n\r\n.grid-cell {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.status-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50px;\r\n    border: 3px solid;\r\n    transform: scale(0);\r\n    opacity: 1;\r\n\r\n    animation: status-circle 50ms 10ms linear forwards;\r\n}\r\n\r\n.status-hit {\r\n    border-color: red;\r\n}\r\n\r\n.status-miss {\r\n    border-color: white;\r\n}\r\n\r\n.column-tick,\r\n.row-tick {\r\n    font-size: 1.25rem;\r\n    margin: 0;\r\n}\r\n\r\n.grid-cell {\r\n    height: 50px;\r\n    border: calc(var(--grid-border-thickness) - 0.1px) solid var(--grid-border-color);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.grid-cell-border-left {\r\n    border-left: var(--grid-border-thickness) solid var(--grid-border-color);\r\n}\r\n\r\n.grid-cell-border-top {\r\n    border-top: var(--grid-border-thickness) solid var(--grid-border-color);\r\n}\r\n\r\n.grid-cell-border-bot {\r\n    border-bottom: var(--grid-border-thickness) solid var(--grid-border-color);\r\n}\r\n\r\n.grid-cell-border-right {\r\n    border-right: var(--grid-border-thickness) solid var(--grid-border-color);\r\n}\r\n\r\n.cell-selected {\r\n    background-color: red;\r\n    opacity: 0.5;\r\n}\r\n\r\n.grid-ships {\r\n    position: absolute;\r\n    top: 20;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(24, 182, 194, 0.12);\r\n    z-index: -1;\r\n}\r\n\r\n.placed-ship {\r\n    position: absolute;\r\n    z-index: 2;\r\n    opacity: 1;\r\n}\r\n\r\n.grids {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.grid-header {\r\n    border-radius: 7px;\r\n    width: 30%;\r\n    padding: 15px 0px;\r\n    text-indent: 10px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.blue {\r\n    background-color: rgba(24, 182, 194, 0.75);\r\n    opacity: 0.65;\r\n}\r\n\r\n.red {\r\n    background-color: rgba(194, 24, 24, 0.75);\r\n    opacity: 0.65;\r\n}\r\n\r\n.turn-selected {\r\n    opacity: 1;\r\n}\r\n\r\n.dialogue-container {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    border-radius: 10px;\r\n    border: 2px solid white;\r\n    padding: 15px 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    width: 80%;\r\n}\r\n\r\n.dialogue-header {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.dialogue-msg {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes status-circle {\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(0.8);\r\n    }\r\n}\r\n\r\n@keyframes game-result {\r\n    100% {\r\n        opacity: 1;\r\n        transform: translate(-50%, 0%) scale(1);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/wallpaper.jpg */ "./assets/wallpaper.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    text-transform: uppercase;
}

:root {
    --grid-border-color: white;
    --grid-border-thickness: 2px;
}

body {
    background-color: black;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
}

#container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
    width: 100vw;
}

.hidden, #menu.hidden { 
    display: none;
}

.bg-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    opacity: 0.6;
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;

    transition: filter 0.2s;
}

.big-text {
    font-size: 5em;
}

.text-shadow {
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.7);
}

button {
    font-size: 2rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 60px;
    border-radius: 5px;
    outline: none;
    border: 2px solid white;

    transition: transform 0.2s, border-radius 0.1s;
}

button:hover {
    cursor: pointer;
    transform: scale(1.05);
    border-radius: 2px;
}

#start:hover~#bg-img {
    filter: blur(2px);
    opacity: 0.5;
}

.draggable { 
    position: absolute;
}

.dragging { 
    opacity: 0.5;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,4DAA4D;IAC5D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;;IAEtB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,YAAY;IACZ,aAAa;IACb,mDAA6C;IAC7C,YAAY;IACZ,uBAAuB;IACvB,4BAA4B;IAC5B,sBAAsB;IACtB,WAAW;;IAEX,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;;IAEvB,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["* {\r\n    text-transform: uppercase;\r\n}\r\n\r\n:root {\r\n    --grid-border-color: white;\r\n    --grid-border-thickness: 2px;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    color: white;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n#menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n.hidden, #menu.hidden { \r\n    display: none;\r\n}\r\n\r\n.bg-img {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: url(\"../../assets/wallpaper.jpg\");\r\n    opacity: 0.6;\r\n    background-color: black;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    z-index: -1;\r\n\r\n    transition: filter 0.2s;\r\n}\r\n\r\n.big-text {\r\n    font-size: 5em;\r\n}\r\n\r\n.text-shadow {\r\n    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.7);\r\n}\r\n\r\nbutton {\r\n    font-size: 2rem;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    padding: 10px 60px;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: 2px solid white;\r\n\r\n    transition: transform 0.2s, border-radius 0.1s;\r\n}\r\n\r\nbutton:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.05);\r\n    border-radius: 2px;\r\n}\r\n\r\n#start:hover~#bg-img {\r\n    filter: blur(2px);\r\n    opacity: 0.5;\r\n}\r\n\r\n.draggable { \r\n    position: absolute;\r\n}\r\n\r\n.dragging { \r\n    opacity: 0.5;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/setup.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/setup.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#setup {
    text-align: center;
}

#ship-options {
    width: 50%;
    margin-top: 20px;
    display: flex;
    gap: 2em;
    justify-content: center;
    position: relative;
    transform: translate(50%, 0%);
    left: 0%;
    flex-wrap: wrap;
}

#rotate-ship { 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    padding: 0 5px;

    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
}

#rotate-text { 
    padding-right: 5px;
}

#rotate-icon { 
    width: 30%;
}

.rotate-vertical { 
    transform: rotate(90deg);
}`, "",{"version":3,"sources":["webpack://./src/styles/setup.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,kBAAkB;IAClB,6BAA6B;IAC7B,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;;IAEd,kBAAkB;IAClB,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["#setup {\r\n    text-align: center;\r\n}\r\n\r\n#ship-options {\r\n    width: 50%;\r\n    margin-top: 20px;\r\n    display: flex;\r\n    gap: 2em;\r\n    justify-content: center;\r\n    position: relative;\r\n    transform: translate(50%, 0%);\r\n    left: 0%;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#rotate-ship { \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.8em;\r\n    padding: 0 5px;\r\n\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n}\r\n\r\n#rotate-text { \r\n    padding-right: 5px;\r\n}\r\n\r\n#rotate-icon { \r\n    width: 30%;\r\n}\r\n\r\n.rotate-vertical { \r\n    transform: rotate(90deg);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/game.css":
/*!*****************************!*\
  !*** ./src/styles/game.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/setup.css":
/*!******************************!*\
  !*** ./src/styles/setup.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./setup.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/setup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/screens/game.js":
/*!*****************************!*\
  !*** ./src/screens/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/config.js */ "./src/scripts/config.js");
/* harmony import */ var _scripts_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/grid.js */ "./src/scripts/grid.js");
/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/player.js */ "./src/scripts/player.js");
/* harmony import */ var _scripts_ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _scripts_board_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/board.js */ "./src/scripts/board.js");
/* harmony import */ var _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/mouse.js */ "./src/scripts/mouse.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.js */ "./src/screens/menu.js");








const DIALOGUES = {
    start: "Take the first shot when you're ready! We got this",

    hit: "Nice one! Let's hit them like that again.",
    sunk: "We sunk their battleship!",
    miss: "That one missed. Keep trying.",

    wasHit: "They just hit us!",
    wasSunk: "We lost a ship!",
    wasMissed: "Looks like they tried to hit us."
};

const container = document.querySelector("#container");
const game = document.querySelector("#game");

const makeHeader = (text, color, parent) => {
    const header = document.createElement("h2");
    header.textContent = text;
    header.classList.add("grid-header");
    header.classList.add(color);
    parent.appendChild(header);

    var toggled = false;
    const toggle = () => {
        if (!toggled)
            header.classList.add("turn-selected");
        else
            header.classList.remove("turn-selected");

        toggled = !toggled;
    };

    return { header, toggle };
};

const makeDialogue = parent => {
    const dialogue = document.createElement("div");
    dialogue.classList.add("dialogue-container");
    parent.appendChild(dialogue);

    const header = document.createElement("h2");
    header.classList.add("dialogue-header");
    dialogue.appendChild(header);

    const msg = document.createElement("p");
    msg.classList.add("dialogue-msg");
    dialogue.appendChild(msg);

    const setText = (title, text, speed) => {
        header.textContent = title;
        msg.textContent = "";

        const write = i => {
            if (i > text.length)
                return;

            msg.textContent = text.substr(0, i);
            setTimeout(write, speed / text.length, i + 1);
        }

        write(0);

        msg.textContent = text;
    }

    return { dialogue, setText };
};

const makeUI = shipsPlaced => {
    // Make grid container
    const gridsContainer = document.createElement("div");
    gridsContainer.classList.add("grids");
    game.appendChild(gridsContainer);

    const grid1Container = document.createElement("div");
    gridsContainer.appendChild(grid1Container);

    const grid2Container = document.createElement("div");
    grid2Container.classList.add("reverse");
    gridsContainer.appendChild(grid2Container);

    // Make headers
    const header1 = makeHeader("You", "blue", grid1Container)
    const header2 = makeHeader("Enemy", "red", grid2Container);

    // Make grids
    const grid1 = new _scripts_grid_js__WEBPACK_IMPORTED_MODULE_1__["default"](_scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE, grid1Container);
    grid1.setShips(shipsPlaced);

    const grid2 = new _scripts_grid_js__WEBPACK_IMPORTED_MODULE_1__["default"](_scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE, grid2Container, true);
    grid2.nameCells("enemy-cell");

    // Set dialogue
    const dialogue = makeDialogue(game);
    dialogue.setText("General", DIALOGUES.start, 0.02);

    return { grid1, grid2, dialogue, header1, header2 };
};

const gameOver = result => {
    game.classList.add("blur-out");

    const gameResult = document.createElement("h1");
    gameResult.textContent = result;
    gameResult.setAttribute("id", "game-result");
    gameResult.classList.add("text-shadow");
    container.appendChild(gameResult);

    // Return to menu
    setTimeout(() => {
        game.classList.remove("blur-out");
        gameResult.remove();
        game.querySelectorAll("*").forEach(child => child.remove());

        (0,_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }, 2000);
};

const start = (board1, shipsPlaced) => {
    var UI = makeUI(shipsPlaced);
    const numShips = Object.keys(_scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHIPS).length;

    // Add players
    var player1 = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_2__.Player(board1, numShips);
    player1.onTurnEnd = () => {
        _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].disconnectClick();
        UI.header1.toggle();

        player2.startTurn();
    };

    player1.startTurn = () => {
        UI.header1.toggle();

        _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].connectClick(() => {
            const cell = _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].target;
            if (!_scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].filter(cell)) return;

            player1.fireShot(player2.board, cell).onResult((success, hit, sunk, col, row) => {
                if (!success) return;

                UI.grid2.setCellStatus(cell, hit);
                UI.dialogue.setText("General", (sunk) ? DIALOGUES.sunk : (hit) ? DIALOGUES.hit : DIALOGUES.miss, 0.02);

                if (sunk) {
                    const ship = player2.board.getShipAtCell(col, row);
                    UI.grid2.addShip((0,_scripts_ship_js__WEBPACK_IMPORTED_MODULE_3__.ShipData)(ship.name, ship.size), ship.pos.x, ship.pos.y, ship.horizontal);

                    player2.shipSunk();

                    if (!player2.alive())
                        endGame(true);
                }
            });
        });
    };

    var player2 = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_2__.Bot(new _scripts_board_js__WEBPACK_IMPORTED_MODULE_4__["default"](), numShips);
    player2.placeShips();
    player2.onTurnStart = () => {
        UI.header2.toggle();

        const delay = (Math.random() * (_scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].BOT_ATTACK_TIME[1] - _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].BOT_ATTACK_TIME[0])) + _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].BOT_ATTACK_TIME[0];
        player2.fireShot((col, row) => player1.board.fireShot(col, row)).onResult((hit, sunk, col, row) => {
            UI.grid1.selectCell(col, row);

            setTimeout(() => {
                const cell = UI.grid1.getCellByColumnRow(col, row);
                UI.grid1.setCellStatus(cell, hit);
                UI.grid1.deselectCells();

                UI.dialogue.setText("General", (sunk) ? DIALOGUES.wasSunk : (hit) ? DIALOGUES.wasHit : DIALOGUES.wasMissed, 0.02);

                if (sunk) {
                    player1.shipSunk();

                    if (!player1.alive())
                        endGame(false);
                }
            }, 250);
        }, delay);
    };
    player2.onTurnEnd = () => {
        UI.header2.toggle();
        player1.startTurn();
    };

    // Cell selection
    _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].setFilter(selected => {
        if (selected.classList.contains("enemy-cell"))
            return !selected.querySelector(".status-circle");

        UI.grid2.deselectCells();

        return false;
    });

    _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].onHit = selected => {
        UI.grid2.deselectCells();
        UI.grid2.selectCell(selected.getAttribute("col"), selected.getAttribute("row"));
    }

    // Initiate game 
    game.classList.remove("hidden");
    player1.startTurn();
    
    const endGame = isWinner => {
        _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].onHit = undefined;
        _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].setFilter(undefined);
        _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_5__["default"].disconnectClick();

        UI.grid1.deselectCells();
        UI.grid2.deselectCells();

        UI = {};
        player1 = {};
        player2 = {};

        gameOver(isWinner ? "Victory" : "Defeat");
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);

/***/ }),

/***/ "./src/screens/menu.js":
/*!*****************************!*\
  !*** ./src/screens/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _screens_setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screens/setup.js */ "./src/screens/setup.js");


const menu = document.querySelector("#menu");

const start = () => {
    menu.classList.remove("hidden");

    const startButton = document.querySelector("#start");

    const toSetup = () => {
        startButton.removeEventListener("click", toSetup);
        menu.classList.add("hidden");

        (0,_screens_setup_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };

    startButton.addEventListener("click", toSetup);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);

/***/ }),

/***/ "./src/screens/setup.js":
/*!******************************!*\
  !*** ./src/screens/setup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/config.js */ "./src/scripts/config.js");
/* harmony import */ var _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/mouse.js */ "./src/scripts/mouse.js");
/* harmony import */ var _scripts_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/board.js */ "./src/scripts/board.js");
/* harmony import */ var _scripts_draggable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/draggable.js */ "./src/scripts/draggable.js");
/* harmony import */ var _scripts_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/grid.js */ "./src/scripts/grid.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.js */ "./src/screens/game.js");
/* harmony import */ var _scripts_ship_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/ship.js */ "./src/scripts/ship.js");








const setup = document.querySelector("#setup");
const GRID_SIZE = _scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE;

const makeShipOptions = () => {
    const shipOptions = document.createElement("div");
    shipOptions.setAttribute("id", "ship-options");

    const rotateButton = document.createElement("button");
    rotateButton.setAttribute("id", "rotate-ship");

    const rotateIcon = document.createElement("img");
    rotateIcon.setAttribute("src", "../assets/rotate-icon.png");
    rotateIcon.setAttribute("id", "rotate-icon");
    rotateButton.appendChild(rotateIcon);

    const rotateText = document.createElement("h2");
    rotateText.textContent = "Rotate (H)";
    rotateText.setAttribute("id", "rotate-text");
    rotateButton.appendChild(rotateText);
    setup.appendChild(rotateButton);

    setup.appendChild(shipOptions);

    return [shipOptions, rotateButton, rotateText];
}

const makeShips = shipOptions => {
    const ships = [];

    for (const [name, { size }] of Object.entries(_scripts_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHIPS)) {
        const data = (0,_scripts_ship_js__WEBPACK_IMPORTED_MODULE_6__.ShipData)(name, size);
        shipOptions.appendChild(data.image);
        ships.push(data);
    }

    return ships;
}

const start = () => {
    const board = new _scripts_board_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const grid = new _scripts_grid_js__WEBPACK_IMPORTED_MODULE_4__["default"](GRID_SIZE, setup);
    const [shipOptions, rotateButton, rotateText] = makeShipOptions();
    const ships = makeShips(shipOptions);

    const config = {
        horizontal: true
    };

    const shipsPlaced = [];

    ships.forEach(shipOption => {
        const size = shipOption.size;
        let startRow, startCol, cell;

        let dragController = new _scripts_draggable_js__WEBPACK_IMPORTED_MODULE_3__["default"](shipOption.image, config);
        dragController.connect();
        dragController.setUpdateCallback(clone => {
            clone.hidden = true;

            cell = _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_1__["default"].target;
            if (cell.classList.contains("grid-cell")) {
                startRow = +cell.getAttribute("row");
                startCol = +cell.getAttribute("col");

                if (config.horizontal && (startCol + size) > GRID_SIZE)
                    startCol = GRID_SIZE - size;
                else if (!config.horizontal && (startRow + size) > GRID_SIZE)
                    startRow = GRID_SIZE - size;

                grid.deselectCells();
                grid.selectCells(startCol, startRow, size, config.horizontal);
            }

            clone.hidden = false;
        });

        dragController.setReleaseCallback(() => {
            grid.deselectCells();

            if (!cell || !cell.classList.contains("grid-cell"))
                return false;

            const horizontal = config.horizontal;

            const placed = board.placeShip(shipOption.name, startCol, startRow, horizontal);
            if (!placed) return false;

            dragController.disconnect();
            dragController = {};

            grid.addShip(shipOption, startCol, startRow, horizontal);

            shipsPlaced.push({ shipOption, startCol, startRow, horizontal });
            if (shipsPlaced.length === ships.length)
                startGame(board, shipsPlaced);

            return true;
        });
    });

    rotateButton.addEventListener("click", () => {
        config.horizontal = !config.horizontal;
        rotateText.textContent = `Rotate (${(config.horizontal) ? "H" : "V"})`;
    })

    setup.classList.remove("hidden");
};

const startGame = (board, shipsPlaced) => {
    setup.querySelectorAll("*").forEach(child => child.remove());
    setup.classList.add("hidden");

    (0,_game_js__WEBPACK_IMPORTED_MODULE_5__["default"])(board, shipsPlaced);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");



class Grid {
    constructor(size) {
        this.cells = Array.from({ length: size }, _ => Array().fill(null));
        this.firedCells = new Set();
        this.size = size;
    }

    setCells(value, xStart, xEnd, yStart, yEnd) {
        for (let y = yStart; y < yEnd; y++)
            for (let x = xStart; x < xEnd; x++)
                if (this.cells[y][x] != null)
                    return false;

        for (let y = yStart; y < yEnd; y++)
            for (let x = xStart; x < xEnd; x++)
                this.cells[y][x] = value;

        return true;
    }

    wasFiredAt(x, y) {
        return this.firedCells.has(`${x}#${y}`);
    }

    fire(x, y) {
        this.firedCells.add(`${x}#${y}`);
    }
}

class Board {
    #grid;
    #ships;

    constructor() {
        this.#grid = new Grid(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE);
        this.#ships = [];
    }

    #makeShip(name, x, y, horizontal) {
        const shipConfig = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHIPS[name]

        const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship({ ...shipConfig, name, x, y, horizontal });
        this.#ships.push(ship);

        return this.#ships.length - 1;
    }

    placeShip(shipName, xStart, yStart, horizontal) {
        if (xStart < 0 || yStart < 0)
            return false;

        const size = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHIPS[shipName].size;
        const xEnd = horizontal ? (xStart + size) : (xStart + 1);
        const yEnd = horizontal ? (yStart + 1) : (yStart + size);

        if (xEnd > _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE || yEnd > _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE)
            return false;

        const shipId = this.#makeShip(shipName, xStart, yStart, horizontal);
        const placed = this.#grid.setCells(shipId, xStart, xEnd, yStart, yEnd);

        if (!placed)
            this.#ships.pop();

        return placed;
    }

    fireShot(x, y) {
        if (x < 0 || y < 0 || x >= this.#grid.size || y >= this.#grid.size)
            return [false, false, false];
        else if (this.#grid.wasFiredAt(x, y))
            return [false, false, false];

        this.#grid.fire(x, y);

        const ship = this.getShipAtCell(x, y);
        if (ship != null)
            ship.hit();

        return [true, ship != null, ship?.isSunk()];
    }

    getShipAtCell(x, y) {
        return this.#ships[this.#grid.cells[y][x]];
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);

/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    SHIPS: {
        "Carrier": { size: 5, health: 5 },
        "Battleship": { size: 4, health: 4 },
        "Submarine": { size: 3, health: 3 },
        "Destroyer": { size: 3, health: 3 },
        "Cruiser": { size: 2, health: 2 }
    },

    GRID_SIZE: 10,
    SHIP_CELL_SIZE: 40,
    BOT_ATTACK_TIME: [300, 500]
});

/***/ }),

/***/ "./src/scripts/draggable.js":
/*!**********************************!*\
  !*** ./src/scripts/draggable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const X_OFFSET = 15;
const X_OFFSET_VERTICAL = -50;
const Y_OFFSET = -25;
const Y_OFFSET_VERTICAL = 50;

const clamp = (min, val, max) => Math.max(Math.min(val, max), min);

class Draggable {
    #c1 = 0;
    #c2 = 0;
    #c3 = 0;
    #c4 = 0;
    #onMouseMove = undefined;
    #onMouseDown = undefined;
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
        this.#onMouseMove = undefined;
        this.#onMouseUp = undefined;

        if (this.onRelease && this.onRelease(e.clientX, e.clientY))
            return;

        this.image.classList.remove("dragging");
    }

    connect() {
        this.#onMouseDown = e => {
            e.preventDefault();
            this.#dragged(e)
        };

        this.image.addEventListener("mousedown", this.#onMouseDown);
    }

    disconnect() {
        if (this.#onMouseMove)
            document.removeEventListener("mousemove", this.#onMouseMove);

        if (this.#onMouseDown)
            this.image.removeEventListener("mousedown", this.#onMouseDown);

        if (this.#onMouseUp)
            document.removeEventListener("mouseup", this.#onMouseUp);

        if (this.#clone)
            this.#clone.remove();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draggable); 

/***/ }),

/***/ "./src/scripts/grid.js":
/*!*****************************!*\
  !*** ./src/scripts/grid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const addCellBorders = (cell, isTop, isBot, isLeft, isRight) => {
    if (isTop)
        cell.classList.add("grid-cell-border-top");
    else if (isBot)
        cell.classList.add("grid-cell-border-bot");

    if (isLeft)
        cell.classList.add("grid-cell-border-left");
    else if (isRight)
        cell.classList.add("grid-cell-border-right");
}

class Grid {
    selectedCells = [];
    grid;
    gridShips;
    #gridCells;

    constructor(size, parent, reverse) {
        // Column ticks 
        const columnTicks = document.createElement("div");
        columnTicks.classList.add("column-ticks");
        parent.appendChild(columnTicks);

        for (let col = 1; col <= size; col++) {
            const tick = document.createElement("p");
            tick.classList.add("column-tick");
            tick.textContent = col;
            columnTicks.appendChild(tick);
        }

        const gridCenter = document.createElement("div");
        gridCenter.classList.add(`grid-center${reverse ? "-reverse" : ""}`);
        parent.appendChild(gridCenter);

        // Row ticks 
        const rowTicks = document.createElement("div");
        rowTicks.classList.add("row-ticks");
        gridCenter.appendChild(rowTicks);

        for (let row = 1; row <= size; row++) {
            const tick = document.createElement("p");
            tick.classList.add("row-tick");
            tick.textContent = (row <= 26) ? alphabet[row - 1] : row + 26;
            rowTicks.appendChild(tick);
        }

        // Main grid 
        this.grid = document.createElement("div");
        this.grid.classList.add("grid");

        // Make ship layer 
        this.gridShips = document.createElement("div");
        this.gridShips.classList.add("grid-ships");
        this.grid.appendChild(this.gridShips);

        // Make cells 
        this.#gridCells = Array.from({ length: size }, _ => Array().fill(null));

        for (let row = 0; row < size; row++)
            for (let col = 0; col < size; col++) {
                const cell = document.createElement("div");
                cell.classList.add("grid-cell");
                cell.setAttribute("row", row);
                cell.setAttribute("col", col);
                addCellBorders(cell, row === 0, row === size - 1, col === 0, col === size - 1);

                this.grid.appendChild(cell);
                this.#gridCells[row][col] = cell;
            }

        gridCenter.appendChild(this.grid);
    }

    nameCells(name) {
        this.#gridCells.forEach(row => {
            row.forEach(cell => {
                cell.classList.add(name);
            });
        });
    }

    deselectCells() {
        this.selectedCells.map(lastCell => lastCell.classList.remove("cell-selected"));
        this.selectedCells.length = 0;
    }

    selectCell(col, row) {
        const cell = this.#gridCells[row][col];
        cell.classList.add("cell-selected");
        this.selectedCells.push(cell);
    }

    selectCells(startCol, startRow, size, horizontal) {
        if (horizontal)
            for (let col = startCol; col < startCol + size; col++)
                this.selectCell(col, startRow);
        else
            for (let row = startRow; row < startRow + size; row++)
                this.selectCell(startCol, row);
    }

    addShip(shipOption, col, row, horizontal) {
        const ship = shipOption.image.cloneNode(true);
        ship.classList.add("placed-ship");

        if (horizontal) {
            ship.style.width = `${(50 * shipOption.size) - 5}px`;
            ship.style.left = `${(50 * col) + 2}px`;
            ship.style.top = `${(50 * row) + 3}px`;
        } else {
            ship.style.width = "45px";
            ship.style.height = `${(50 * shipOption.size) - 5}px`;
            ship.style.left = `${(50 * col) + 2}px`;
            ship.style.top = `${(50 * row) + 3}px`;
        }

        this.gridShips.appendChild(ship);

        return ship;
    }

    setShips(ships) {
        ships.forEach(ship => {
            this.addShip(ship.shipOption, ship.startCol, ship.startRow, ship.horizontal);
        });
    }

    setCellStatus(cell, hit) {
        const circle = document.createElement("div");
        circle.classList.add("status-circle");
        circle.classList.add(`status-${hit ? "hit" : "miss"}`);
        cell.appendChild(circle);
    }

    getCellByColumnRow(col, row) {
        return this.#gridCells[row][col];
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

/***/ }),

/***/ "./src/scripts/mouse.js":
/*!******************************!*\
  !*** ./src/scripts/mouse.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mouse = {
    x: 0,
    y: 0,
    target: undefined,
    lastTarget: undefined,
    filter: undefined,
    onclick: undefined,

    update: event => {
        mouse.target = event.target;
        mouse.x = event.clientX;
        mouse.y = event.clientY;

        if (mouse.target === mouse.lastTarget)
            return;

        if (mouse.onHit && (!mouse.filter || mouse.filter(mouse.target)))
            mouse.onHit(mouse.target);

        mouse.lastTarget = mouse.target;
    },

    setFilter: filter => {
        mouse.filter = filter;
    },

    connectClick: callback => {
        mouse.onclick = callback;
        document.body.addEventListener("click", callback);
    },

    disconnectClick: () => {
        document.body.removeEventListener("click", mouse.onclick);
        mouse.onclick = undefined;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouse); 

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bot: () => (/* binding */ Bot),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");


class Player {
    constructor(board, totalShips) {
        this.onTurnStart = undefined;
        this.onTurnEnd = undefined;
        this.board = board;
        this.shipsAlive = totalShips;
    }

    startTurn() {
        if (this.onTurnStart)
            this.onTurnStart();
    }

    endTurn() {
        if (this.onTurnEnd)
            this.onTurnEnd();
    }

    fireShot(enemyBoard, cell) {
        if (!this.alive())
            return;

        const col = +cell.getAttribute("col");
        const row = +cell.getAttribute("row");

        const [success, hit, sunk] = enemyBoard.fireShot(col, row);
        if (success)
            this.endTurn();

        return { onResult: callback => callback(...[success, hit, sunk, col, row]) };
    }

    shipSunk() {
        this.shipsAlive--;
    }

    alive() {
        return this.shipsAlive > 0;
    }
}

class Bot extends Player {
    #lastHit = [];
    #directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    #nextDirection = 0;

    constructor(board, totalShips) {
        super(board, totalShips);
    }

    placeShips() {
        const ships = [];
        for (const [name, { size }] of Object.entries(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHIPS))
            ships.push({ name, size });

        for (const ship of ships) {
            let placed = false;

            while (!placed) {
                const startRow = Math.floor(Math.random() * 9);
                const startCol = Math.floor(Math.random() * 9);

                placed = this.board.placeShip(ship.name, Math.min(startCol, _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE - ship.size), +startRow, true)
                    || this.board.placeShip(ship.name, +startCol, Math.min(startRow, _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].GRID_SIZE - ship.size), false);
            }
        }
    }

    fireShot(callback) {
        if (!this.alive())
            return;

        const tryFire = () => {
            let hitLastShot = this.#lastHit.length > 0;
            let col, row;

            if (hitLastShot) {
                col = this.#lastHit[0] + this.#directions[this.#nextDirection][0];
                row = this.#lastHit[1] + this.#directions[this.#nextDirection][1];
            } else {
                col = Math.floor(Math.random() * 9);
                row = Math.floor(Math.random() * 9);
            }

            const [success, hit, sunk] = callback(col, row);

            if (!success) {
                if (hitLastShot) {
                    this.#nextDirection = (this.#nextDirection + 1) % this.#directions.length;

                    if (this.#nextDirection == 0)
                        this.#lastHit = [];
                }

                return false;
            }

            if (sunk) {
                this.#lastHit = [];
                this.#nextDirection = 0;
            } else if (hit)
                this.#lastHit = [col, row];
            else if (hitLastShot)
                this.#nextDirection = (this.#nextDirection + 1) % this.#directions.length;

            return [success, hit, sunk, col, row];
        };

        var status;
        do {
            status = tryFire();
        } while (!status[0]);

        this.endTurn();

        return {
            onResult: (callback, delay) => {
                setTimeout(callback, delay, ...status.slice(1));
            }
        }
    }
}



/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   ShipData: () => (/* binding */ ShipData)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");


class Ship {
    #sunk = false;

    constructor({ size, health, x, y, horizontal }) {
        this.size = size;
        this.health = health;
        this.pos = { x, y };
        this.horizontal = horizontal;
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

const ShipData = (name, size) => {
    const image = document.createElement("div");
    image.classList.add("ship-image");
    image.style.width = `${size * _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHIP_CELL_SIZE}px`;

    return { image, size, name };
}



/***/ }),

/***/ "./assets/wallpaper.jpg":
/*!******************************!*\
  !*** ./assets/wallpaper.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4ffa22fb5943f0fcbd5.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_setup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/setup.css */ "./src/styles/setup.css");
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/game.css */ "./src/styles/game.css");
/* harmony import */ var _screens_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/menu.js */ "./src/screens/menu.js");
/* harmony import */ var _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/mouse.js */ "./src/scripts/mouse.js");






document.addEventListener("mousemove", _scripts_mouse_js__WEBPACK_IMPORTED_MODULE_4__["default"].update);

(0,_screens_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); 
})();

/******/ })()
;
//# sourceMappingURL=bundle85dfaf9fbf85b86c87d0.js.map
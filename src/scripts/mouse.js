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

export default mouse; 
const mouse = {
    x: 0,
    y: 0,
    target: undefined,
    lastTarget: undefined,
    filter: undefined,
    
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
    }
} 

export default mouse; 
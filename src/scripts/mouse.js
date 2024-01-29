const mouse = {
    x: 0,
    y: 0,
    target: undefined
} 

mouse.update = event => { 
    mouse.target = event.target; 
    mouse.x = event.clientX; 
    mouse.y = event.clientY; 
}

export default mouse; 
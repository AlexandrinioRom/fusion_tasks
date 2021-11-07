function moveElement() {
    let elemHeight = mouse.offsetHeight;
    let elemWidth = mouse.offsetWidth;
    let mousePositionX = mouse.style.top;
    let mousePositionY = mouse.style.left;

    mouse.addEventListener('keydown', move => {
        if(move.code === 'ArrowDown') { 
            mouse.style.top = elemHeight + mousePositionX + "px";
            mousePositionX = parseInt(mouse.style.top);
        }
        if(move.code === 'ArrowUp') { 
            mouse.style.top = mousePositionX - elemHeight + "px";
            mousePositionX = parseInt(mouse.style.top);
        }
        if(move.code === 'ArrowRight') {
            mouse.style.left = elemWidth + mousePositionY + "px";
            mousePositionY = parseInt(mouse.style.left);
        }
        if(move.code === 'ArrowLeft') {
            mouse.style.left = mousePositionY - elemWidth + "px";
            mousePositionY = parseInt(mouse.style.left);
        }
    })
    
}

mouse.addEventListener('focus', moveElement)
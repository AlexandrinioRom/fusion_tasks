slider.addEventListener('mousedown', thumbInit);

function thumbInit (event) {
    const target = event.target;
    if (!target.classList.contains('thumb')) return
    let shiftX = event.clientX - target.getBoundingClientRect().left;
    
    
    document.addEventListener('mousemove', thumbMove);
    document.addEventListener('mouseup', dropThumb);

    function thumbMove (event) {

        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left

        if (newLeft < 0) {
            newLeft = 0;
        }
          let rightEdge = slider.offsetWidth - target.offsetWidth;
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        
        target.style.left = newLeft + 'px';
    } 

    function dropThumb() {
        document.removeEventListener('mouseup', dropThumb);
        document.removeEventListener('mousemove', thumbMove);
    }
}
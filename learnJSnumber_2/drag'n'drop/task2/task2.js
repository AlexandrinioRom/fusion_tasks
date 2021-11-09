'use strict'

document.addEventListener('mousedown', onMouseDown);
document.ondragstart = () => false;

function onMouseDown(event) {

    const target = event.target;
    if (!target.closest('.draggable')) return;

    const position = target.getBoundingClientRect();
    const shiftX = event.clientX - position.left;
    const shiftY = event.clientY - position.top;

    document.addEventListener('mousemove', onMouseMove);
    target.addEventListener('mouseup', removeHandler);

    target.style.position = 'absolute';
    target.style.zIndex = 1000;
    document.body.append(target);

    moveAt(event.clientX, event.clienty);

    function onMouseMove(event) {
        moveAt(event.clientX, event.clientY);
    }

    function moveAt(clientX, clientY) {

        const docElem = document.documentElement;
        const docPosition = docElem.getBoundingClientRect();
        const rightSide = docPosition.width - target.offsetWidth;
        const bottomSide = docPosition.height - target.offsetHeight;

        let newY = clientY - shiftY;
        let newBottom = newY + target.offsetHeight;

        let newLeft = clientX - shiftX - docPosition.left;
        let newTop = newY - docPosition.top;

        if (newLeft < 0) {
            newLeft = 0;
        }
        if (newTop < 0) {
            newTop = 0;
        }
        if (newLeft > rightSide) {
            newLeft = rightSide;
        }
        if (newTop > bottomSide) {
            newTop = bottomSide;
        }

        // условие с прокруткой, которое идет ниже - не мое -----------------

        if (newBottom > docElem.clientHeight) {
            let scrollY = Math.min(docPosition.bottom - newBottom, 10);
            if (scrollY < 0) scrollY = 0;
            window.scrollBy(0, scrollY);
            newY = Math.min(newY, docElem.clientHeight - target.offsetHeight);
        }
        if (newY < 0) {
            let scrollY = Math.min(-newY, 10);
            if (scrollY < 0) scrollY = 0; 
            window.scrollBy(0, -scrollY);
            newY = Math.max(newY, 0); 
        }

        // ------------------------------------------------------------------

        target.style.left = newLeft + 'px';
        target.style.top = newTop + 'px';
    }

    function removeHandler () {
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
    }
}
document.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {

    const target = event.target;
    if (!target.closest('.draggable')) return;
    if (target.tagName == 'IMG') target.ondragstart = () => false;

    const position = target.getBoundingClientRect();
    const shiftX = event.clientX - position.left;
    const shiftY = event.clientY - position.top;

    document.addEventListener('mousemove', onMouseMove);
    target.addEventListener('mouseup', removeHandler);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    function moveAt(pageX, pageY) {
        target.style.left = pageX - shiftX + 'px';
        target.style.top = pageY - shiftY + 'px';
    }

    function removeHandler () {
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
    }
    
    target.style.position = 'absolute';
    target.style.zIndex = 1000;
    document.body.append(target);

    moveAt(event.pageX, event.pageY);
}
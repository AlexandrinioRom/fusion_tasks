'use strict'
document.addEventListener('mouseover', getTooltip);
document.addEventListener('mouseout', deleteTooltip);

let div = document.createElement('div');
div.className = 'tooltip';

function getTooltip(event) {
    if(!event.target.dataset.tooltip) return;

    const position = event.target.getBoundingClientRect()
    
    div.innerHTML = event.target.dataset.tooltip;
    document.body.append(div);

    if (position.top - div.offsetHeight + 5 > 0) {
        div.style.top = (position.top - div.offsetHeight) - 5 + 'px';
        div.style.left = position.left + 'px';
    } else {
        div.style.top = position.bottom  + 5 + 'px';
        div.style.left = position.left + 'px';
    }
    
}

function deleteTooltip(event) {
    if(!event.target.dataset.tooltip) return;
    div.remove();
}


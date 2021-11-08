
document.addEventListener('mouseover', getTooltip);
document.addEventListener('mouseout', deleteTooltip);

const div = document.createElement('div');
div.className = 'tooltip';

function getTooltip() {
    if(!event.target.dataset.tooltip) return;

    const elementTop = event.target.getBoundingClientRect().top;
    const elementBottom = event.target.getBoundingClientRect().bottom;
    const elementLeft = event.target.getBoundingClientRect().left;

    div.innerHTML = event.target.getAttribute('data-tooltip');
    document.body.append(div);

    if (elementTop - div.offsetHeight + 5 > 0) {
        div.style.top = (elementTop - div.offsetHeight) - 5 + 'px';
        div.style.left = elementLeft + 'px';
    } else {
        div.style.top = elementBottom  + 5 + 'px';
        div.style.left = elementLeft + 'px';
    }
    
}

function deleteTooltip() {
    if(!event.target.dataset.tooltip) return;
    div.remove();
    div = null;
}


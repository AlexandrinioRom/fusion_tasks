'use strict';

// задача показывает подсказку спустя полсекунды - не то, что нужно, но все же 

const tooltip = document.body.getElementsByClassName('tooltip')[0];

elem.addEventListener('mouseenter',getTooltip);
elem.addEventListener('mouseleave', showTooltip);

function showTooltip(event) {
    return tooltip.hidden = !tooltip.hidden
};

function getTooltip (event) {
    setTimeout(() => {

        const clock = event.target.closest('#elem');
        if (!clock) return;
        
        showTooltip(event);

        const position = clock.getBoundingClientRect();
        
        if (position.top - tooltip.offsetHeight + 5 > 0) {
            tooltip.style.top = (position.top - tooltip.offsetHeight) - 5 + 'px';
        } else {
            tooltip.style.top = position.bottom  + 5 + 'px';
        }

    }, 500);
}

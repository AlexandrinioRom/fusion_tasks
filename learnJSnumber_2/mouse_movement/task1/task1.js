let tooltip;

document.onmouseover = function(event) {
    
    let target = event.target.closest('[data-tooltip]');
    if (!target) return;

    tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    const position = target.getBoundingClientRect();

    tooltip.innerHTML = target.getAttribute('data-tooltip');
    document.body.append(tooltip);

    tooltip.style.left = position.left + (target.offsetWidth - tooltip.offsetWidth)/2 + 'px';

    if (position.top - tooltip.offsetHeight + 5 > 0) {
        tooltip.style.top = (position.top - tooltip.offsetHeight) - 5 + 'px';
    } else {
        tooltip.style.top = position.bottom  + 5 + 'px';
    }
}
document.onmouseout = () => (tooltip)?tooltip.remove():{};
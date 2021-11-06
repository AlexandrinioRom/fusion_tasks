
ul.onclick = function (event) {
    if (event.target.tagName != "LI") return;
    const target = event.target;

    if (event.metaKey || event.ctrlKey) {
        target.classList.add('selected');
    } else {
        for (let elem of ul.children) {
            elem.classList.remove('selected')
            if (elem = target) {
                target.classList.add('selected')
            }
        }
    }
}
ul.onmousedown = () => false;
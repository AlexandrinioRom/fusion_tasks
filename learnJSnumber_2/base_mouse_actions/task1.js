
ul.onclick = function (event) {
    const target = event.target;
    if (event.target.tagName != "LI") return;
    

    if (event.metaKey || event.ctrlKey) {
        target.classList.add('selected');
    } else {
        for (let elem of ul.children) {
            elem.classList.remove('selected')
            if (elem == target) {
                target.classList.add('selected')
            }
        }
    }
}
ul.onmousedown = () => false;
document.addEventListener('click', function (event) {
    const listNameTag = event.target.tagName;
    if (listNameTag != "SPAN") return;

    const list = event.target.nextSibling.nextSibling;
    list.hidden = !list.hidden
});
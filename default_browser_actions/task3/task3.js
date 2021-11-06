thumbs.onclick = function(event) {

    const target = event.target;
    const link = target.closest('a');

    event.preventDefault()
    if (link) {
        largeImg.src = link.href
    }
}
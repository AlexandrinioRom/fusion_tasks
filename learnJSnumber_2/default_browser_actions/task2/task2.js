const content = document.createElement('span');
content.innerHTML = "some text <a href='https://learn.javascript.ru/default-browser-action'><i>link</i></a>some text <a href='https://learn.javascript.ru'>lik</a>";

contents.append(content);

contents.onclick = function(event) {

    const target = event.target;
    const link = target.closest('a');
    
    if (link) {
        const question = confirm(`Leave for: ${link.href}?`);
        if (!question) {
            event.preventDefault();
        }
    } 
}

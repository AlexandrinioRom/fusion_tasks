// create elements
let div = document.createElement('div');
let input = document.createElement('input');


document.body.prepend(div);
div.append(input);

input.addEventListener('blur', () => alert('ждем возвращения'));


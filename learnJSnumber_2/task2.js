// create elements
const div = document.createElement('div');
const input = document.createElement('input');


document.body.prepend(div);
div.append(input);

input.addEventListener('blur', () => alert('ждем возвращения'));


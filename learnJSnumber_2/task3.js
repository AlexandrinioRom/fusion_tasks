let input = document.createElement('input');
let button = document.createElement('button');
button.textContent = 'опубликовать';
document.body.append(input);
document.body.append(button);

let renameBtn = () => {
  button.textContent = input.value;
  input.value = '';
}

button.addEventListener('click', renameBtn);
const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'опубликовать';
document.body.append(input);
document.body.append(button);

const renameBtn = () => {
  button.textContent = input.value;
  input.value = '';
}

button.addEventListener('click', renameBtn);
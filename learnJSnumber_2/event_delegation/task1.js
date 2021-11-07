function createBlock (){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const buttonDelete = document.createElement('button');

    

    h1.textContent = 'Text title';
    p.textContent = 'some text';

    document.body.append(div);
    div.append(buttonDelete);
    div.append(h1);
    div.append(p);
}

createBlock ();
createBlock ();
createBlock ();

function deleteBlock() {
    if(event.target.tagName == "BUTTON"){
        event.target.parentNode.remove();
    }
}

const buttonDelete = document.querySelectorAll('button');
const body = document.querySelector('body');
body.addEventListener('click', deleteBlock);

// это мое первое решение. 
// Думаю ошибки такие: 
// 1) функция удаляет родительский элемент ЛЮБОЙ кнопки (правильней было бы создать отдельный класс для самой кнопки  и ее блока)
// 2) юзаю perentNode, а надо пользоваться closest
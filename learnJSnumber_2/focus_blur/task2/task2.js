
document.addEventListener('click', editTd);

function editTd () {
    const target = event.target;
    const td = target.closest('td');
    const tr = target.closest('tr');
    
    if(!target.closest('td')) return;
    
    area = document.createElement('textarea');
    area.value = td.innerHTML;
    area.style.height = tr.offsetHeight+'px';
    
    td.replaceWith(area);
    area.focus();
    area.classList.add('edit-td');
    area.insertAdjacentHTML("afterend", 
        `<div class="edit-controls">
            <button class="edit-ok">OK</button>
            <button class="edit-cancel">CANCEL</button>
        </div>`
    );

    const buttons = document.querySelector('.edit-controls');
    
    area.onblur = () => {
        td.innerHTML = area.value;
        area.replaceWith(td);
        buttons.remove();
    };
}
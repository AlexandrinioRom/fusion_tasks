let area = document.querySelector('edit-td');
document.addEventListener('click', editTd);


function editTd () {
    
    if (area) return;
    
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

    function reset () {
        area.replaceWith(td);
        buttons.remove();
        area = null;
    }

    buttons.onclick = (event) => {
        const target = event.target;
        if (target.classList == 'edit-ok') {
            td.innerHTML = area.value;
            reset ();
        }
        if (target.classList == 'edit-cancel') {
            reset ();
        }
    }
}
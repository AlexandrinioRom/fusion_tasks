const sortString = (a,b) => {

    if (a.lastElementChild.innerText > b.lastElementChild.innerText) {
        return 1;
    }

    if (a.lastElementChild.innerText < b.lastElementChild.innerText) {
        return -1;
    }
    
    return 0;

};

const sortNumber = (a,b) => a.firstElementChild.innerText - b.firstElementChild.innerText;

function editTable (event) {

    const headerCell = event.target;
    const table = document.getElementById('grid');
    const tableBody = table.lastElementChild;
    const rowsArray = Array.from(tableBody.rows);
    
    if (headerCell.tagName != 'TH') return;

    if(headerCell.dataset.type == 'number') {

        console.log('click at number');
        rowsArray.sort(sortNumber);
        tableBody.append(...rowsArray);
        
    } else {

        console.log('click at string');
        rowsArray.sort(sortString);
        tableBody.append(...rowsArray);
    
    }
}


document.addEventListener('click', editTable);
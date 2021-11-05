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

function editTable () {

    const headerCell = event.target;
    const table = document.getElementById('grid');
    const tableBody = table.lastElementChild;
    const rowsArray = Object.values(tableBody.rows);
    
    if (headerCell.tagName != 'TH') return;

    if(headerCell.getAttribute('data-type') == 'number') {

        console.log('click at number');
        rowsArray.sort(sortNumber);

        for (const row of rowsArray) {
           tableBody.append(row);
        }
        
    } else {

        console.log('click at string');
        rowsArray.sort(sortString);
    
        for (const row of rowsArray) {
           tableBody.append(row);
        }
    }
}


document.addEventListener('click', editTable);
const html_container = document.getElementById('html_container');
let area = null;

html_container.addEventListener('click', editDiv);

function editDiv () {
    area = document.createElement('textarea');
    area.className = 'aria';
    area.value = html_container.innerHTML;
    
    html_container.replaceWith(area);
    area.focus();

    area.onkeydown = (event) => {
        if(event.key == 'Enter') {
            area.onblur();
        }
    };

    area.onblur = () => {
        html_container.innerHTML = area.value;
        area.replaceWith(html_container);
    };
    
}
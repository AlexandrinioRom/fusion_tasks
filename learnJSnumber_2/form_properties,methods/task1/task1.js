function getSelectedOptionInfo() {
    alert(genres.value);
    alert(genres.options[genres.selectedIndex].innerText);
}
getSelectedOptionInfo()

function addNewSelectedOption(value,innerText) {
    genres.insertAdjacentHTML('beforeend',`<option value="${value}">${innerText}</option>`);
    genres.selectedIndex++;
}

addNewSelectedOption('classic','Классика');

//это неправильно, но у меня получилось)



// //вот правильное и более компактное решение (не мое)

// Object.values(genres).forEach(({value, text}) => console.log(value, text));

// const newOption = new Option('Классика', 'classic');

// genres.options.add(newOption);

// newOption.selected = true;
// Task number 2


const arrString = ["asd", "afffd", "cc", "kk"];

function getTrueEnd(arrString) {

  let elem;
  let newArr = [];

  for (let i = 0; i < arrString.length - 1; i++) {

    elem = arrString[i];
    nextElem = arrString[i + 1];

    const status = ((elem[elem.length - 1] == nextElem[nextElem.length - 1]) &&
      (elem[0] == nextElem[0]));

    newArr.push(status);

  }

  return newArr

}

console.log(getTrueEnd(arrString));


  //elem - элемент массива на данной итерации 
  //elem.length - длина элемента массива на данной итерации
  //elem [0] - первый символ элемта массива на данной итерации
  //elem[elem.length - 1] - последний символ элемента массива на данной итерации

  //nextElem - следующий элемент массива на данной итерации
  //nextElem[0] - ервый символ следующего элемента массива на данной итерации
  //nextElem[nextElem.length - 1] - последний символ следующего элемента


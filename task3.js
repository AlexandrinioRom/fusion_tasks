//Task number 3


let num = 2021;

let numFirst = Math.trunc(num / 1000);
let numSecond = num % 1000;

let rank;
let unitsNumFirst = numFirst % 10;
let tensNumFirst = numFirst % 100;

if (unitsNumFirst > 4 || unitsNumFirst == 0 || tensNumFirst > 10) {

  rank = 'тысяч';

}

if ((unitsNumFirst < 5 && unitsNumFirst !== 0 && tensNumFirst > 14) ||
  (((unitsNumFirst == 1 && tensNumFirst !== 11 || unitsNumFirst == 2 && tensNumFirst !== 12) ||
    ((unitsNumFirst == 3 || unitsNumFirst == 4) && tensNumFirst !== 13 && tensNumFirst !== 14)))) {

  rank = 'тысячи'

}

if (unitsNumFirst == 1 && tensNumFirst !== 11) {

  rank = 'тысяча';

}


function getWords(num) {

  let numString;

  let hundreds = Math.trunc(num / 100);
  let teenth = Math.trunc(num % 100);
  let unit = Math.trunc(teenth % 10);
  let tens = Math.trunc(teenth / 10);

  const unitsObject = {

    0: '',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
    10: 'десять',
    11: 'одинадцать',
    12: 'двенадцать',
    13: 'тринадцать',
    14: 'четырнадцать',
    15: 'пятнадцать',
    16: 'шестнадцать',
    17: 'семнадцать',
    18: 'восемнадцать',
    19: 'девятнадцать',
    20: 'двадцать'

  }

  const tensObject = {

    10: 'десять',
    20: 'двадцать',
    30: 'тридцать',
    40: 'сорок',
    50: 'пятьдесят',
    60: 'шестьдесят',
    70: 'семьдесят',
    80: 'восемьдесят',
    90: 'девяносто'

  }

  const hundredsObject = {

    100: 'сто',
    200: 'двести',
    300: 'триста',
    400: 'четыреста',
    500: 'пятьсот',
    600: 'шестьсот',
    700: 'семьсот',
    800: 'восемьсот',
    900: 'девятьсот'

  }

  if (num <= 20) {

    numString = unitsObject[num];

  } else if (num > 20 && num % 10 == 0) {

    numString = tensObject[num];

  } else {

    numString = tensObject[tens * 10] + ' ' + unitsObject[unit];

  }

  if (num > 99 && num % 100 == 0) {

    numString = hundredsObject[num];

  } else if (num % 10 == 0) {

    numString = hundredsObject[hundreds * 100] + ' ' + tensObject[tens * 10] + ' ' + unitsObject[unit];

  } else if (num > 99 && num % 10 !== 0) {

    if (teenth <= 20) {

      numString = hundredsObject[hundreds * 100] + ' ' + unitsObject[teenth];

    } else {

      numString = hundredsObject[hundreds * 100] + ' ' + tensObject[tens * 10] + ' ' + unitsObject[unit];

    }

  }

  return numString;

}

function sum() {

  let firstString = `${getWords(numFirst)}`.split(' ');

  if (firstString.reverse()[0] == 'один') {

    firstString[0] = 'одна';

  }

  if (firstString.reverse()[0] == 'два') {

    firstString[0] = 'две';

  }

  let sumString = `${firstString.join(' ')} ${rank} ${getWords(numSecond)}`.split(' ');
  let filterArr = sumString.filter(item => (item !== 'undefined' && item != ''));

  if (filterArr.length > 4) {

    return console.log(filterArr.join(' '));

  } else if (filterArr[0] == 'тысяч') {

    filterArr.shift();
    return console.log(filterArr.join(' '));

  } else {

    return console.log(filterArr.join(' '));

  }

}

sum();

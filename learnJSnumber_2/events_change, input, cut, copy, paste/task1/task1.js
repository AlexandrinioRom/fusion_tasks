'use strict'
const form = document.forms.calculator;

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {

  const deposit = +form.money.value;
  const years = form.months.value / 12
  const interest = form.interest.value * 0.01;
  const result = Math.round(deposit * (1 + interest) ** years);
  const difference = result / deposit;
  const divGreen = document.querySelector('#height-after');
  const divRed = divGreen.parentElement.nextElementSibling.children[0];
  
  document.querySelector('#money-after').innerText = result;
  document.querySelector('#money-before').innerText = deposit;

  divGreen.style.height = (divRed.clientHeight / difference) + 'px';
}

calculate();
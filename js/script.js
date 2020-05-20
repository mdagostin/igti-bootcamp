window.addEventListener('load', start);

var rangeRed = null;
var rangeGreen = null;
var rangeBlue = null;
var actualValueRed = null;
var actualValueGreen = null;
var actualValueBlue = null;

function start() {
  rangeRed = document.querySelector('#inputRed');
  rangeGreen = document.querySelector('#inputGreen');
  rangeBlue = document.querySelector('#inputBlue');
  actualValueRed = document.querySelector('#actualValueRed');
  actualValueGreen = document.querySelector('#actualValueGreen');
  actualValueBlue = document.querySelector('#actualValueBlue');

  processaCores();
}

function processaCores() {
  function firstLoad() {
    if (event.type === 'load') {
      actualValueRed.value = rangeRed.value;
      actualValueGreen.value = rangeGreen.value;
      actualValueBlue.value = rangeBlue.value;
      DisplaySqare();
    }
  }

  function DisplaySqare() {
    var quadrado = document.querySelector('#quad');
    quadrado.style.backgroundColor =
      'rgb(' +
      rangeRed.value +
      ',' +
      rangeGreen.value +
      ',' +
      rangeBlue.value +
      ')';
  }
  function updateInputValue(event) {
    if (event.target.id === 'inputRed') {
      actualValueRed.value = event.target.value;
    }
    if (event.target.id === 'inputGreen') {
      actualValueGreen.value = event.target.value;
    }
    if (event.target.id === 'inputBlue') {
      actualValueBlue.value = event.target.value;
    }
    DisplaySqare();
  }

  firstLoad();

  rangeRed.addEventListener('click', updateInputValue);
  rangeGreen.addEventListener('click', updateInputValue);
  rangeBlue.addEventListener('click', updateInputValue);

  rangeRed.addEventListener('keyup', updateInputValue);
  rangeGreen.addEventListener('keyup', updateInputValue);
  rangeBlue.addEventListener('keyup', updateInputValue);
}

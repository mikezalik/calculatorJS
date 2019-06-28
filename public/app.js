// Variables
const display = document.getElementById('display');
let inputs = document.getElementsByClassName('inputs');
let operators = document.getElementsByClassName('operators');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let backspace = document.getElementById('backspace');
let currentInputValue;
let currentOperator;
let displayValue;
let result;
let backspaceValue;
let i;
let io;

// Numeric value input
function dataInput() {
  currentInputValue = this.value;
  display.value += currentInputValue;
}

// Operator input
function operatorInput() {
  currentOperator = this.value;
  display.value += currentOperator;
}

// Displays calculated result
function displayResult() {
  if (display.value === '') {
    display.value = '';
  } else {
    displayValue = display.value;
    displayValue = displayValue.replace(/[\d.]+/g, (n) => parseFloat(n));
    result = eval(displayValue);
    display.value = result;
  }
}

// Deletes a single value
function deleteSingle() {
  backspaceValue = display.value;
  display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}

// Clears input field
function clearAll() {
  display.value = '';
}

// Blocks alpha characters on keyboard and specifies keycodes
function keyboardInput(key) {
  if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
    return false;
  }
  key.preventDefault();
  if (key.which === 48) {
    display.value += '0';
  } else if (key.which === 49) {
    display.value += '1';
  } else if (key.which === 50) {
    display.value += '2';
  } else if (key.which === 51) {
    display.value += '3';
  } else if (key.which === 52) {
    display.value += '4';
  } else if (key.which === 53) {
    display.value += '5';
  } else if (key.which === 54) {
    display.value += '6';
  } else if (key.which === 55) {
    display.value += '7';
  } else if (key.which === 56) {
    display.value += '8';
  } else if (key.which === 57) {
    display.value += '9';
  } else if (key.which === 46) {
    display.value += '.';
  } else if (key.which === 40) {
    display.value += '(';
  } else if (key.which === 41) {
    display.value += ')';
  } else if (key.which === 42) {
    display.value += '*';
  } else if (key.which === 47) {
    display.value += '/';
  } else if (key.which === 43) {
    display.value += '+';
  } else if (key.which === 45) {
    display.value += '-';
  } else if (key.which === 13) {
    displayResult();
  } else if (key.which === 99) {
    clearAll();
  } else {
    display.value = display.value;
  }
  return true;
}

// Deletes value
function backspaceKeyEvent(event) {
  if (event.which === 8) {
    deleteSingle();
  }
}

// Code execution
window.onload = function () {
  document.onkeypress = keyboardInput;
  document.onkeydown = backspaceKeyEvent;

  // Numeric data input
  for (i = 0; i < inputs.length; i++) {
    inputs[i].onclick = dataInput;
  }

  // Operator input
  for (io = 0; io < operators.length; io++) {
    operators[io].onclick = operatorInput;
  }

  // Displays calculated result
  equal.onclick = displayResult;

  // Deletes one
  backspace.onclick = deleteSingle;

  // Clears input
  clear.onclick = clearAll;
};

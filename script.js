/* Variables I'll inevitably need? */

const firstFigure
const secondFigure


let a = '';
let b = '';
let operator = '';

/* Calculator */

/* 1.
basic math functions */
function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// factorial for funsies
// may need to limit input? will be huge numbers..
function factorial(a) {
    let factorialNum = 1;
    for (let i = a; i > 1; i--) {
        factorialNum *= i;        
    }
    return factorialNum;
}

/* 2. 
function that takes an operator and 2 numbers and calls one of above functions
should this be a switch function? */

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        case '!':
            return factorial(a); // does this work with only 1 number?
            break;
    }
}

/* 3. create a basic HTML calculator with buttons for each digit, each of the above functions, and an equals key 
    - don't wire up JS just yet
    - display for calculator - fill with dummy numbers to get looking right 
    - add a 'clear' button  */

    // done

/* 4. create functions that populate the display when click number buttons - should be storing 'display value' in a variable somewhere for next step */

    // get input on event selector for each button - `${value}`?
    const display = document.querySelector('#display');
    const button = document.querySelectorAll('button');
    const operatorBtn = document.querySelectorAll('.operator');
    const numberBtn = document.querySelectorAll('.digits');
    const equalsBtn = document.querySelector('.equals');
    const backBtn = document.querySelector('.back');
    const clearBtn = document.querySelector('.clear');

    operatorBtn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    })

    equalsBtn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    })

    backBtn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    })

    clearBtn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    })

    numberBtn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    })
        
    button.forEach((button) => {
  
        button.addEventListener('click', () => {
          
          if (button.className === 'digits') {
            if (display.textContent === '0.0') {
              clearDisplay();
              display.textContent += `${button.value}`;
            } else {
              display.textContent += `${button.value}`;
            }
          } else if (button.value === 'clear') { 
            clearDisplay();
          } else if (button.value === 'back') {
            backDisplay();
          } else if (button.value === '.') {
            if (display.textContent === '0.0') {
                clearDisplay();
                display.textContent += '0';
            }
            appendDecimal();
          } 
          else if (button.className === 'operator') {
              // what here
          }
        });
      });

    // store input into variable firstValue - use string and display string, splice out what is needed
    const firstValue;

    // store operator input into variable operatorValue
    const operatorValue;

    // store input into variable secondValue
    const secondValue;

    // store those inputs into displayValue, which includes firstValue operatorValue secondValue

    // append displayValue to element #display
    if (button.className === "operator") {
        firstValue = display.textContent;
        console.log(firstValue);
    }


/* 5. make it work! store first number input when user presses an operator, save which operation has been chosen, then operate() on them when user clicks '=' 
    - once operate() has been called, update the display with the 'solution' to the operation
    - figure out how to store all the values and call the operate function with them
*/

// store in variable answer

// append answer to element

// if operand selected again, set answer as firstValue and operate

/* 6. gotchas
    - when clicking several operations in a row, evaluate first operator and use the output as the first value of the next operation
    - round answers with long decimals
    - pressing = before entering all numbers/operator could cause problems! 
    - 'clear' needs to clear everything
    - display snarky error for /0 */

    // if operand selected again, set answer as firstValue and operate

    // round decimal places
        // let lotsOfDecimal = 1.1095809158;
        // let twoDecimalPlaces = lotsOfDecimal.toFixed(2);

    // prevent = from triggering before 2 num + operator

    // clear functionality
    function clearDisplay() {
        display.textContent = '';
    }

    // back functionality
    function backDisplay() {
        display.textContent = display.textContent.toString().slice(0, -1);
    }

    // divide by 0 error
    function divideZero() {
        if (button.operator === 'divide' && secondValue ==='0') {
            clearDisplay();
            display.textContent = "Ya can't divide by 0!";
        }
    }

/* 7. extra credit - 
get decimal functionality working; add . button that lets users input decimals; don't let multiples work 12.51.3, etc. */

function appendDecimal() {
    if (display.textContent === '') {
        display.textContent += '0';
    } else {
        if (display.textContent.includes('.')) return;
        display.textContent += '.';
    }
  }

/* 8. extra credit - 
make it look nice */

/* 9. extra credit - 
add a 'backspace' button to undo last number */

    // set values as arrays, trigger array splice(?) on event

    // don't let it affect answer variable! saw some examples where it did

/* 10. extra credit - 
keyboard support */



// Current working stuff:

// working digits to display + clear + back:
let a = '';
let b = '';
let operator = '';

// working digits to display + clear + back:

let firstValue = '';
let secondValue = '';
let operator;

// working digits to display + clear + back:
let firstValue = '';
let secondValue = '';
let operator = '';

// working digits to display + clear + back:
const display = document.querySelector('#display');
const button = document.querySelectorAll('button');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.digits');
const equalsBtn = document.querySelectorAll('.equals');
const backBtn = document.querySelectorAll('.back');
const clearBtn = document.querySelectorAll('.clear');
const decimalBtn = document.querySelectorAll('.decimal');

    
    decimalBtn.forEach((button) => {
        button.addEventListener('click', () => {
          appendDecimal();
        })
    })

    operatorBtn.forEach((button) => {
        button.addEventListener('click', () => {
        if (operator === '') {
            firstValue = display.textContent;
            
            operator = `${button.value}`;
            
            display.textContent = '';
        } else {
            if (secondValue !== '') {
                firstValue = display.textContent;
                operator = `${button.value}`;
            
                display.textContent = '';
            } else {
                return;
            }
        }
            
        })
    })

    equalsBtn.forEach((button) => {
        button.addEventListener('click', () => {
            
            secondValue = display.textContent;
            display.textContent = '';
            
            
            display.textContent = operate(operator, firstValue, secondValue);

        })
    })

    backBtn.forEach((button) => {
        button.addEventListener('click', () => {
            backDisplay();
        })
    })

    clearBtn.forEach((button) => {
        button.addEventListener('click', () => {
            clearDisplay();
        })
    })

    numberBtn.forEach((button) => {
        button.addEventListener('click', () => {
          if (display.textContent === '0.0') {
            clearDisplay();
            display.textContent += `${button.value}`;
          } else {
            display.textContent += `${button.value}`;
          }
        })
    })


  // clear functionality
function clearDisplay() {
    display.textContent = '';
    // reset other variables
    firstValue = '';
    secondValue = '';
    operator = '';
}

  // back functionality
function backDisplay() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

  // decimal functionality
function appendDecimal() {
  // console.log works, but it isn't 
  if (display.textContent === '0.0') {
      display.textContent += '0';
  } else {
      if (display.textContent.includes('.')) return;
      display.textContent += '.';
  }
}

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === '0') {
    let noZero = 'No.';
    return noZero;
  } else {
    return a / b;
  }
}

// factorial for funsies
// may need to limit input? will be huge numbers..
function factorial(a) {
  let factorialNum = 1;
  for (let i = a; i > 1; i--) {
      factorialNum *= i;        
  }
  return factorialNum;
}

function operate(operator, a, b) {
  switch (operator) {
    // need to add decimal maximum, rounding
      case '+':
          return add(a, b);
          break;
      case '-':
          return subtract(a, b);
          break;
      case '*':
          return multiply(a, b);
          break;
      case '/':
          return divide(a, b);
          break;
      case '!':
          return factorial(a); // does this work with only 1 number?
          break;
  }
}

// need +/- functionality. Otherwise... done?
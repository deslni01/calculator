/* Calculator */

/* 1.
basic math functions */
function add(a, b) {
    return a + b;
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

// for fun
function factorial() {

}

/* 2. 
function that takes an operator and 2 numbers and calls one of above functions
should this be a switch function? */
function operate(operator, a, b) {
    if (operator === "+") {
        add(a, b);
    } else if (operator === "-") {
        subtract(a, b);
    } else if (operator === "*") {
        multiply(a, b);
    } else if (operator === "/") {
        divide(a, b);
    }
}

/* 3. create a basic HTML calculator with buttons for each digit, each of the above functions, and an equals key 
- don't wire up JS just yet
- display for calculator - fill with dummy numbers to get looking right 
- add a 'clear' button  */

/* 4. create functions that populate the display when click number buttons - should be storing 'display value' in a variable somewhere for next step */

/* 5. make it work! store first number input when user presses an operator, save which operation has been chosen, then operate() on them when user clicks '=' 
- once operate() has been called, update the display with the 'solution' to the operation
- figure out how to store all the values and call the operate function with them
*/

/* 6. gotchas
- when clicking several operations in a row, evaluate first operator and use the output as the first value of the next operation
- round answers with long decimals
- pressing = before entering all numbers/operator culd cause problems! 
- 'clear' needs to clear everything
- display snarky error for /0 */

/* 7. extra credit - 
get decimal functionality working; add . button that lets users input decimals; don't let multiples work 12.51.3, etc. */

/* 8. extra credit - 
make it look nice */

/* 9. extra credit - 
add a 'backspace' button to undo last number */

/* 10. extra credit - 
keyboard support */
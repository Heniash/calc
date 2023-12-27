const display = document.getElementById("calculator-display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    const inputValue = display.value;

    let leftNumber = "";
    let rightNumber = "";
    let operator = "";

    for (let i = 0; i < inputValue.length; i++) {
        let currentValue = inputValue[i];

        if (["+", "-", "*", "/"].includes(currentValue)) {
            if (!operator) {
                operator = currentValue;
            } else {
                rightNumber += currentValue;
            }
        } else {
            if (!operator) {
                leftNumber += currentValue;
            } else {
                rightNumber += currentValue;
            }
        }
    }

    leftNumber = parseInt(leftNumber);
    rightNumber = parseInt(rightNumber);

    let result;

    if (operator === "+") {
        result = leftNumber + rightNumber;
    } else if (operator === "-") {
        result = leftNumber - rightNumber;
    } else if (operator === "*") {
        result = leftNumber * rightNumber;
    } else if (operator === "/") {
        if (rightNumber !== 0) {
            result = leftNumber / rightNumber;
        } else {
            result = "Error: Division by zero";
        }
    } else {
        result = "Error: Invalid operator";
    }


    display.value = result;
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key >= "0" && key <= "9") {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

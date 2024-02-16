document.addEventListener('DOMContentLoaded', function() {
    let displayValue = '0';
    let firstNumber = '';
    let operator = '';
    let complete = false;

    function updateDisplay() {
        const screen = document.getElementById('screen');
        screen.value = displayValue;

        if (displayValue.length > 8) {
            screen.style.fontSize = '1.67em';
        } else {
            screen.style.fontSize = '4em';
        }
    }


    function addNumber(number) {
        if (displayValue === '0' || complete) {
            displayValue = '';
            complete = false;
        }
        displayValue += number.toString();
        updateDisplay();
    }

    function addPoint() {
        if (!displayValue.includes('.')) {
            displayValue += '.';
            updateDisplay();
        }
    }

    function setOperator(op) {
        if (firstNumber === '') {
            firstNumber = displayValue;
            complete = false;
        }
        operator = op;
        displayValue = '';
        updateDisplay();
    }

    function operate() {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(displayValue);
        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    displayValue = 'Error: Division by zero';
                    updateDisplay();
                    return;
                }
                result = num1 / num2;
                break;
            default:
                return;
        }

        displayValue = result.toFixed(2);
        updateDisplay();

        firstNumber = '';
        operator = '';
        complete = true;
    }

    function clearDisplay() {
        displayValue = '0';
        firstNumber = '';
        operator = '';
        updateDisplay();
    }

    function deleteDigit() {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') {
            displayValue = '0';
        }
        updateDisplay();
    }

    function handleButtonClick(event) {
        const value = event.target.value;
        if (!isNaN(value)) {
            addNumber(parseInt(value));
        } else if (value === '.') {
            addPoint();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            setOperator(value);
        } else if (value === '=') {
            if (operator !== '' && displayValue !== '') { 
                operate();
            }
        } else if (value === 'CLEAR') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteDigit();
        }
    }

    function handleKeyDown(event) {
        const key = event.key;
        if (!isNaN(key) && key !== ' ') {
            addNumber(parseInt(key));
        } else if (key === '.') {
            addPoint();
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            setOperator(key);
        } else if (key === '=') {
            if (operator !== '' && displayValue !== '') { 
                operate();
            }
        } else if (key === 'Enter') {
            if (operator !== '' && displayValue !== '') {
                operate();
            }
        } else if (key === 'Backspace') {
            deleteDigit();
        } else if (key === 'Escape') {
            clearDisplay();
        }
    }
    

    const buttons = document.querySelectorAll('.button-zone button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.addEventListener('keydown', handleKeyDown);
});

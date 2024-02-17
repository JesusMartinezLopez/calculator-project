document.addEventListener('DOMContentLoaded', function () {
    let displayValue = '0';
    let firstNumber = '';
    let operator = '';
    let complete = false;

    function updateDisplay() {
        const screen = document.getElementById('screen');
        screen.value = displayValue;

        const maxLength = 8; // Maximum number of characters to display before adjusting font size
        const fontSize = '4em'; // Standard font size

        if (displayValue.length > maxLength) {
            screen.style.fontSize = '1.67em'; // Adjust font size when length exceeds threshold
        } else {
            screen.style.fontSize = fontSize; // Use standard font size
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

    function setOperator(opButton) {
        if (firstNumber !== '' && operator !== '' && displayValue !== '') {
            operate();
            displayValue = firstNumber;
            updateDisplay();
        } else if (firstNumber === '') {
            firstNumber = displayValue;
            displayValue = '';
        }

        operator = opButton.value;
        updateDisplay();

        document.querySelectorAll('.operator').forEach(button => {
            button.classList.remove('active');
        });

        opButton.classList.add('active');
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

        displayValue = result;
        updateDisplay();

        // firstNumber = displayValue;
        operator = '';
        complete = true;
        firstNumber = ''
        console.log(firstNumber)
        console.log(displayValue)
    }

    function clearDisplay() {
        displayValue = '0';
        firstNumber = '';
        operator = '';
        updateDisplay();
        document.querySelectorAll('.operator').forEach(button => {
            button.classList.remove('active');
        });
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
            setOperator(event.target);
        } else if (value === '=') {
            if (operator !== '' && displayValue !== '') {
                operate();
            }
        } else if (value === 'CLEAR') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteDigit();
        }
        if (!isNaN(value) || value === '.' || value === '=' || value === 'CLEAR' || value === 'DEL') {
            document.querySelectorAll('.operator').forEach(button => {
                button.classList.remove('active');
            });
        }
    }

    function handleKeyDown(event) {
        const key = event.key;
        if (!isNaN(key) && key !== ' ') {
            addNumber(parseInt(key));
        } else if (key === '.') {
            addPoint();
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            setOperator(document.querySelector(`button[value="${key}"]`));
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
        if (!isNaN(key) || key === '.' || key === '=' || key === 'Enter' || key === 'Backspace' || key === 'Escape') {
            document.querySelectorAll('.operator').forEach(button => {
                button.classList.remove('active');
            });
        }
    }

    const buttons = document.querySelectorAll('.button-zone button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.addEventListener('keydown', handleKeyDown);
});

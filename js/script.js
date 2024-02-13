document.addEventListener('DOMContentLoaded', function() {
  let displayValue = '0';
  let firstNumber = '';
  let operator = '';

  function updateDisplay() {
      document.getElementById('screen').value = displayValue;
  }

  function addNumber(number) {
      if (displayValue === '0') {
          displayValue = '';
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
      if (firstNumber !== '') {
          operate();
      }
      firstNumber = displayValue;
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
          operate();
      } else if (value === 'CLEAR') {
          clearDisplay();
      } else if (value === 'DEL') {
          deleteDigit();
      }
  }

  const buttons = document.querySelectorAll('.button-zone button');
  buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
  });
});

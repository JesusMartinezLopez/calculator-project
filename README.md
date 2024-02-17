https://jesusmartinezlopez.github.io/calculator-project/

# Calculator Documentation

## Overview
This is a basic calculator application. It enables users to perform arithmetic operations, clear the display, delete digits, and handle keyboard inputs for improved usability.

## Functions
1. **updateDisplay()**: Updates the calculator display with the current value.

2. **addNumber(number)**: Appends a digit to the current display value.

3. **addPoint()**: Adds a decimal point to the display value if not already present.

4. **setOperator(opButton)**: Sets the arithmetic operator for calculation and updates the display accordingly.

5. **operate()**: Performs the arithmetic operation based on the selected operator and updates the display with the result.

6. **clearDisplay()**: Resets the calculator display and clears any stored values.

7. **deleteDigit()**: Removes the last entered digit from the display.

8. **handleButtonClick(event)**: Event handler for button clicks, triggers appropriate actions based on the clicked button.

9. **handleKeyDown(event)**: Event handler for keyboard inputs, performs actions based on the pressed keys.

## Event Listeners
- **DOMContentLoaded**: Initializes the calculator when the DOM content is fully loaded.
- **click**: Listens for button clicks and triggers the appropriate event handler.
- **keydown**: Listens for keyboard inputs and triggers the appropriate event handler.

## Usage
1. **Button Clicks**: Click on the calculator buttons to input digits, perform arithmetic operations, and execute other functionalities.
2. **Keyboard Inputs**: Use the keyboard to interact with the calculator, including entering digits, performing operations, and clearing the display.

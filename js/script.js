const screen = document.getElementById('screen');

window.onload = () => {
  screen.value = 0
}

const addNumber = (number) => {
  if (screen.value == 0) {
    screen.value = number;
  } else {
    screen.value = screen.value + number;
  }
  
}

const clear = () => {

}

const del = () => {
  let number = screen.value;
  if (number.length < 2) {
    screen.value = 0;
  } else {
    let newNumber = number.substring(0, number.length - 1)
    screen.value = newNumber;
  }
}

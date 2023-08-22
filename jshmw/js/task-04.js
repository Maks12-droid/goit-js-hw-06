
let counterValue = 0;
const valueSpan = document.getElementById('value');

function updateCounterDisplay() {
  valueSpan.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  updateCounterDisplay();
}

function decrement() {
  counterValue -= 1;
  updateCounterDisplay();
}

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

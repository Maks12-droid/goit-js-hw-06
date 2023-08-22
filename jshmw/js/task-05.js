const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateName() {
  const inputText = nameInput.value.trim();
  nameOutput.textContent = inputText === '' ? 'Anonymous' : inputText;
}

nameInput.addEventListener('input', updateName);
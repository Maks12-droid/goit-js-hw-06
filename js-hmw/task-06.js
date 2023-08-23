const validationInput = document.getElementById('validation-input');

function handleInputBlur(event) {
  const expectedLength = parseInt(event.target.getAttribute('data-length'), 10);
  const inputValue = event.target.value.trim();
  const isValid = inputValue.length === expectedLength;

  if (isValid) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
}

validationInput.addEventListener('blur', handleInputBlur);


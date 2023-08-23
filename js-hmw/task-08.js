const loginForm = document.querySelector('.login-form');

function handleFormSubmit(event) {
  event.preventDefault(); 

  const formData = new FormData(event.target); 
  const dataObject = {};

  formData.forEach((value, name) => {
    dataObject[name] = value; 
  });

  if (!dataObject.email || !dataObject.password) {
    alert('All fields must be filled.');
  } else {
    console.log(dataObject); 
    loginForm.reset(); 
  }
}

loginForm.addEventListener('submit', handleFormSubmit);


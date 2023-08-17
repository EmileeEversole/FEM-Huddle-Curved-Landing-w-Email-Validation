const form = document.querySelector('form');
const errorText = document.querySelector('.error-text')

// validate email upon form submission //
form.addEventListener('submit', validateEmail);

// email validation //
function validateEmail (e) {

  // prevent default validation/actions //
  e.preventDefault();

  const input = document.querySelector("input");
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const email = document.querySelector('.email');

  // error //
  if (!regEx.test(input.value)) {
    form.classList.add('error');
  }

  // validated //
  else{
    form.classList.remove('error');
  }

  // reset email field //
  input.value = '';
}
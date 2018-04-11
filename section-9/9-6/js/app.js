document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e) {
  const re = /^[a-zA-Z]{2,10}$/;
  validateField(e.target, re);
}

function validateZip(e) {
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  validateField(e.target, re);
}

function validateEmail(e) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  validateField(e.target, re);
}

function validatePhone(e) {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  validateField(e.target, re);
}

function validateField(target, expression) {
  
  if (!expression.test(target.value)) {
    target.classList.add('is-invalid');
  } else {
    target.classList.remove('is-invalid');
  }
}
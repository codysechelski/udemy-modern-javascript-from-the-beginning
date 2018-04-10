document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e) {
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(e.target.value)) {
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}

function validateZip(e) {
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(e.target.value)) {
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}

function validateEmail(e) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(e.target.value)) {
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}

function validatePhone(e) {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(e.target.value)) {
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}

function validateField(target,expression){

}
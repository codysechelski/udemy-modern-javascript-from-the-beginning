document.getElementById('name').addEventListener('blur', function(e){validateField(e.target)});
document.getElementById('zip').addEventListener('blur', function(e){validateField(e.target)});
document.getElementById('email').addEventListener('blur', function(e){validateField(e.target)});
document.getElementById('phone').addEventListener('blur', function(e){validateField(e.target)});


function validateField(target) {
  console.log(target);
  
  let expression = validationRules[target.id].exp;
  let message = validationRules[target.id].msg;
  if (!expression.test(target.value)) {
    target.nextElementSibling.textContent = message;
    target.classList.add('is-invalid');
  } else {
    target.nextElementSibling.textContent = '';
    target.classList.remove('is-invalid');
  }
}


let validationRules = {
  name : {exp: /^[a-zA-Z]{2,10}$/, msg: 'Name must be between 2 and 10 characters, bro'},
  zip : {exp: /^[0-9]{5}(-[0-9]{4})?$/, msg: 'Enter a valid Zip Code'},
  email : {exp: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, msg: 'Enter a valid Email Address'},
  phone : {exp: /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/, msg: 'Enter a valid Phone Number'}
}
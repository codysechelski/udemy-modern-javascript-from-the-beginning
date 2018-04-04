document.querySelector('#loan-form').addEventListener('submit', function(e){
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 200);
  
  e.preventDefault();
});

function calculateResults() {
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  
//compute monthly paymenys
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    console.log(monthly)
    monthlyPayment.textContent = monthly.toFixed(2);
    totalPayment.textContent = (monthly * calculatedPayments).toFixed(2);
    totalInterest.textContent = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  }
  else {
    document.getElementById('loading').style.display = 'none';
    showError('Please check your numbers');
  }
}

function showError(errorMsg) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(errorMsg));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError,3000);
}

function clearError() {
  document.querySelector('.alert-danger').remove();
} 
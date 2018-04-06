document.getElementById('UI-btn-get-customer').addEventListener('click', loadCustomer);
//document.getElementById('UI-btn-get-customers').addEventListener('click',loadCustomers);

function loadCustomer(e) {
  const ui = new UI;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data/customer.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      ui.displayResults(JSON.parse(this.responseText))
    } else {
      ui.showAlert(`Woops! Error: ${this.status}-${this.statusText}`);
    }
  }
  xhr.send();
}


function UI() {}
UI.prototype.showAlert = function (msg, alertType) {
  const alert = document.createElement('div');
  alert.className = `alert ${alertType}`;
  alert.textContent = msg;
  document.getElementById('alerts').appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 3000);
}
UI.prototype.displayResults = function (customers) {
  const
    output = document.getElementById('output');
    title = document.createElement('h3'),
    collection = document.createElement('ul');

    output.innerHTML = '';

  title.textContent = 'Customers';

  if (Array.isArray(customers)) {
    customers.forEach(function (customer) {
      const item = document.createElement('li');
      item.innerHTML = `
        ${customer.name}
        <ul>
          <li><strong>Company:</strong> ${customer.company}</li>
          <li><strong>Phone:</strong> ${customer.phone}</li>
        </ul>
      `;
      collection.appendChild(item);
    });
  } else {
    const item = document.createElement('li');
    item.innerHTML = `
        ${customers.name}
        <ul>
          <li><strong>Company:</strong> ${customers.company}</li>
          <li><strong>Phone:</strong> ${customers.phone}</li>
        </ul>
      `;
    collection.appendChild(item);
  }

  output.appendChild(title);
  output.appendChild(collection);
}
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getData);
const ui = new UI();

function getData() {
  fetch('https://swapi.co/api/people/')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      ui.displayPeople(data);
    });
}

function getJson() {
  fetch('data/posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      ui.displayPosts(data);
    });
}

function getText() {
  fetch('data/test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      ui.displayResults(data);
    });
}

function UI() { }
UI.prototype.displayResults = function(results){
  const output = document.getElementById('output');
  output.innerHTML = '';
  if (Array.isArray()) {
    const list = document.createElement('ul');
    results.forEach(function (item) {
      list.innerHTML += `<li>${item}</li>`;
    });
    output.appendChild(list);
  }
  else {
    output.innerHTML = `<p>${results}</p>`;
  }
}
UI.prototype.displayPosts = function (results) {
  const output = document.getElementById('output');
  output.innerHTML = '';
  results.forEach(function (post) {
    output.innerHTML += `
      <article>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
      </article>
      <hr>
    `;
  });
}
UI.prototype.displayPeople = function (results) {
  const output = document.getElementById('output');
  output.innerHTML = '';
  results.results.forEach(function (post) {
    output.innerHTML += `
      <article>
        <h4>${post.name}</h4>
      </article>
      <hr>
    `;
  });
}

UI.prototype.showAlert = function(title,msg,alertType){
  const alert = document.createElement('div'),
  alertTitle = document.createElement('h5');
  let icon;
  switch(alertType){
    case 'success':
      icon = 'fal fa-check';
      break;
    case 'info':
      icon = 'fal fa-info-circle';
      break;
    case 'warning':
      icon = 'fal fa-exclamation-triangle';
      break;
    case 'error':
      icon = 'fal fa-exclamation-circle';
      break;
    default:
      icon = 'fal fa-bell';
  }

  alert.className = `alert fade ${alertType}`;
  alertTitle.innerHTML = `<i class="${icon}"></i> ${title}`;
  alert.appendChild(alertTitle);
  alert.appendChild(document.createTextNode(msg));
  document.getElementById('alerts').appendChild(alert);
  
  setTimeout(function(){
    alert.classList.remove('fade');
  }, 1);
  
  setTimeout(function(){
    alert.classList.add('fade');
    setTimeout(function(){
      alert.remove();
    }, 1000);
  }, 3000);  
}
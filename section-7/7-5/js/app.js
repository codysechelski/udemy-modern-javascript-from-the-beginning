document.getElementById('getJokes').addEventListener('click',getJokes);

function getJokes(e){
  const
   ui = new UI,
   xhr = new XMLHttpRequest(),
   numberOfJokes = document.getElementById('number').value
   endpoint = `https://api.icndb.com/jokes/random/${numberOfJokes}`;

  xhr.open('GET',endpoint,true);

  xhr.onload = function(){
    if(this.status === 200){
      ui.displayResults(JSON.parse(this.responseText).value);
    }
    else{
      ui.showAlert('error','error');
    }
  }

  xhr.send(); 
  e.preventDefault();
}

function UI(){}
UI.prototype.showAlert = function(msg,alertType){
  let alert = document.createElement('div');
  alert.className = `alert ${alertType}`;
  alert.textContent = msg;
  document.getElementById('alerts').appendChild(alert);

  setTimeout(function(){
    alert.remove();
  }, 3000);  
}
UI.prototype.displayResults = function (jokeData) {
  const
    output = document.getElementById('output');
    title = document.createElement('h3'),
    collection = document.createElement('ul');

    output.innerHTML = '';

  title.textContent = 'Jokes';

  if (Array.isArray(jokeData)) {
    jokeData.forEach(function (jokeItem) {
      const item = document.createElement('li');
      item.innerHTML = jokeItem.joke;
      collection.appendChild(item);
    });
  } else {
    const item = document.createElement('li');
    item.innerHTML = jokeData.joke;
    collection.appendChild(item);
  }

  output.appendChild(title);
  output.appendChild(collection);
}
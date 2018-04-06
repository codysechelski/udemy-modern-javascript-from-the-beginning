document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  //create an XHR Object
  const xhr = new XMLHttpRequest();

  xhr.open('GET','data/data.json',true);

  xhr.onprogress = function(){
    document.getElementById('button').style.background = 'red';
  }

  xhr.onload = function(){
    const ui = new UI;
    console.log(this);
    if(this.status === 200){
      console.table(JSON.parse(this.responseText));
      const output = document.getElementById('output');

      JSON.parse(this.responseText).forEach(function(book){
        const
          card = document.createElement('div'),
          title = document.createElement('h2'),
          details = document.createElement('ul');
        
        card.className = 'card one-half column';
        title.textContent = book.Title;
        card.appendChild(title);
        details.innerHTML = `
          <li><strong>Author:</strong> ${book.Author}</li>
          <li><strong>ISBN:</strong> ${book.ISBN}</li>
        `;
        card.appendChild(details);
        output.appendChild(card);
      });

      ui.showAlert('Data retrieved', 'success');
    }
    else{
      ui.showAlert(`${this.statusText}.Error code ${this.status}`, 'error');
    }
    document.getElementById('button').style.background = 'transparent';
  }

  xhr.send();
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
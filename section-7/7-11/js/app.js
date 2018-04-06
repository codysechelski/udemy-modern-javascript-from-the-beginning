document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  //create an XHR Object
  const xhr = new XMLHttpRequest();

  xhr.open('GET','data/data.txt',true);

  xhr.onprogress = function(){
    document.getElementById('button').style.background = 'red';
  }

  xhr.onload = function(){
    const ui = new UI;
    console.log(this);
    if(this.status === 200){
      console.log(this.responseText);
      document.getElementById('output').textContent = this.responseText;
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
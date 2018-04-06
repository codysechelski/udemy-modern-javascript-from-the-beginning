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
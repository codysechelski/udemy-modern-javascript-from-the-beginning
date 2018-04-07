const ui = new UI();
document.getElementById('success').addEventListener('click', function () {
  ui.showAlert('Great Job','You saved a file!','success');
});

document.getElementById('info').addEventListener('click', function () {
  ui.showAlert('Did you know?', 'The human head weights about 8 pounds.', 'info');
});

document.getElementById('warning').addEventListener('click', function () {
  ui.showAlert('Hold up there...', 'I think there\'s a snake in your book', 'warning');
});

document.getElementById('error').addEventListener('click', function () {
  ui.showAlert('EEEEKKKK...', 'Something bad has happened. Better call the Justice League', 'error');
});

document.getElementById('generic').addEventListener('click', function () {
  ui.showAlert('Tip of the day', 'If you don\'t like dogs, don\'t go to the dog park.', '');
});


function UI(){}
UI.prototype.showAlert = function(title,msg,alertType){
  const alert = document.createElement('div'),
  alertTitle = document.createElement('h5');
  let icon;
  switch(alertType){
    case 'success':
      icon = 'fal fa-check-circle';
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
  }, 5000);  
}
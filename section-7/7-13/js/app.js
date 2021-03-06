const http = new EasyHTTP();

http.get('https://dog.ceo/api/breeds/list/all')
//http.get('https://jira:8443/rest/greenhopper/1.0/rapid/charts/sprintreport?rapidViewId=12792&sprintId=14084',
// {
//   headers: {
//     "Authorization" : "Basic c3h1YzNzOkRGJGNzMDA2",
//     "Content-Type": "application/json"
//   }
// })
  .then(data => console.log(data.message))
  .catch(err => console.log(err));

function UI(){}
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
const http = new easyhttp();

// http.get('https://jsonplaceholder.typicode.com/posts/100', handleGetResponse);

// function handleGetResponse(error, response) {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log(response);
//   }  
// }

// const data = {
//   title: 'voluptas error itaque dicta',
//   body: 'cupiditate error itaque dicta'
// }

// http.post('https://jsonplaceholder.typicode.com/posts', data, handlePostResponse);
// function handlePostResponse(error, response) {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log(response);
//   }  
// }

// const data = {
//   title: 'This is a new title for post 11',
//    body: 'cupiditate error itaque dicta'
// }

// http.put('https://jsonplaceholder.typicode.com/posts/11', data, handlePostResponse);
// function handlePostResponse(error, response) {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log(response);
//   }
// }

http.delete('https://jsonplaceholder.typicode.com/posts/100', handleGetResponse);

function handleGetResponse(error, response) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(response);
  }  
}


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
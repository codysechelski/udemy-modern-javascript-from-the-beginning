class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <h2>${user.login} ${user.name !== null ? '(' + user.name + ')' : ''}</h2>
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-warning">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Public Followers: ${user.followers}</span>
            <span class="badge badge-info">Public Following: ${user.following}</span>
            <hr>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Public Repositories</h3>
      <div id="repos"></a>
    `;
  }

  showRepos(repos) {
    let output = '';
    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-warning">Public Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Public Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
      document.getElementById('repos').innerHTML = output;
    });
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(msg, className) {
    const alert = document.createElement('div');
    let icon;
    switch (className) {
      case 'success':
        icon = 'fal fa-check';
        break;
      case 'info':
        icon = 'fal fa-info-circle';
        break;
      case 'warning':
        icon = 'fal fa-exclamation-triangle';
        break;
      case 'danger':
        icon = 'fal fa-exclamation-circle';
        break;
      default:
        icon = 'fal fa-bell';
    }
    alert.className = `alert fade alert-${className}`;
    alert.innerHTML = `<i class="${icon}"></i> ${msg}`;
    document.getElementById('alerts').appendChild(alert);

    setTimeout(function () {
      alert.classList.remove('fade');
    }, 1);

    setTimeout(function () {
      alert.classList.add('fade');
      setTimeout(function () {
        alert.remove();
      }, 1000);
    }, 3000);

  }
}


// UI.prototype.showAlert = function (title, msg, alertType) {
//   const alert = document.createElement('div'),
//     alertTitle = document.createElement('h5');
//   let icon;
//   switch (alertType) {
//     case 'success':
//       icon = 'fal fa-check';
//       break;
//     case 'info':
//       icon = 'fal fa-info-circle';
//       break;
//     case 'warning':
//       icon = 'fal fa-exclamation-triangle';
//       break;
//     case 'error':
//       icon = 'fal fa-exclamation-circle';
//       break;
//     default:
//       icon = 'fal fa-bell';
//   }

//   alert.className = `alert fade ${alertType}`;
//   alertTitle.innerHTML = `<i class="${icon}"></i> ${title}`;
//   alert.appendChild(alertTitle);
//   alert.appendChild(document.createTextNode(msg));
//   document.getElementById('alerts').appendChild(alert);

//   setTimeout(function () {
//     alert.classList.remove('fade');
//   }, 1);

//   setTimeout(function () {
//     alert.classList.add('fade');
//     setTimeout(function () {
//       alert.remove();
//     }, 1000);
//   }, 3000);
// }
class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fal fa-edit"></i> Edit
            </a>
            <a href="#" class="edit card-link text-danger" data-id="${post.id}">
              <i class="fal fa-trash-alt"></i> Delete
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
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

export const ui = new UI();
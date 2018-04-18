class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.cardForm = document.querySelector('.card-form');
    this.formLastElement = document.querySelector('.form-end');
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
            <a href="#" class="edit card-link text-success" data-id="${post.id}">
              <i class="fal fa-edit"></i> Edit
            </a>
            <a href="#" class="delete card-link text-danger" data-id="${post.id}">
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

  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
    
    this.changeFormState('edit');
  }

  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.classList.remove('btn-primary');
      this.postSubmit.classList.add('btn-warning');

      //create a cancel button
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-outline-light btn-block';
      button.appendChild(document.createTextNode('Cancel'));
      this.cardForm.insertBefore(button, this.formLastElement);
    }
    else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.classList.add('btn-primary');
      this.postSubmit.classList.remove('btn-warning');

      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      this.idInput.value = '';
      this.clearFields();
    }
  }

  showAlert(msg, className) {
    const alert = document.createElement('div');
    let icon;
    switch (className) {
      case 'success':
        icon = 'fal fa-fw fa-check';
        break;
      case 'info':
        icon = 'fal fa-fw fa-info-circle';
        break;
      case 'warning':
        icon = 'fal fa-fw fa-exclamation-triangle';
        break;
      case 'danger':
        icon = 'fal fa-fw fa-exclamation-circle';
        break;
      default:
        icon = 'fal fa-fw fa-bell';
    }
    alert.className = `alert fade alert-${className}`;
    alert.innerHTML = `<i class="${icon}"></i>&emsp;${msg}`;
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
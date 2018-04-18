import { http } from './http';
import { ui } from './ui';

//get posts onm DOM loas
document.addEventListener('DOMContentLoaded', getPosts);

//listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

//listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

//listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

//listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

//Get Posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

//Add Post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  if (title === '' || body === '') {
    ui.showAlert('Post Title and Post Body are required','warning');
  } else {

    const data = {
      title,
      body
    }

    if (id === '') {
      
      //Create Post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post Added', 'success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => console.log(err));
    } else {
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post Updated', 'success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch(err => console.log(err));
    }
    
  }
}

function deletePost(e) {
  if (e.target.classList.contains('delete') ||
      e.target.parentElement.classList.contains('delete') ||
      e.target.parentElement.parentElement.classList.contains('delete')) {
    
    //find the a tag
    let target = e.target;
    let link = e.target.nodeName.toLowerCase() === 'a' ? e.target : null;

    while (link === null) {
      target = target.parentElement;
      if (target.nodeName.toLowerCase() === 'a') {
        link = target;
      }
    }

    //once the a tag is fond, get he data-id
    const id = link.dataset.id;
    
    http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post Deleted', 'success');
        getPosts();
      })
      .catch(err => console.log(err));
    
    e.preventDefault();
  }
}

function enableEdit(e) {
  if (e.target.classList.contains('edit') ||
      e.target.parentElement.classList.contains('edit') ||
      e.target.parentElement.parentElement.classList.contains('edit')) {
    
    //find the a tag
    let target = e.target;
    let link = e.target.nodeName.toLowerCase() === 'a' ? e.target : null;

    while (link === null) {
      target = target.parentElement;
      if (target.nodeName.toLowerCase() === 'a') {
        link = target;
      }
    }

    //once the a tag is fond, get he data-id
    const id = link.dataset.id;
    const body = link.previousElementSibling.textContent;
    const title = link.previousElementSibling.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }

    //fill the form
    ui.fillForm(data);
    

    e.preventDefault();
  }
}

function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
    e.preventDefault();
  }
}
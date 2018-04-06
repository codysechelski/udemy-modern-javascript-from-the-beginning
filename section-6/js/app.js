console.log('es5');

//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


//UI Constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  //create row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td class="actions"><a href="#" class="delete" title="Remove"><i class="fal fa-times-circle"></i></a></td>`;
  list.appendChild(row);
}

UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (msg, cssClass) {
  const alertMsg = document.createElement('div');
  alertMsg.className = `alert ${cssClass}`;
  alertMsg.appendChild(document.createTextNode(msg));
  document.querySelector('.container').insertBefore(alertMsg, document.getElementById('book-form'));
  
  setTimeout(function () {
    document.querySelector('.alert').remove();
  },1500);
}

UI.prototype.deleteBook = function(target){
  if(target.parentElement.classList.contains('delete')){
    target.parentElement.parentElement.parentElement.remove();
  }
}


//Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get Form Values
  const
    title  = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn   = document.getElementById('isbn').value;
  
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI;

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please complete all fields', 'error');
  }
  else {
    ui.addBookToList(book);
    ui.showAlert(`${book.title} has been added`, 'success');
    ui.clearFields();
  }

  
  //Don't reload the page
  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book Removed','success');
  e.preventDefault();
});
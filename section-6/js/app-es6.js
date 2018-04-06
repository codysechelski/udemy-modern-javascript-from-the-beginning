console.log('es6');

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  showAlert(msg, cssClass) {
    const alertMsg = document.createElement('div');
    alertMsg.className = `alert ${cssClass}`;
    alertMsg.appendChild(document.createTextNode(msg));
    document.querySelector('.container').insertBefore(alertMsg, document.getElementById('book-form'));

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 1500);
  }

  deleteBook(target) {
    if (target.parentElement.classList.contains('delete')) {
      target.parentElement.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

}

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }
    else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI;
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }

  static removeBook(isbn){
    const books = Store.getBooks();
    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    });
    localStorage.setItem('books',JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLOaded',Store.displayBooks());

document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get Form Values
  const
    title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI;

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please complete all fields', 'error');
  } else {
    ui.addBookToList(book);
    Store.addBook(book);
    ui.showAlert(`${book.title} has been added`, 'success');
    ui.clearFields();
  }


  //Don't reload the page
  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();
  ui.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.parentElement.previousElementSibling.textContent);
  ui.showAlert('Book Removed', 'success');
  e.preventDefault();
});
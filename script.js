const myLibrary = []; // Array to store the books

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



// Add a book to the library
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    var title = document.getElementById('bookTitle').value;
    var author = document.getElementById('author').value;
    var genre = document.getElementById('genre').value;
    var pages = document.getElementById('pages').value;

    // Create a new book object
    var newBook = document.createElement('div');
    newBook.innerHTML = `<h2>${title}</h2><p>By: ${author}</p><p>Genre: ${genre}</p><p>Pages: ${pages}</p>`;

    // Add the new book to the library
    document.querySelector('.book-list').appendChild(newBook);

    event.target.reset(); // Reset the form
});










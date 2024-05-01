const myLibrary = []; // Array to store the books

// Book constructor
function Book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

// Book prototype to toggle the read status
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

// Function to add a book to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Function to display the books
function displayBooks() {
    // Clear the book list
    var bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';

    // Add each book to the book list
    myLibrary.forEach(function(book, index) {
        var bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.classList.add('roboto-regular'); 
        bookDiv.dataset.index = index; // Store the index of the book in the dataset

        var title = document.createElement('div');
        title.classList.add('book-title'); 
        title.textContent = book.title;

        var author = document.createElement('div');
        author.classList.add('book-author'); 
        author.textContent = `By: ${book.author}`;

        var genre = document.createElement('div');
        genre.classList.add('book-genre'); e
        genre.textContent = `Genre: ${book.genre}`;

        var pages = document.createElement('div');
        pages.classList.add('book-pages'); 
        pages.textContent = `Pages: ${book.pages}`;

        var read = document.createElement('div');
        read.classList.add('book-read'); 
        read.textContent = `Read: ${book.read}`;

        bookDiv.append(title, author, genre, pages, read);


        // Add a delete button to the book
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', function() {
            // Remove the book from the library
            myLibrary.splice(index, 1);

            // Display the books again
            displayBooks();
        });
        bookDiv.appendChild(deleteButton);

        // Add a read button to the book
        var readButton = document.createElement('button');
        readButton.classList.add('read');
        readButton.innerHTML = book.read ? 'Read' : 'Not Read';
        readButton.addEventListener('click', function() {
            // Toggle the read status of the book
            book.toggleReadStatus();

            // Update the button text
            readButton.innerHTML = book.read ? 'Read' : 'Not Read';
        });
        bookDiv.appendChild(readButton);


        // Add the book to the book list
        bookList.appendChild(bookDiv);
    });
}


// Add a book to the library
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    var title = document.getElementById('bookTitle').value;
    var author = document.getElementById('author').value;
    var genre = document.getElementById('genre').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').checked;


    // Create a new book object
    var newBook = new Book(title, author, genre, pages, read);

    // Add the book to the library
    addBookToLibrary(newBook);

    // Display the books
    displayBooks();

    event.target.reset(); // Reset the form
});










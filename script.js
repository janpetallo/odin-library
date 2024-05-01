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
        genre.classList.add('book-genre'); 
        genre.textContent = `Genre: ${book.genre}`;

        var pages = document.createElement('div');
        pages.classList.add('book-pages'); 
        pages.textContent = `Pages: ${book.pages}`;

        var read = document.createElement('div');
        read.classList.add('book-read'); 
        read.textContent = `Read: ${book.read}`;

        bookDiv.append(title, author, genre, pages); //does not include read to display as text

        var userActions = document.createElement('div');
        userActions.classList.add('user-actions');
        bookDiv.appendChild(userActions);

        // Add a delete button to the book
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> Delete';
        deleteButton.addEventListener('click', function() {
            // Remove the book from the library
            myLibrary.splice(index, 1);

            // Display the books again
            displayBooks();
        });
        userActions.appendChild(deleteButton);

        // Add a read button to the book
        var readButton = document.createElement('button');
        readButton.classList.add('read');
        readButton.innerHTML = book.read ? 
                    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg> Read ' : 
                    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg> Not Read';
        readButton.addEventListener('click', function() {
            // Toggle the read status of the book
            book.toggleReadStatus();

            // Update the button text
            readButton.innerHTML = book.read ? 
                    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg> Read' : 
                    ' <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>Not Read';
        });
        userActions.appendChild(readButton);


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










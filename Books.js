// Function to add a new book to the catalog
function addBook() {
    // Get input values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const reviews = document.getElementById("reviews").value;

    // Create a unique ID for the book (timestamp can be used)
    const bookId = new Date().getTime();

    // Create a book object
    const book = { id: bookId, title, author, genre, reviews };

    // Get the existing books from session storage
    let books = JSON.parse(sessionStorage.getItem("books")) || [];

    // Add the new book to the list
    books.push(book);

    // Save the updated list back to session storage
    sessionStorage.setItem("books", JSON.stringify(books));

    // Clear the form fields
    document.getElementById("bookForm").reset();

    // Update the displayed book list
    displayBookList();
}

// Function to remove a book from the catalog
function removeBook(bookId) {
    // Get the existing books from session storage
    let books = JSON.parse(sessionStorage.getItem("books")) || [];

    // Remove the book with the given ID
    books = books.filter(book => book.id !== bookId);

    // Save the updated list back to session storage
    sessionStorage.setItem("books", JSON.stringify(books));

    // Update the displayed book list
    displayBookList();
}

// Function to display the list of books on the webpage
function displayBookList() {
    // Get the existing books from session storage
    const books = JSON.parse(sessionStorage.getItem("books")) || [];

    // Get the book list element
    const bookList = document.getElementById("bookList");

    // Clear the existing content
    bookList.innerHTML = "";

    // Loop through each book and display it on the webpage
    books.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Title:</strong> ${book.title} |
            <strong>Author:</strong> ${book.author} |
            <strong>Genre:</strong> ${book.genre} |
            <strong>Reviews:</strong> ${book.reviews} |
            <button onclick="removeBook(${book.id})">Remove</button>
        `;
        bookList.appendChild(li);
    });
}

// Function to edit a book in the catalog
function editBook(bookId) {
    // Get the existing books from session storage
    let books = JSON.parse(sessionStorage.getItem("books")) || [];

    // Find the book with the given ID
    const bookToEdit = books.find(book => book.id === bookId);

    if (bookToEdit) {
        // Prompt the user for updated information
        const updatedTitle = prompt("Enter updated title:", bookToEdit.title);
        const updatedAuthor = prompt("Enter updated author:", bookToEdit.author);
        const updatedGenre = prompt("Enter updated genre:", bookToEdit.genre);
        const updatedReviews = prompt("Enter updated reviews:", bookToEdit.reviews);

        // Update the book information
        bookToEdit.title = updatedTitle || bookToEdit.title;
        bookToEdit.author = updatedAuthor || bookToEdit.author;
        bookToEdit.genre = updatedGenre || bookToEdit.genre;
        bookToEdit.reviews = updatedReviews || bookToEdit.reviews;

        // Save the updated list back to session storage
        sessionStorage.setItem("books", JSON.stringify(books));

        // Update the displayed book list
        displayBookList();
    } else {
        alert("Book not found!");
    }
}

// Function to create the HTML for a book item with edit and remove buttons
function createBookListItem(book) {
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>Title:</strong> ${book.title} |
        <strong>Author:</strong> ${book.author} |
        <strong>Genre:</strong> ${book.genre} |
        <strong>Reviews:</strong> ${book.reviews} |
        <button onclick="editBook(${book.id})">Edit</button> |
        <button onclick="removeBook(${book.id})">Remove</button>
    `;
    return li;
}

// Update the displayBookList function to use createBookListItem
function displayBookList() {
    const books = JSON.parse(sessionStorage.getItem("books")) || [];
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(book => {
        const li = createBookListItem(book);
        bookList.appendChild(li);
    });
}

// Call the displayBookList function on page load
displayBookList();




// Function to add a new book to the catalog
function addBook() {
    // Get input values
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const reviews = document.getElementById("reviews").value.trim();

    // Validate input fields
    if (title === "" || author === "" || genre === "" || reviews === "") {
        alert("Please fill in all fields.");
        return;
    }

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

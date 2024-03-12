// Function to edit a book in the catalog
function editBook(bookId) {
    // Get the existing books from session storage
    let books = JSON.parse(sessionStorage.getItem("books")) || [];

    // Find the book with the given ID
    const bookToEdit = books.find(book => book.id === bookId);

    if (bookToEdit) {
        // Prompt the user for updated information
        const updatedTitle = prompt("Enter updated title:", bookToEdit.title);
        if (updatedTitle === null || updatedTitle.trim() === "") {
            alert("Title cannot be empty. Operation cancelled.");
            return;
        }
        const updatedAuthor = prompt("Enter updated author:", bookToEdit.author);
        if (updatedAuthor === null) {
            alert("Operation cancelled.");
            return;
        }
        const updatedGenre = prompt("Enter updated genre:", bookToEdit.genre);
        if (updatedGenre === null) {
            alert("Operation cancelled.");
            return;
        }
        const updatedReviews = prompt("Enter updated reviews:", bookToEdit.reviews);
        if (updatedReviews === null) {
            alert("Operation cancelled.");
            return;
        }

        // Update the book information
        bookToEdit.title = updatedTitle;
        bookToEdit.author = updatedAuthor;
        bookToEdit.genre = updatedGenre;
        bookToEdit.reviews = updatedReviews;

        // Save the updated list back to session storage
        sessionStorage.setItem("books", JSON.stringify(books));

        // Update the displayed book list
        displayBookList();
    } else {
        alert("Book not found!");
    }
}

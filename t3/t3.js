function promptForBook() {
    // Prompt user for book details (title, author, publication year)
    var bookTitle = prompt("Enter the book title:");
    var bookAuthor = prompt("Enter the author:");
    var publicationYearInput = prompt("Enter the publication year:");
    // Convert publicationYearInput to a number
    var bookPublicationYear = parseInt(publicationYearInput);
    // Create an object of type 'Book' with the entered values
    var book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}
// Call the promptForBook function to get the book details
var bookDetails = promptForBook();
// Display the details of the book object to the user
console.log("Book Details:");
console.log("Title: ".concat(bookDetails.title));
console.log("Author: ".concat(bookDetails.author));
console.log("Publication Year: ".concat(bookDetails.publicationYear));

type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };
  
  function promptForBook(): Book {
    // Prompt user for book details (title, author, publication year)
    const bookTitle = prompt("Enter the book title:");
    const bookAuthor = prompt("Enter the author:");
    const publicationYearInput = prompt("Enter the publication year:");
  
    // Convert publicationYearInput to a number
    const bookPublicationYear = parseInt(publicationYearInput);
  
    // Create an object of type 'Book' with the entered values
    const book: Book = {
      title: bookTitle,
      author: bookAuthor,
      publicationYear: bookPublicationYear,
    };
  
    return book;
  }
  
  // Call the promptForBook function to get the book details
  const bookDetails = promptForBook();
  
  // Display the details of the book object to the user
  console.log("Book Details:");
  console.log(`Title: ${bookDetails.title}`);
  console.log(`Author: ${bookDetails.author}`);
  console.log(`Publication Year: ${bookDetails.publicationYear}`);

  
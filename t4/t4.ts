
// Define the 'ElectronicDevice' type
type ElectronicDevice = {
  brand: string;
  model: string;
  type: 'electronic';
};

// Define the 'Book' type
type Book = {
  title: string;
  author: string;
  type: 'book';
};

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
  // Prompt user for electronic device details (brand and model)
  const brand = prompt("Enter the brand of the electronic device:");
  const model = prompt("Enter the model of the electronic device");

  return {
    brand,
    model,
    type: 'electronic',
  };
}

function createBook(): Book {
  // Prompt user for book details (title and author)
  const title = prompt("Enter the title of the book:");
  const author = prompt("Enter the author of the book");

  return {
    title,
    author,
    type: 'book',
  };
}

// Create instances of 'Product'
const electronicProduct: Product = createElectronicDevice();
const bookProduct: Product = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
  console.log('Product Details:');
  if (product.type === 'electronic') {
    console.log(`Type: Electronic Device`);
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
  } else {
    console.log(`Type: Book`);
    console.log(`Title: ${product.title}`);
    console.log(`Author: ${product.author}`);
  }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);

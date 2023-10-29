// Implement instances of the 'Product' type
function createElectronicDevice() {
    // Prompt user for electronic device details (brand and model)
    var brand = prompt("Enter the brand of the electronic device:");
    var model = prompt("Enter the model of the electronic device");
    return {
        brand: brand,
        model: model,
        type: 'electronic',
    };
}
function createBook() {
    // Prompt user for book details (title and author)
    var title = prompt("Enter the title of the book:");
    var author = prompt("Enter the author of the book");
    return {
        title: title,
        author: author,
        type: 'book',
    };
}
// Create instances of 'Product'
var electronicProduct = createElectronicDevice();
var bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log('Product Details:');
    if (product.type === 'electronic') {
        console.log("Type: Electronic Device");
        console.log("Brand: ".concat(product.brand));
        console.log("Model: ".concat(product.model));
    }
    else {
        console.log("Type: Book");
        console.log("Title: ".concat(product.title));
        console.log("Author: ".concat(product.author));
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);

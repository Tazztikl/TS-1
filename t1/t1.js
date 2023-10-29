// Create an empty array named 'cart' to store the items
var cart = [];
// Implement a loop to prompt the user for item details
while (true) {
    // Prompt user for item name
    var itemName = prompt("Enter the item name:");
    // Break the loop if an empty item name is entered
    if (itemName === "") {
        break;
    }
    // Prompt user for item price and quantity
    var itemPrice = parseFloat(prompt("Enter the item price:"));
    var itemQuantity = parseFloat(prompt("Enter the item quantity:"));
    // Create an item object and add it to the 'cart' array
    var newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
var totalCost = cart.map(function (item) { return item.price * item.quantity; }).reduce(function (sum, cost) { return sum + cost; }, 0);
// Display the total cost to the user
console.log("Total cost of the shopping cart: $".concat(totalCost.toFixed(2)));


interface Item {
    name: string;
    price: number;
    quantity: number;
  }
  
  // Create an empty array named 'cart' to store the items
  const cart: Item[] = [];
  
  
  while (true) {
    
    const itemName = prompt("Enter the item name:");
  
    
    if (itemName === "") {
      break;
    }
  
    
    const itemPrice = parseFloat(prompt("Enter the item price:"));
    const itemQuantity = parseFloat(prompt("Enter the item quantity:"));
  
    // Create an item object and add it to the 'cart' array
    const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
  }
  
  // Calculate the total cost using the 'map' and 'reduce' functions
  const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);
  
  // Display the total cost to the user
  console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
  
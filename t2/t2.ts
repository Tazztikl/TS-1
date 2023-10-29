function squareRoot(num: number | null | undefined): number | string {
  // Check if the input is undefined or null. If so, return 'Input is undefined or null.'
  if (num === undefined || num === null) {
    return 'Input is undefined or null.';
  }
    
  // Check if the input is a valid number. If not, return 'Invalid input. Please enter a valid number.'
  if (typeof num !== 'number' || isNaN(num)) {
    return 'Invalid input. Please enter a valid number.';
  }
    
  // Handle cases where the input is negative. If the number is negative, return 'Cannot calculate square root of a negative number.'
  if (num < 0) {
    return 'Cannot calculate square root of a negative number.';
  }
 
  // Calculate the square root and return the result
  const sqrt = Math.sqrt(num);
  return sqrt;
}

// Prompt the user to enter a number
const userInput = prompt("Enter a number:");

// Convert user input to a number or keep it undefined if empty
const numberInput: number | undefined = userInput ? parseFloat(userInput) : undefined;

// Call the squareRoot function and display the result
const result = squareRoot(numberInput);
console.log(result);

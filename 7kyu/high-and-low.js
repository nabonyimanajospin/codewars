// This function receives a string of space-separated numbers
// and returns a string with the highest and lowest number, separated by a space.

// Example: highAndLow("1 2 -3 4 5") ➜ "5 -3"

function highAndLow(numbers) {
  // Convert the string into an array of integers
  const nums = numbers.split(" ").map(Number);

  // Use Math.max and Math.min with the spread operator
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  // Return them in the format: "max min"
  return `${max} ${min}`;
}

// Example usage:
console.log(highAndLow("1 2 3 4 5"));     
console.log(highAndLow("1 2 -3 4 5"));    
console.log(highAndLow("1 9 3 4 -5"));  
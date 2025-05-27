// Function to square every digit of a number and concatenate the results

function squareDigits(num) {
  // Convert the number to a string to loop through each digit
  return Number(
    String(num)
      .split('')               // Split into array of characters
      .map(d => d * d)         // Square each digit
      .join('')                // Join back into one string
  );
}

// Example usage:
console.log(squareDigits(9119)); // Output: 811181
console.log(squareDigits(765));  // Output: 493625

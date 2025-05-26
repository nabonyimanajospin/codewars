// Function to remove the first and last characters of a string
function removeChar(str) {
  // We use slice(1, -1) to exclude the first and last characters
  return str.slice(1, -1);
}

// Example usage (for testing):
console.log(removeChar("hello"));     // Expected output: "ell"
console.log(removeChar("JavaScript")); // Expected output: "avaScrip"
console.log(removeChar("ab"));        // Expected output: "" (empty string)

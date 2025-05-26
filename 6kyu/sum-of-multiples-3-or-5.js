// Function to calculate the sum of all natural numbers below a given number
// that are multiples of 3 or 5
function solution(number) {
  // Return 0 if the input number is negative
  if (number < 0) return 0;

  let sum = 0;

  // Loop from 1 up to (but not including) the given number
  for (let i = 1; i < number; i++) {
    // Check if the current number is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// ✅ Example usage:
console.log(solution(10)); // Expected output: 23 (3 + 5 + 6 + 9)
console.log(solution(0));  // Expected output: 0
console.log(solution(-5)); // Expected output: 0

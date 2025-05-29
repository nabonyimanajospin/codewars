// This function calculates the sum of all integers from 1 to `num` (inclusive).
// For example: if num = 8, it returns 1+2+3+...+8 = 36

function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// ✅ Example usage:
console.log(summation(2)); // Output: 3  (1 + 2)
console.log(summation(8)); // Output: 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

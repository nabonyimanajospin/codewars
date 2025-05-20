// ✅ Codewars Challenge: Make a number negative
// ✅ Difficulty: 8kyu
// ✅ Description:
// In this simple assignment, I am given a number
// and have to return the negative version of that number.
// If the number is already negative or zero, return it as is.

function makeNegative(num) {
  // If number is greater than 0, return its negative
  // Otherwise (if zero or already negative), return the number unchanged
  return num > 0 ? -num : num;
}

// ✅ Example test cases
console.log(makeNegative(1));     // ➞ -1
console.log(makeNegative(-5));    // ➞ -5
console.log(makeNegative(0));     // ➞ 0
console.log(makeNegative(0.12));  // ➞ -0.12

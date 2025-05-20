// ✅ Codewars Challenge: Sum of positive numbers
// ✅ Difficulty: 8kyu
// ✅ Description:
// Given an array of numbers, return the sum of all positive values.
// If there are no positive numbers, return 0.

function positiveSum(arr) {
  // Filter the array to keep only positive numbers, then sum them
  return arr.filter(n => n > 0).reduce((sum, num) => sum + num, 0);
}

// ✅ Example test cases
console.log(positiveSum([1, -4, 7, 12])); // ➞ 20
console.log(positiveSum([-1, -2, -3]));   // ➞ 0
console.log(positiveSum([]));             // ➞ 0
console.log(positiveSum([5, 10, -15]));   // ➞ 15

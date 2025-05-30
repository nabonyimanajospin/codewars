// Kata: Find the smallest integer in the array
// This function takes an array of integers and returns the smallest one.
// Example: findSmallestInt([34, 15, 88, 2]) => 2

function findSmallestInt(arr) {
  return Math.min(...arr); // Uses the spread operator to apply Math.min to all array elements
}

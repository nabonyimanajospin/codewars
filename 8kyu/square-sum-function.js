function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

// Example usage:
console.log(squareSum([1, 2, 2])); // Output: 9

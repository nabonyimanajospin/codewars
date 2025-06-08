function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}

// Examples
console.log(digitize(35231)); // ➞ [1, 3, 2, 5, 3]
console.log(digitize(0));     // ➞ [0]

function century(year) {
  return Math.ceil(year / 100);
}

// Examples
console.log(century(1705)); // Output: 18
console.log(century(1900)); // Output: 19
console.log(century(1601)); // Output: 17
console.log(century(2000)); // Output: 20
console.log(century(2742)); // Output: 28

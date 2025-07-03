function XO(str) {
  str = str.toLowerCase();
  const xCount = str.split('').filter(c => c === 'x').length;
  const oCount = str.split('').filter(c => c === 'o').length;
  return xCount === oCount;
}

// Example usage:
console.log(XO("xo"));     // true
console.log(XO("xxOo"));   // true
console.log(XO("xxxm"));   // false
console.log(XO("Oo"));     // false
console.log(XO("ooom"));   // false

/*Check to see if a string has the same amount of 'x's and 'o's.
The function must return a boolean value and must be case-insensitive.*/
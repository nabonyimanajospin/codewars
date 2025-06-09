function lovefunc(flower1, flower2) {
  return (flower1 % 2 !== flower2 % 2);
}

// Examples
console.log(lovefunc(4, 7));  // true (even + odd = in love)
console.log(lovefunc(2, 2));  // false (even + even = not in love)
console.log(lovefunc(1, 3));  // false (odd + odd = not in love)

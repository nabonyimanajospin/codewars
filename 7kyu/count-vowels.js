// Function to count vowels in a given string
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(char => vowels.includes(char)).length;
}

// Example usage:
console.log(getCount("hello world"));     // Expected: 3 (e, o, o)
console.log(getCount("javascript"));      // Expected: 3 (a, a, i)
console.log(getCount("gym"));             // Expected: 0 (no vowels)
console.log(getCount("aeiou"));           // Expected: 5 (all vowels)

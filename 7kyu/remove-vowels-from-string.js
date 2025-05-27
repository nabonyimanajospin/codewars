// Function to remove all vowels from a given string
// Vowels considered: a, e, i, o, u (both lowercase and uppercase)

function disemvowel(str) {
  // Use regular expression to replace all vowels with an empty string
  return str.replace(/[aeiouAEIOU]/g, '');
}

// ✅ Example usage:
console.log(disemvowel("This website is for losers LOL!")); // Output: "Ths wbst s fr lsrs LL!"
console.log(disemvowel("JavaScript is awesome"));           // Output: "JvScrpt s wsm"

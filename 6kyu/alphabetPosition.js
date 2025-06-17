function alphabetPosition(text) {
  return text
    .toLowerCase() // make everything lowercase
    .split('')     // split string into characters
    .filter(char => char >= 'a' && char <= 'z') // keep only letters
    .map(char => char.charCodeAt(0) - 96) // map to alphabet positions
    .join(' ');    // join with spaces
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


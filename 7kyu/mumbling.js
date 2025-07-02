/*The challenge is to take a string and return a new one with each character repeated depending on its position in the string.
You must:
Capitalize the first occurrence
Lowercase the rest
Separate each modified character with a hyphen (-)*/

function accum(s) {
  return s
    .split('')
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join('-');
}

// Example usage:
console.log(accum("abcd"));     // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty"));  // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

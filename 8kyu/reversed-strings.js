// reversed string
function solution(str) {
  return str.split('').reverse().join('');
}

// Test cases
console.log(solution('world')); // Output: "dlrow"
console.log(solution('word'));  // Output: "drow"

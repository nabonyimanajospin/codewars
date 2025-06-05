function moveZeros(arr) {
  const nonZeros = arr.filter(item => item !== 0);
  const zeros = arr.filter(item => item === 0);
  return nonZeros.concat(zeros);
}

// 🧪 Example usage:
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
// ➞ [false,1,1,2,1,3,"a",0,0]

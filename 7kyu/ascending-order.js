function ascendingOrder(n) {
  return parseInt(n.toString().split('').sort((a, b) => a - b).join(''));
}
console.log(ascendingOrder(42145)); 
// Kata: Summation
// Write a program that finds the summation of every number from 1 to num (both inclusive).
// For example, summation(8) should return 36 because 1+2+3+4+5+6+7+8 = 36.

function summation(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

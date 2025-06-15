function getMiddle(s) {
  const length = s.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even length: return middle two characters
    return s[middle - 1] + s[middle];
  } else {
    // Odd length: return middle one character
    return s[middle];
  }
}

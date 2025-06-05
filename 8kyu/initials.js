function abbrevName(name) {
  const parts = name.split(" ");
  const firstInitial = parts[0][0].toUpperCase();
  const secondInitial = parts[1][0].toUpperCase();
  return firstInitial + "." + secondInitial;
}

// Examples
console.log(abbrevName("Sam Harris"));     // Output: S.H
console.log(abbrevName("patrick feeney")); // Output: P.F

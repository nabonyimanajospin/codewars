function arrayPlusArray(arr1, arr2) {
  // Combine both arrays
  const combined = arr1.concat(arr2);

  // Sum all elements using reduce
  return combined.reduce((sum, num) => sum + num, 0);
}

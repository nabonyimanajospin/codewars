function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// Example test
const sheepArray = [
  true,  true,  true,  false,
  true,  true,  true,  true,
  true,  false, true,  false,
  true,  false, false, true,
  true,  true,  true,  true,
  false, false, true,  true
];
console.log(countSheeps([true, true, false, null, undefined, false, true])); // Output: 3

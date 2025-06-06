// Function to calculate litres of water Nathan drinks
function litres(time) {
  return Math.floor(time * 0.5);
}

// --- TEST CASES ---
console.log("Test 1: Time = 3      → Expected: 1   → Got:", litres(3));
console.log("Test 2: Time = 6.7    → Expected: 3   → Got:", litres(6.7));
console.log("Test 3: Time = 11.8   → Expected: 5   → Got:", litres(11.8));
console.log("Test 4: Time = 0      → Expected: 0   → Got:", litres(0));
console.log("Test 5: Time = 2.9    → Expected: 1   → Got:", litres(2.9));
console.log("Test 6: Time = 10     → Expected: 5   → Got:", litres(10));

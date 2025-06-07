function automorphic(n) {
  let square = n * n;
  return square.toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}


console.log(automorphic(25));   
console.log(automorphic(13));  
console.log(automorphic(76));  
console.log(automorphic(15));  
console.log(automorphic(625));  

function findNeedle(haystack) {
  const position = haystack.indexOf("needle");
  return "found the needle at position " + position;
}

// Example
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
// Output: "found the needle at position 5"

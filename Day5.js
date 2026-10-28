function firstNonRepeatingChar(str) {
  if (str.length === 0 || typeof str !== "string") {
    return null;
  }
  let count = {};
  //count each character
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  //find first unique char
  for (const char of str) {
    if (count[char] === 1) return char;
  }
  return null;
}

console.log(firstNonRepeatingChar("aabbcde")); // "c"
console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("aabb")); // null
console.log(firstNonRepeatingChar("abcdef")); // "a"
console.log(firstNonRepeatingChar("")); // null

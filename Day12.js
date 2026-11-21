//check two strings are anagrams
//Problem statement
//Write a JavaScript function that accepts two strings and returns true if both strings contain
// exactly the same characters with the same frequencies. Otherwise, return false.

//Anagrams contain the same characters, but their order can be different.

function calculateFrequency(param) {
  let counter = {};
  param.split("").forEach((p) => {
    counter[p] = (counter[p] || 0) + 1;
  });
  return counter;
}

function frequencyCounter(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const obj1 = calculateFrequency(word1);
  const obj2 = calculateFrequency(word2);
  for (let [key, value] of Object.entries(obj1)) {
    if (obj2[key] !== value) {
      return false;
    }
  }
  return true;
}

console.log(frequencyCounter("listen", "silent")); // true
console.log(frequencyCounter("hello", "world")); // false
console.log(frequencyCounter("aabb", "bbaa")); // true
console.log(frequencyCounter("aabb", "abbb")); // false
console.log(frequencyCounter("race", "care")); // true
console.log(frequencyCounter("abc", "abcd")); // false
console.log(frequencyCounter("a", "a")); // true
console.log(frequencyCounter("", "")); // true

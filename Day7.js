function isPalindrome(str) {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("1221"));
console.log(isPalindrome("1234567890"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));

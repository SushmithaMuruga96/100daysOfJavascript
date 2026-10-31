function isPalindrome(str) {
  // const reversedString = str.split("").reverse().join("");
  // return str === reversedString;

  //Two-pointers\\
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("1221"));
console.log(isPalindrome("1234567890"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));

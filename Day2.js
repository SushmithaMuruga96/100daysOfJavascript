function reverseStringWithoutSplit(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseStringWithoutSplit("12345")); // Output: "54321"
console.log(reverseStringWithoutSplit("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseStringWithoutSplit("Open AI")); // Output: "IAnepO"

console.log(reverseStringWithoutSplit("hello")); // Output: "olleh"

console.log("abc".split("").reverse().join(""));
console.log("abc".reverse());

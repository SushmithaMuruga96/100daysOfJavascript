function reverseString(str) {
  const splittedString = str.split("");
  const length = splittedString.length;
  let reversedString = "";
  for (let i = length - 1; i >= 0; i--) {
    reversedString += splittedString[i];
  }
  return reversedString;
}

function reverseStringWithoutSplit(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
  }
  return reverse;
}
console.log(reverseString("12345")); // Output: "54321"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("Open AI")); // Output: "IAnepO"

console.log(reverseStringWithoutSplit("hello")); // Output: "olleh"

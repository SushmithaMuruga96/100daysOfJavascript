function secondLargest(arr) {
  //validation
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let largest;
  let secondLargest;
  arr.forEach((current) => {
    if (largest === undefined) {
      largest = current;
    } else if (current > largest) {
      secondLargest = largest;
      largest = current;
    } else if (
      current !== largest &&
      (secondLargest === undefined || current > secondLargest)
    ) {
      secondLargest = current;
    }
  });
  return secondLargest === undefined ? null : secondLargest;
}

console.log(secondLargest([10, 5, 8, 20, 15])); //
console.log(secondLargest([10, 10, 8, 5])); // 8
console.log(secondLargest([5, 5, 5])); // null
console.log(secondLargest([-10, -5, -20, -2])); // -5
console.log(secondLargest([])); // null

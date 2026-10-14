function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const largest = arr.reduce((acc, current) => {
    if (acc < current) {
      acc = current;
    }
    return acc;
  }, arr[0]);
  return largest;
}

console.log(findLargest([4, 9, 2, 15, 7])); // 15
console.log(findLargest([-5, -2, -10])); // -2
console.log(findLargest([]));
console.log(findLargest("3456789"));

function removeDuplicates(arr) {
  //iterate array
  //create an empty array and store unique value by comparing original array
  let uniquearr = [];
  if (Array.isArray(arr) && arr.length === 0) {
    return [];
  }
  arr.forEach((element) => {
    if (!uniquearr.includes(element)) {
      uniquearr.push(element);
    }
  });
  return uniquearr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([5, 3, 5, 2, 3, 1]));
console.log(removeDuplicates([]));
console.log(removeDuplicates(["apple", "banana", "apple"]));

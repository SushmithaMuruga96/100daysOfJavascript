// function removeDuplicates(arr) {
//   //iterate array
//   //create an empty array and store unique value by comparing original array
//   let uniquearr = [];
//   if (Array.isArray(arr)) {
//     //o(n2)time complexity
//     arr.forEach((element) => {
//       if (!uniquearr.includes(element)) {
//         uniquearr.push(element);
//       }
//     });
//   }

//   return uniquearr;
// }

function removeDuplicates(arr) {
  if (Array.isArray(arr)) {
    //o(n)time complexity
    const uniquearr = [...new Set(arr)];
    return uniquearr;
  } else {
    return [];
  }
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([5, 3, 5, 2, 3, 1]));
console.log(removeDuplicates(["apple", "banana", "apple"]));
console.log(removeDuplicates([]));
console.log(removeDuplicates("abc"));
console.log(removeDuplicates(123));
console.log(removeDuplicates(null));
console.log(removeDuplicates(undefined));

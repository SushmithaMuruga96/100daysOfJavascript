// Write your logic here
//solution one using closures , have common
// shared array to store the result
function flattenArray(arr) {
  let finalarr = [];
  function flattArr(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flattArr(element); // recursive case
      } else {
        finalarr.push(element); // base case
      }
    });
    return finalarr;
  }
  return flattArr(arr);
}

//solution 2
// return value inner finalarr instance that created at every function call instance
// store it to outer function instance
//finall arr is functione scope so every call has new instance of finalarr[]

function flattenArray(arr) {
  let finalarr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      finalarr.push(...flattenArray(element)); // recursive case
    } else {
      finalarr.push(element); // base case
    }
  });
  return finalarr;
}
// const fff = flattenArray();
// console.log(fff([1, [2, 3], 4]));

console.log(flattenArray([1, [2, 3], 4]));
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
  ]),
);
console.log(flattenArray([1, [2, [3, [4]]]]));
console.log(flattenArray([1, 2, 3]));
console.log(flattenArray([]));
console.log(flattenArray([[[1]], [[2]]]));

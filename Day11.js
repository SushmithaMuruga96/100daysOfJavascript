//Group and count elements in a arr

const arr = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "mango",
  "orange",
];
function countElements(arr) {
  let countarr = {};
  if (!Array.isArray(arr)) {
    return countarr;
  }
  arr.forEach((element) => {
    countarr[element] = (countarr[element] || 0) + 1;
  });

  return countarr;
}

// console.log(countElements(arr));

function countElementsUsingReduce(arr) {
  if (!Array.isArray(arr)) {
    return {};
  }
  return arr.reduce((acc, current) => {
    // return (acc[current] = (acc[current] || 0) + 1);
    if (acc[current]) {
      acc[current] += 1;
    } else {
      acc[current] = 1;
    }
    return acc;
  }, {});
}

console.log(countElementsUsingReduce(arr));

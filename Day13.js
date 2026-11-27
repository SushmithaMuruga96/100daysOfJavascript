// btute-force solution time complexity o(n2)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

//optimized solution
//maps as key-value pairs and store all types data as keys

function twoSum(arr, target) {
  const seen = new Map();
  for (const current of arr) {
    console.log(seen);
    const complement = target - current;
    if (seen.has(complement)) {
      return [complement, current];
    }
    seen.set(current, true);
  }
  return null;
}

// Object store keys only in strings or symbols
function twoSum(arr, target) {
  const seen = {};
  for (const current of arr) {
    console.log(seen);
    const complement = target - current;
    if (Object.hasOwn(seen, complement)) {
      return [complement, current];
    }
    seen[current] = true;
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7]
console.log(twoSum([3, 2, 4], 6)); // [2, 4]
console.log(twoSum([3, 3], 6)); // [3, 3]
console.log(twoSum([1, 5, 8, 10], 15)); // [5, 10]
console.log(twoSum([1, 2, 3], 10)); // null
console.log(twoSum([], 5)); // null
console.log(twoSum([3], 6)); // null
console.log(twoSum([1, 4, 2, 7], 8)); // [1, 7]
console.log(twoSum([1, 2, 3, 2], 4)); // [1, 3]

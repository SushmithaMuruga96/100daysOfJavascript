function findOccurrenceOfCharacterInString(input) {
  const splittedInput = input.split("");
  console.log("splittedInput", splittedInput);
  const count = {};

  splittedInput.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });

  console.log(count);
  let result = "";
  for (const [key, value] of Object.entries(count)) {
    result += `${key}${value}`;
  }
  return result;
}

console.log(findOccurrenceOfCharacterInString("AAABBBCC")); // Output: A3B3C2

//Inpt: 'AAABBBCC'
//output: 'A3B2C2'

// step 1: Split the input string into an array of characters
// step 2: count the occurrence of each character in the array
//

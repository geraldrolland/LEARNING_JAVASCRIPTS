//Intermediate level

//1
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([3, 7, 2, 9, 5])); // 9

//2
function reverseArray(arr) {
  return arr.slice().reverse();
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

//3
function countOccurrences(arr, value) {
  let count = 0;
  for (let num of arr) {
    if (num === value) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3

//4
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(combineArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

//5
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

//Advanced level

//1
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
} // correct

// Example
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]

//2
function doubleNumbers(arr) {
  return arr.map(num => num * 2);
} // correct

// Example
console.log(doubleNumbers([1, 2, 3]));
// [2, 4, 6]


// [7, 2, 8, 1] => [2, 7, 1, 8] => [1, 2, 7, 8]
//3
function sortAscending(arr) {
  let result = [...arr]; // copy array

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        // swap
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;}}}

  return result;
} // correct


// Example
console.log(sortAscending([5, 2, 8, 1]));
// [1, 2, 5, 8]

//4
function longestString(arr) {
  let longest = "";

  for (let str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
} // correct

// Example
console.log(longestString(["cat", "elephant", "dog"]));
// "elephant"
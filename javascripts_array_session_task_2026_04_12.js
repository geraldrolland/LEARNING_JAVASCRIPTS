//Intermediate level

//1
function findLargest(arr) {
  return Math.max(...arr);
} // correct

console.log(findLargest([3, 7, 2, 9, 5])); // 9

//2
function reverseArray(arr) {
  return arr.slice().reverse();
} // correct

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
} // correct

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3

//4
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
} // correct

console.log(combineArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

//5
function removeDuplicates(arr) {
  return [...new Set(arr)];
} // correct

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/

// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }

//   if (arr[middle] === elem) {
//     return middle;
//   }
//   return -1;
// }

function binarySearch(arr, elem) {
  // keep track of which part of the list you'll search in.
  let low = 0;
  let high = arr.length - 1;

  // While you haven't narrowed it down to one element
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === elem) {
      return mid;
    } else if (guess > elem) {
      // The guess was too high.
      high = mid - 1;
    } else {
      // The guess was too low.
      low = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 8)); // Output: -1

/*
  Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

  Examples:

  sumZero([-3,-2,-1,0,1,2,3]) // [-3, 3]
  sumZero([-2,0,1,3]) // undefined
  sumZero([1,2,3]) // undefined
*/
function sumZero(arr) {
  if (!arr || arr.length <= 0) return undefined;

  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    let sum = arr[p1] + arr[p2];

    if (sum === 0) {
      return [arr[p1], arr[p2]];
    } else if (sum > 0) {
      p2--;
    } else {
      p1++;
    }
  }

  return undefined;
}

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);

// Challenge: countUniqueValues
/*
Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

Output Examples:
    countUniqueValues([1,1,1,1,1,2])  ==>  2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])  ==>  7
    countUniqueValues([])  ==>  0
    countUniqueValues([-2,-1,-1,0,1])  ==>  4


Bonus

You must do this with constant or O(1) space and O(n) time.
*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array) {
//   if (array.length === 1) {
//     return array;
//   }
//   // Split Array in into right and left
//   const length = array.length;
//   const middle = Math.floor(length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(righto[rightIndex]);
//       rightIndex++;
//     }
//   }

//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// const answer = mergeSort(numbers);
// console.log(answer);

// Colt Steele Course
// Time Complexity O(n log n)

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// console.log(merge([1, 10, 50], [2, 13, 99, 100, 0]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

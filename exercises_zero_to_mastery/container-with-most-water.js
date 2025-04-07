/*
    Course: Master the Coding Interview: Big Tech (FAANG) Interviews
    Section: 3

    You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would holds the greatest amount of water. Return the area of water it would hold.

    Examples:

    [7,1,2,3,9]  ==> 28
    [9,1,2,3,7]  ==> 28
    [] ==> 0
    [7] ==> 0
*/

// function getContainerArea(arr) {
//   if (!arr || arr.length <= 1) return 0;

//   let maxValue = [0, 0];
//   let minValue = [0, 0];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       maxValue[0] = arr[i];
//       maxValue[1] = i;
//       minValue[0] = arr[i];
//       minValue[1] = i;
//     }
//     if (arr[i] > maxValue[0]) {
//       maxValue[0] = arr[i];
//       maxValue[1] = i;
//     } else if (arr[i] > minValue[0]) {
//       minValue[0] = arr[i];
//       minValue[1] = i;
//     }
//   }

//   let width = 0;
//   arr.forEach((int, i) => {
//     if (int === minValue[0] || int === maxValue[0]) {
//       width = i;
//     }
//   });
//   console.log('maxValue', maxValue);
//   console.log('minValue', minValue);
//   return minValue[0] * width;
// }

// console.log(getContainerArea([7, 1, 2, 3, 9]));

// function getContainerArea(arr) {
//   if (!arr || arr.length <= 1) return 0;

//   const sortedArr = [...arr];

//   let i = 0;
//   for (let j = 1; j < sortedArr.length; j++) {
//     if (sortedArr[j] > sortedArr[i]) {
//       sortedArr[i] = sortedArr[j];
//     } else {
//       i++;
//     }
//   }

//   console.log('sortedArr', sortedArr);
// }

// console.log(getContainerArea([9, 1, 2, 3, 7]));

function getContainerArea(arr) {
  if (!arr || arr.length <= 1) return 0;

  let p1 = 0;
  let p2 = arr.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

console.log(getContainerArea([9, 1, 2, 3, 7]));

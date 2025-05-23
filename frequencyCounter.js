/* 
  Write a function called same, which accepts two arrays.
  The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

  Examples:

  same([1,2,3], [4,1,9])   true
  same([1,2,3], [1,9])   false
  same([1,2,1], [4,4,1])   false (must be same frequency)
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // Find the index of the squared value of the current element in arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // If the squared value is not found in arr2
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}
console.log(same([5, 3, 4], [16, 25, 9]));

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}
console.log(same([5, 3, 4], [16, 25, 9]));

// This is the same function but simplified
function sameSquared(firstArr, secondArr) {
  if (!firstArr || !secondArr) return false;
  if (firstArr.length !== secondArr.length) return false;

  const lookup = {};
  for (let value of firstArr) {
    lookup[value * value] = (lookup[value * value] || 0) + 1;
  }
  for (let secondValue of secondArr) {
    if (!lookup[secondValue]) return false;
    lookup[secondValue] -= 1;
  }
  return true;
}

//   console.log(sameSquared([5, 3, 4], [16, 25, 9]))

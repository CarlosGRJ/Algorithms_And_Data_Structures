/** BEGINNER **/

/**
    Find the Maximum Number:

    Problem: Given an array of numbers, return the maximum value.
    Example:

    Input: [3, 7, 2, 9, 5]
    Output: 9

    Constraints:

    The array will have at least one element.
    The numbers can be positive or negative.
 */

function getMaxNumber(arr) {
  if (!arr || arr.length < 1) return null;

  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

// console.log(getMaxNumber([3, 7, 2, 9, 5])); // 9
// console.log(getMaxNumber([-3, -7, -2, -9, -5])); // -2
// console.log(getMaxNumber([3, 7, 2, 9, 5, 10])); // 10

/**
    Reverse an Array:

    Write a function that takes an array and returns a new array with elements in reverse order.
    
    Example:

    Input: [1, 2, 3, 4]
    Output: [4, 3, 2, 1]

    Constraints:

    The input array should remain unchanged (return a new array).
    The function should work for arrays of any size.
 */

// My questions for the interviewer:
// 1. Does the array contain only numbers or can it contain other data types like letters? In this case numbers or letters in a sorted way (Acending or Descending)
// 2. Can the array contain null or undefined values?
// 3. Will the array be sorted or unsorted? In this case sorted

function reverseArray(arr) {
  if (!arr || arr.length < 1) return [];

  const reversedArray = [...arr];
  let left = 0;
  let right = reversedArray.length - 1;

  while (left < right) {
    [reversedArray[left], reversedArray[right]] = [
      reversedArray[right],
      reversedArray[left],
    ];
    left++;
    right--;
  }

  return reversedArray;
}

// console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log(reverseArray([1])); // [1]
// console.log(reverseArray(['a', 'b', 'c', 'd'])); // ["d", "c", "b", "a"]

/**
    Remove Duplicates from an Array:
    
    Write a function that takes an array and returns a new array with duplicate values removed.

    Example:
    Input: [1, 2, 2, 3, 4, 4, 5]
    Output: [1, 2, 3, 4, 5]

    Constraints:
    - The input array may contain numbers, letters, or mixed data types.
    - The order of elements in the output should match their first occurrence in the input.
 */

function removeDuplicates(arr) {
  if (!arr || arr.length < 1) return [];

  const lookup = {};
  const uniqueArray = [];

  for (const item of arr) {
    if (!lookup[item]) {
      lookup[item] = true;
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

function otherSolutionRemoveDuplicates(arr) {
  return arr ? [...new Set(arr)] : [];
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(removeDuplicates(['a', 'b', 'b', 'c', 'd', 'd', 'e'])); // ["a", "b", "c", "d", "e"]
// console.log(removeDuplicates([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(removeDuplicates([])); // []
// console.log(removeDuplicates(null)); // []
// console.log(removeDuplicates([1, 2, 'a', 'b', 2, 3, 4, 'c', 4, 5])); // [1, 2, "a", "b", 3, 4, "c", 5]

/*
    Two Sum:
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in map) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return null;
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]

/**
 * Rotate Array:
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * 
  Example 1:

  Input: nums = [1,2,3,4,5,6,7], k = 3
  Output: [5,6,7,1,2,3,4]
  Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]

  Example 2:

  Input: nums = [-1,-100,3,99], k = 2
  Output: [3,99,-1,-100]
  Explanation: 
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]
 */

function rotate(nums, k) {
  k = k % nums.length; // Handle cases where k > nums.length

  reverse(nums, 0, nums.length - 1); // Reverse the whole array
  reverse(nums, 0, k - 1); // Reverse the first k elements
  reverse(nums, k, nums.length - 1); // Reverse the rest
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
    start++;
    end--;
  }
}

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

  Example 1:

  Input: nums = [1,2,3,1]
  Output: true

  Explanation:
  The element 1 occurs at the indices 0 and 3.

  Example 2:

  Input: nums = [1,2,3,4]
  Output: false

  Explanation:
  All elements are distinct.

  Example 3:

  Input: nums = [1,1,1,3,3,4,3,2,4,2]
  Output: true
*/

function containsDuplicate() {
  if (!nums || nums.length === 0) return false;

  const lookup = {};

  for (const num of nums) {
    if (lookup[num]) {
      return true;
    }
    lookup[num] = true;
  }

  return false;
}

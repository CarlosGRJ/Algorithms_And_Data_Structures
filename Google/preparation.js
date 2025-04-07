/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

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
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const numsLookup = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numsLookup) {
      return [numsLookup[nums[i]], i];
    } else {
      const numToFind = target - nums[i];
      numsLookup[numToFind] = i;
    }
  }

  return null;
}

// console.log(twoSum([2,7,11,15], 17));

/**
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

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

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
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

// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));



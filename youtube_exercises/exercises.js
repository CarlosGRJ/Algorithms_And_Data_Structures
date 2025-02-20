/*
    Write a function called longestWord that returns the longest word in a string
*/
function longestWord(str) {
  if (!str) return 'NO WORDS';

  const words = str.split(' ');

  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// console.log(
//   longestWord(
//     'Hellokjbjh WorldNowThisIsAnExperimentWithTheMiddleWord ThisISTheLongestWord',
//   ),
// );

/*
    Write a function called capitalizeWords that capitalizes the first letter of every word, you will receive a string as parameter
*/

function capitalizeWords(str) {
  if (!str) return 'No Words';

  // Split the array to get an array of my words
  const words = str.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(' ');
}
// console.log(capitalizeWords('Hello world from a coffeeshop'));

/*
    Write a function called unique that receives a string as parameter and it will return true if all the characters are unique and false if not.

*/

function unique(str) {
  if (!str) return false;

  const lookup = {};
  for (const letter of str) {
    if (lookup[letter]) return false;

    lookup[letter] = 1;
  }

  return true;
}
// console.log(unique('abcdefg')); // true
// console.log(unique('abcdefgb')); // false

/*
    Write a function called ArraySum that will return true if the sum of all the numbers is equal to the greatest number in the array, otherwise return false 
*/

function ArraySum(arr) {
  let sum = 0;
  let max = 0;
  for (let number of arr) {
    if (number > max) {
      max = number;
    }
    sum += number;
  }
  sum -= max;
  console.log('max ', max);
  console.log('sum ', sum);

  return sum === max;
}

// console.log(ArraySum([1, 2, 4, 6, 13]));
console.log(ArraySum([1, 2, 13, 4, 6]));
// console.log(ArraySum([1, 2, 4, 34, 22]));

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

/*
This is a demo task.

Write a function:

function solution(A: number[]): number;

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

/*
Reverse String
*/

function reverseString(str) {
  let reversed = '';

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function challengeProfuct(arr) {
  if (!arr) return;
}

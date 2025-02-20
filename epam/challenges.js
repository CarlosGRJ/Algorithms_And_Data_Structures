/*
Write a JavaScript function that determines whether a given string has balanced parentheses. In this context, parentheses are considered balanced if:

Every opening parenthesis '(' has a corresponding closing parenthesis ')'.
Parentheses are properly nested.

console.log(isBalanced("(a + b) * (c + d)")); // Output: true
console.log(isBalanced("((a + b)"));          // Output: false
console.log(isBalanced("(a + b))"));          // Output: false
console.log(isBalanced("a + b"));             // Output: true
*/

// Solution
function isBalanced(str) {
  if (!str) return false;

  const stack = [];

  for (const char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) return false;

      stack.pop();
    }
  }
}

/*
  Write a function that returns the length of the longest substring in a given string without repeating characters.

  Examples

  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
  console.log(lengthOfLongestSubstring("bbbbb"));   // Output: 1 ("b")
  console.log(lengthOfLongestSubstring("pwwkew"));  // Output: 3 ("wke")
  console.log(lengthOfLongestSubstring(""));        // Output: 0
  console.log(lengthOfLongestSubstring("au"));      // Output: 2 ("au")

  Constraints
  The input string s consists of only printable ASCII characters.
  The function should efficiently find the answer even for long strings.
*/

function lengthOfLongestSubstring(str) {
  if (!str) return 0;

  let maxLength = 0;
  let left = 0;
  let seen = new Set();

  for (let right = 0; right < str.length; right++) {
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }

    seen.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

/* 
Given an unsorted array of integers, find the length of the longest consecutive sequence of numbers.

Rules:

The sequence must be made up of consecutive numbers (e.g., [1, 2, 3, 4] is valid, but [1, 3, 5] is not).
The numbers don’t need to be in order in the input array.
You should achieve O(n) time complexity (Hint: Use a Set for fast lookups).

Examples
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); 
// Expected output: 4 (The longest sequence is [1, 2, 3, 4])

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); 
// Expected output: 9 (The longest sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8])

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -2, 6, -3, 2])); 
// Expected output: 7 (The longest sequence is [-3, -2, -1, 0, 1, 2, 3])

console.log(longestConsecutive([])); 
// Expected output: 0 (Empty array, no sequence)

console.log(longestConsecutive([10, 20, 30, 40])); 
// Expected output: 1 (Each number is isolated, so the longest sequence is just a single number)

*/

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Check if this is the START of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count how long the sequence is
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak); // Update longest sequence found
    }
  }

  return longest;
}

/* 
  Find Missing Number
  You're given an array of n distinct numbers from 0 to n (inclusive), but one number is missing.

  - The sum of numbers from 0 to n should be: (n * (n + 1)) / 2

  - If you subtract the actual sum of the array from the expected sum, you get the missing number.

  Examples:
  findMissingNumber([3, 0, 1])  
  // Output: 2  (since 0, 1, and 3 are there, but 2 is missing)

  findMissingNumber([9,6,4,2,3,5,7,0,1])  
  // Output: 8  (since 0 to 9 should be there, but 8 is missing)

  findMissingNumber([0, 1])  
  // Output: 2  (should be [0, 1, 2], but 2 is missing)
*/

function findMissingNumber(nums) {
  if (!nums || nums.length === 0) return 0;

  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

/*
  Find the First Non-Repeating Character:

  Given a string, return the first character that doesn’t repeat in the string. If all characters repeat, return null.


*/

function firstNonRepeatingChar(str) {
  // I always try to add guards for safety
  if (!str) return null;

  const lookup = {};

  for (const char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of str) {
    if (lookup[char] === 1) return char;
  }

  return null;
}

// // ✅ Test cases
// console.log(firstNonRepeatingChar('aabbccde')); // Output: "d"
// console.log(firstNonRepeatingChar('xxyz')); // Output: "y"
// console.log(firstNonRepeatingChar('aabb')); // Output: null
// console.log(firstNonRepeatingChar('abc')); // Output: "a"

/*
   Challenge: FizzBuzz (Classic Interview Question!)
  Write a function that prints numbers from 1 to n. But:

  If a number is divisible by 3, print "Fizz".
  If a number is divisible by 5, print "Buzz".
  If a number is divisible by both 3 and 5, print "FizzBuzz".
  Otherwise, print the number itself.
*/
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// console.log('test => ', fizzBuzz(15));

/*
Count the Vowels
Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

  Examples:
  countVowels("hello"); 
    Output: 2 (because "e" and "o" are vowels)

  countVowels("ChatGPT is awesome!");  
  Output: 6 (because "a, a, i, a, e, o, e" are vowels)
*/

function countVowels(str) {
  if (!str) return 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lookup = {};
  let count = 0;

  for (const char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const vowel of vowels) {
    if (lookup[vowel]) {
      count += lookup[vowel];
    }
  }

  return count;
}

// console.log('count vowels => ', countVowels('ChatGPT is awesome!'));
// console.log('count vowels => ', countVowels("hello"));

/*
  Challenge: Find the Most Frequent Character
  Write a function that returns the character that appears most frequently in a given string.

  Examples:

  - mostFrequentChar("javascript"); Output: 'a'
  (because "a" appears twice, while others appear only once)

  - mostFrequentChar("banana");
  Output: 'a'
  (because "a" appears three times, which is more than any other character)

  - mostFrequentChar("hello world");
  Output: 'l'
  (because "l" appears three times)
*/

function mostFrequentChar(str) {
  if (!str) return null;

  const lookup = {};
  let maxChar = null;
  let maxCount = 0;

  for (const char of str) {
    lookup[char] = (lookup[char] || 0) + 1;

    if (lookup[char] > maxCount) {
      maxCount = lookup[char];
      maxChar = char;
    }
  }

  return maxChar;
}

/**
 * Demonstrate removing duplicates from a sorted array using both: a Set and Vanilla JS methods
 *
 * Examples:
 *
 * removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
 * // Output: [1, 2, 3, 4, 5]
 */

function removeDuplicatesWithSet(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }

  const uniqueValues = new Set(numbers);
  return [...uniqueValues];
}

// console.log('removeDuplicatesWithSet => ', removeDuplicatesWithSet([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));

function removeDuplicatesWithoutSet(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }

  const uniqueValues = numbers.filter((value, index, arr) => {
    const firstFoundIndex = arr.indexOf(value);
    return firstFoundIndex === index;
  });

  return uniqueValues;
}

/**
 * Write a logic to count the maximum number of repeating characters in a string
 */

function maxRepeatingChar(str) {
  if (!str) return null;

  const lookup = {};
  let maxCount = 0;
  let maxChar = '';

  for (const char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
    if (lookup[char] > maxCount) {
      maxCount = lookup[char];
      maxChar = char;
    }
  }

  return { char: maxChar, count: maxCount };
}

// console.log(maxRepeatingChar('aabbcddddfgggggggrrr')); // Output: 4

/**
 * Write a logic to move all O's to the end in an array
 *
 * Examples:
 * moveOsToEnd([1, 2, 0, 3, 0, 4, 5, 0]);
 * // Output: [1, 2, 3, 4, 5, 0, 0, 0]
 */

function moveOsToEndA(arr) {
  if (!arr || arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.push(arr.splice(i, 1)[0]);
    }
  }

  return arr;
}

function moveOsToEndB(arr) {
  if (!arr || arr.length === 0) return [];

  const noZeros = arr.filter((num) => num !== 0);
  const countZeros = arr.length - noZeros.length;

  return noZeros.concat(new Array(countZeros).fill(0));
}

// console.log(
//   'moveOsToEnd => ',
//   moveOsToEndB([1, 2, 0, 3, 0, 4, 5, 0, 3, 23, 6, 0, 7, 0, 0, 0, 0]),
// );

/**
 * Write a polyfill for forEach method
 */

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this); // Passes (element, index, array)
    }
  };
}

const arr = [1, 2, 3, 4, 5];
// arr.myForEach((item, i, arr) => console.log(item, i, arr));

const test = Object.freeze({
  name: 'test',
  age: 20,
});

// test
test.age = 30;
test.name = 'test1';

delete test.age;
console.log('test => ', test);

/**
 * Find the longest subarray with a sum of 0
 */

function longestZeroSumSubarray(arr) {
  let prefixSum = 0;
  let maxLength = 0;
  const sumIndexMap = {};

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    // If sum is 0, update maxLength (from start to current index)
    if (prefixSum === 0) {
      maxLength = i + 1;
    }

    // If the sum was seen before, update maxLength
    if (sumIndexMap.has(prefixSum)) {
      maxLength = Math.max(maxLength, i - sumIndexMap.get(prefixSum));
    } else {
      // Store the first occurrence of the prefixSum
      sumIndexMap.set(prefixSum, i);
    }
  }
}

/**
 *  Find the longest subarray with sum K
 *  Input: arr = [1, 2, 3, 4, 5], K = 9
 *  Output: true  // (subarray [2, 3, 4] sums to 9)
 */

function longestSubarraywithK(arr, k) {
  let prefixSum = 0;
  const sumIndexMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === k) return true;

    if (sumIndexMap.has(prefixSum - k)) return true;

    sumIndexMap.set(prefixSum, i);
  }

  return false;
}

console.log(
  'longestSubarraywithK => ',
  longestSubarraywithK([1, 1, 1, 1, 2], 9),
);

/**
 * Find the largest subarray with equal 0s and 1s
 */

/**
 * Find the smallest subarray with sum >= K
 */

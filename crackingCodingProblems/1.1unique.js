/*
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

/**
 *
 *
 * @param {string} str
 */
function isUniqueChars(str) {
  if (!str) return false;

  const lookup = {};
  for (const letter of str) {
    if (lookup[letter]) return false;

    lookup[letter] = 1;
  }

  return true;
}

// console.log(isUniqueChars('abc'));
// console.log(isUniqueChars('abca'));

// 1.2
function permutation(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;

  const lookupStr1 = {};
  const lookupStr2 = {};

  for (const char of str1) {
    lookupStr1[char] = (lookupStr1[char] || 0) + 1;
  }
  for (const char of str2) {
    lookupStr2[char] = (lookupStr2[char] || 0) + 1;
  }

  for (const char in lookupStr1) {
    if (lookupStr1[char] !== lookupStr2[char]) {
      return false;
    }
  }

  return true;
}

// console.log(permutation('abce', 'ebca'));

/* 
1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

Example: 
Input.  replaceSpaces("Mr John Smith    ", 13)

Output:   "Mr%20John%20Smith"
*/

function replaceSpaces(str, trueLength) {
  const splitStr = str.trim().split(' ');
  let replacedStr = '';
  for (let i = 0; i < splitStr.length; i++) {
    if (i === splitStr.length - 1) {
      replacedStr += splitStr[i];
    } else {
      replacedStr += splitStr[i] + '%20';
    }
  }

  return replacedStr;
}

// replaceSpaces('    Mr John Smith    ', 13);

/*
  Palindrome Permutation:
  Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
  You can ignore casting and non-letter characters.

  Example:

  Input: Tact Coa
  Output: True (permutations: "taco cat", "atco cta". etc. )
*/


/*
  Palindrome Permutation:
  Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
  You can ignore casting and non-letter characters.

  Example:

  Input: Tact Coa
  Output: True (permutations: "taco cat", "atco cta". etc. )
*/



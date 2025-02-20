/*
  Given two strings, write a functionto determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  Exmaples:

  validAnagram('', '')                              // true
  validAnagram('aaz', 'zza')                        // false
  validAnagram('anagram', 'nagaram')                // true
  validAnagram('rat', 'car')                        // false
  validAnagram('awesome', 'awesom')                 // false
  validAnagram('qwerty', 'qeywrt')                  // true
  validAnagram('texttwisttime', 'timetwisttext')    // true

*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  if (str1.length === 0 && str2.length === 0) return true;

  const lookup = {};

  for (const char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!lookup[char]) return false;

    lookup[char] -= 1;
  }

  return true;
}

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) return false;

    lookup[letter] -= 1;
  }

  return true;
}

// console.log(validAnagram('texttwisttime', 'timetwisttext'));

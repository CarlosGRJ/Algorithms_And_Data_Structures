/*
    Frequency Counter - sameFrequency
    Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

    Your solution MUST have the following complexities:

    Time: O(N)

    Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  if (num1 < 0 || num2 < 0 || !num1 || !num2) return false;

  const lookup = {};

  for (let value of num1.toString()) {
    lookup[value] = (lookup[value] || 0) + 1;
  }

  for (let value of num2.toString()) {
    if (!lookup[value]) return false;

    lookup[value] -= 1;
  }

  return true;
}

console.log(sameFrequency(182, 281));

/*
    Frequency Counter / Multiple Pointers - areThereDuplicates
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

    Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
    Restrictions:

    Time - O(n)

    Space - O(n)

    Bonus:

    Time - O(n log n)

    Space - O(1)
*/

function areThereDuplicates(...args) {
  if (!args || args.length <= 0) return false;

  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  });

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));

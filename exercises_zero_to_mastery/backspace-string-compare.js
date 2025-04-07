/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
*/

// My brute solution

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// function backspaceCompare(s, t) {
//   if ((!s, !t)) return false;

//   const longestStrLength = s.length > t.length ? s.length : t.length;
//   const strArrS = [];
//   const strArrT = [];
//   let finalStrS = '';
//   let finalStrT = '';

//   for (let i = 0; i < longestStrLength; i++) {
//     if (s[i] !== '#' && s[i]) {
//       strArrS.push(s[i]);
//     } else if (s[i] === '#') {
//       strArrS.pop();
//     }

//     if (t[i] !== '#' && t[i]) {
//       strArrT.push(t[i]);
//     } else if (t[i] === '#') {
//       strArrT.pop();
//     }
//   }

//   const longestArrLength =
//     strArrS.length > strArrT.length ? strArrS.length : strArrT.length;

//   for (let i = 0; i < longestArrLength; i++) {
//     if (strArrS[i]) {
//       finalStrS += strArrS[i];
//     }

//     if (strArrT[i]) {
//       finalStrT += strArrT[i];
//     }
//   }

//   return finalStrS === finalStrT;
// }

function backspaceCompare(s, t) {
  if ((!s, !t)) return false;

  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {}
}

// Teacher solution

// var backspaceCompare = function (s, t) {
//     if (!s, !t) return false

//     let p1 = s.length - 1;
//     let p2 = t.length - 1;

//     while (p1 >= 0 || p2 >= 0) {
//         if (s[p1] === '#' | t[p2] === '#') {
//             if (s[p1] === '#') {
//                 let backCount = 2;

//                 while (backCount > 0) {
//                     p1--;
//                     backCount--;

//                     if (s[p1] === "#") {
//                         backCount += 2;
//                     }
//                 }
//             }

//             if (t[p2] === '#') {
//                 let backCount = 2;

//                 while (backCount > 0) {
//                     p2--;
//                     backCount--;

//                     if (t[p2] === "#") {
//                         backCount += 2;
//                     }
//                 }
//             }
//         } else {
//             if (s[p1] !== t[p2]) {
//                 return false;
//             } else {
//                 p1--;
//                 p2--;
//             }
//         }

//     }

//     return true;

// };

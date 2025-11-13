// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString_00 = function (s) {
  s.reverse();
};

var reverseString = function (s) {
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const tmp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = tmp;
  }
  console.log('after reverse:', s);
};

reverseString(['h', 'e', 'l', 'l', 'o']);
reverseString(['h', 'e', 'l', 'l']);
reverseString(['H', 'a', 'n', 'n', 'a', 'h']);

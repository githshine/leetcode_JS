// 58. Length of Last Word

// Given a string s consisting of words and spaces,
//  return the length of the last word in the string.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const words = s.split(' ').filter((word) => word !== '');

  return words.at(-1).length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));

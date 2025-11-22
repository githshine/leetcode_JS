// 409. Longest Palindrome

console.log('test---');

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let count = 0;
  const strSet = new Set();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (strSet.has(ch)) {
      strSet.delete(ch);
      count += 2;
    } else {
      strSet.add(ch);
    }
  }
  if (strSet.size >= 1) count++;

  return count;
};

console.log(longestPalindrome('abccccdd')); //7
console.log(longestPalindrome('abccccddA')); //7
console.log(longestPalindrome('a')); //1
console.log(longestPalindrome('Aa')); //1

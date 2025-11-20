// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */

// 思路要点：

// 回文有两类中心：单字符中心（odd） 和 两个字符中间的中心（even）。

// 对每个中心向两边扩展，比较 s[left] === s[right]，直到不等或边界，记录最大长度与起始位置。
// 优点：没有字符串复制/反转，比较直接，常数级额外空间。
var longestPalindrome = function (s) {
  if (!s || s.length === 1) return s;

  function getPalimLen(startIdx, endIdx) {
    while (startIdx >= 0 && endIdx < s.length) {
      if (s[startIdx] === s[endIdx]) {
        startIdx--;
        endIdx++;
      } else break;
    }
    return endIdx - startIdx - 1;
  }

  let maxLen = 0;
  let startIdx = 0;
  for (let i = 0; i < s.length - 1; i++) {
    // 以 i 为中心（奇数长度）
    let len1 = getPalimLen(i, i);
    // 以 i 和 i+1 为中心（偶数长度）
    let len2 = getPalimLen(i, i + 1);
    let len = Math.max(len1, len2);

    if (len > maxLen) {
      maxLen = len;
      startIdx = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(startIdx, startIdx + maxLen);
};

console.log(longestPalindrome('babad')); // "bab"
console.log(longestPalindrome('babab')); // "babab"
console.log(longestPalindrome('aabab')); // "bab"
console.log(longestPalindrome('cbbd')); // "bb"
console.log(longestPalindrome('cbbb')); // "bbb"
console.log(longestPalindrome('cabbb')); // "bbb"
console.log('should be empty string:', longestPalindrome('ca')); // ""
console.log("should be string 'c':", longestPalindrome('c')); // "c"

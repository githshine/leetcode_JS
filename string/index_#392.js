// 392. Is Subsequence
// return true if s is a subsequence of t, or false otherwise.

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 1-2:
// Input: s = "acb", t = "ahbgdc"
// Output: false
// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let startIdx = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    // if (startIdx >= t.length) return false;
    if (t.indexOf(ch, startIdx) === -1) {
      return false;
    } else {
      startIdx = t.indexOf(ch, startIdx) + 1;
    }
  }
  return true;
};

// console.log(isSubsequence('abc', 'ahbgdc'));
// console.log(isSubsequence('acb', 'ahbgdc'));
// console.log(isSubsequence('axc', 'ahbgdc'));
console.log(isSubsequence('aaaaaa', 'bbaaaa'));

// 387. First Unique Character in a String

// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

/**
 * @param {string} s
 * @return {number}
 */
// 还可以优化的点就是：把之前已经验证过非unique 的char 记录在set中，后续 重复的char 直接通过set 验证就可以了，无需重复通过 indexOf 验证了
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (s.indexOf(ch) === s.lastIndexOf(ch)) return i;
  }
  return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1

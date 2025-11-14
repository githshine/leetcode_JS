// 389. Find the Difference

// Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference_01 = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (!s.includes(ch)) return ch;
    else s = s.replace(ch, '');
  }
};

var findTheDifference_02 = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    sMap.has(ch) ? sMap.set(ch, sMap.get(ch) + 1) : sMap.set(ch, 1);
  }
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    tMap.has(ch) ? tMap.set(ch, tMap.get(ch) + 1) : tMap.set(ch, 1);
  }

  for (const [key, value] of tMap) {
    if (!sMap.has(key) || sMap.get(key) < value) {
      return key;
    }
  }
};

// 可以使用 异或 来消除 相同的元素
var findTheDifference = function (s, t) {
  // let str = 'test';
  // str.charCodeAt(0);
  let result = 0;
  for (const ch of s) {
    result ^= ch.charCodeAt(0);
  }
  for (const ch of t) {
    result ^= ch.charCodeAt(0);
  }
  return String.fromCharCode(result);
};

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('', 'y'));
console.log(findTheDifference('abcd', 'abcdd'));

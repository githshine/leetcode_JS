// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  // str1 and str2 both only consist of lowercase English letters [from question describe]
  function getCommonPrefix(str1, str2) {
    let commonPref = '';
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
      if (str1[i] === str2[i]) {
        commonPref += str1[i];
      } else return commonPref;
    }
    return commonPref;
  }

  if (strs.length === 0) return '';
  else if (strs.length === 1) return strs[0];
  else if (strs.length === 2) return getCommonPrefix(strs[0], strs[1]);

  let commonPrefix = getCommonPrefix(strs[0], strs[1]);
  // 这属于暴力比对，还有一种比较快的方法就是： 先 sort ，然后比对第一个字符串 和 最后一个字符串 即可
  for (let i = 2; i < strs.length; i++) {
    let str = strs[i];
    if (str.length === 0) return '';

    commonPrefix = getCommonPrefix(commonPrefix, str);
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(['cat', 'caw', 'cattie']));
console.log(longestCommonPrefix(['cat', 'cat', 'cattie']));
console.log(longestCommonPrefix(['cat', 'cat', 'cattie', 'dog']));
console.log(longestCommonPrefix(['cat', 'cat', 'cattie', 'cdog']));
console.log(longestCommonPrefix(['cat', 'cat', 'cattie', 'c dog']));

// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u',
//      and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = 'aeiouAEIOU';

  const vowelArr = [];
  // 为什么要把 s 转换成 array？ 因为后面需要修改 s 的内容，但是 string 在JS 中是 immutable,
  //    通过这种转换，可以实现对 string 的修改
  const sArr = s.split('');

  // looking for all vowels in s
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) >= 0) {
      vowelArr.push(s[i]);
    }
  }

  // reverse the vowelArr
  vowelArr.reverse();

  //according to the reversed vowelArr, substitute the original vowel in s
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) >= 0) {
      sArr[i] = vowelArr[idx];
      idx++;
    }
  }

  return sArr.join('');
};

console.log(reverseVowels('IceCreAm')); // Output: "AceCreIm"
console.log(reverseVowels('leetcode')); // Output: "leotcede"

// 242. Valid Anagram

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const arr1 = s.split('');
  const arr2 = t.split('');

  const s1 = arr1.sort().join('');
  const t1 = arr2.sort().join('');

  // console.log(s1, t1);
  return s1 === t1;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

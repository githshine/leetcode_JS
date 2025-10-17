// 290. Word Pattern

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');
  if (words.length !== pattern.length) return false;

  const matchObj = {};

  for (let i = 0; i < pattern.length; i++) {
    if (
      matchObj.hasOwnProperty(pattern[i]) &&
      words[i] !== matchObj[pattern[i]]
    )
      return false;
    else if (!matchObj.hasOwnProperty(pattern[i])) {
      if (words.indexOf(words[i]) !== i)
        return false; // indicate that a previous same word already matched a pattern
      else matchObj[pattern[i]] = words[i];
    }
  }
  return true;
};

console.log(wordPattern('aaa', 'aa aa aa aa'));
console.log(wordPattern('abba', 'dog cat cat doggy'));

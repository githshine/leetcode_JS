// 3. Longest Substring Without Repeating Characters

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
//      Note that "bca" and "cab" are also correct answers.

/**
 * @param {string} s
 * @return {number}
 */
// This solution worked, but the run time is so long ~
var lengthOfLongestSubstring_01 = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let maxLen = 0;
  let longestStr = '';

  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    set.add(s[i]);

    let j = i + 1;
    for (; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
      } else {
        if (set.size > maxLen) {
          maxLen = set.size;
          longestStr = [...set].join('');
        }
        break;
      }
    }

    if (j === s.length && set.size > maxLen) {
      maxLen = set.size;
      longestStr = [...set].join('');
    }
  }

  // console.log(longestStr);

  return maxLen;
};

// Even slower!!
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let maxLen = 0;
  let longestStr = '';

  const set = new Set();
  let i = 0,
    j = i;
  for (; i < s.length && j < s.length; ) {
    // set = Set(s.slice(i, j + 1));
    [...s.slice(i, j + 1)].forEach((ch) => set.add(ch));

    if (set.size < j - i + 1) {
      let tmpLen = set.size;
      if (tmpLen > maxLen) {
        maxLen = tmpLen;
        longestStr = [...set].join('');
      }

      i++;
      j = i;
      set.clear();
    } else {
      // set.size === j - i + 1
      j++;
    }
  }

  if (j === s.length && set.size > maxLen) {
    maxLen = set.size;
    longestStr = [...set].join('');
  }
  return maxLen;
};

// 使用真正的算法思维： 使用二维指针 滑动窗口
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;

  let maxLen = 0;
  const set = new Set();
  let i = 0,
    j = 0;

  while (j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j++;
      maxLen = Math.max(maxLen, j - i);
    } else {
      // remove left char and move left pointer
      set.delete(s[i]);
      i++;
    }
  }

  return maxLen;
};

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('au')); // 2
console.log(lengthOfLongestSubstring('a')); // 2
console.log(lengthOfLongestSubstring('')); // 2
console.log(lengthOfLongestSubstring(' ')); // 2

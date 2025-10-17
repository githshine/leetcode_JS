// 28. Find the Index of the First Occurrence in a String

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// maybe do not use the built-in function, using characters comparison instead
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('butsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));

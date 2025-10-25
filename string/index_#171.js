// 171. Excel Sheet Column Number
// Given a string columnTitle that represents the column title as appears in an Excel sheet,
//    return its corresponding column number.
// Example 1:
// Input: columnTitle = "A"
// Output: 1
// Example 2:
// Input: columnTitle = "AB"
// Output: 28

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let sum = 0;
  const len = columnTitle.length;
  for (let i = len - 1; i >= 0; i--) {
    sum += (chars.indexOf(columnTitle[i]) + 1) * Math.pow(26, len - 1 - i);
  }
  return sum;
};

console.log('testing 10.25');

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));

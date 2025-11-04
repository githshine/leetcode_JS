// 119. Pascal's Triangle II
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:
// Input: rowIndex = 0
// Output: [1]
// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  else if (rowIndex === 1) return [1, 1];

  // for rowIndex >= 2
  const arrList = [[1], [1, 1]];
  let tmp;
  for (let i = 2; i <= rowIndex; i++) {
    tmp = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) tmp[j] = 1;
      else tmp[j] = arrList[i - 1][j - 1] + arrList[i - 1][j];
    }
    arrList.push(tmp);
  }
  return arrList.at(-1);
  // return tmp;
};

console.log(getRow(1));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));

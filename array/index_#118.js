// 118. Pascal's Triangle
// In Pascal's triangle, each number is the sum of the two numbers directly above it

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  else if (numRows === 2) return [[1], [1, 1]];

  // numRows >= 3
  const rstArr = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const arr_i = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        arr_i[0] = 1;
        arr_i[i] = 1;
      } else {
        arr_i[j] = rstArr[i - 1][j - 1] + rstArr[i - 1][j];
      }
    }
    rstArr.push(arr_i);
  }

  // const arr = [1, 2, 3];
  // arr.reverse();
  // console.log('After reverse: ', arr); // Output: [3,2,1]

  return rstArr;
};

console.log(generate(1));
console.log(generate(3));
console.log(generate(5));

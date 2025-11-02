// 66. Plus One

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let numStr = digits.join('');
  console.log(numStr);

  // let num = Number(numStr);

  // Use BigInt to handle large numbers
  let num = BigInt(numStr);
  console.log('num:', num);
  console.log('Max Number: ', Number.MAX_VALUE);

  let rstStr = String(num + 1n);
  console.log('rstStr: ', rstStr);

  // return Array.from(rsStr);
  return rstStr.split('').map((it) => Number(it));
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9, 9, 9, 9]));

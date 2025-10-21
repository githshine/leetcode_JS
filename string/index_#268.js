// 268. Missing Number

// Example 1:
// Input: nums = [3,0,1]
// Output: 2

// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
//     2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 默认按照字母的顺序进行排序， 比如 [1,2,10,23,13] 会被排成： [1,10,13,2,23]
  // 所以 需要指明排序的函数： (a,b) => a - b ，进行升序排列
  nums.sort((a, b) => a - b);
  console.log('nums:', nums);

  let i = 0;
  for (; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return i;
};

// console.log(missingNumber([3, 0, 1]));
console.log(
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum,
//      and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  console.log('max sub array');

  if (!nums) return 0;
  if (nums.length === 1) return nums[0];

  let maxSum = nums[0];
  let startVal = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    sum += num;
    maxSum = sum > maxSum ? sum : maxSum;

    // if (num > 0 && sum < num) {
    if (sum < num) {
      // If all nums are negative, so no need for num to be must greater than 0
      startVal = num;
      sum = startVal;
      maxSum = sum > maxSum ? sum : maxSum;
    }
  }

  return maxSum;
};

// console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([-1, 3]));
// console.log(maxSubArray([-1, 3, 1]));
console.log(maxSubArray([-1, 3, 1, 2]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log('Wrong case test:');

console.log(maxSubArray([-2, -1])); // Now is right!
console.log(maxSubArray([5, 4, -1, 7, 8]));

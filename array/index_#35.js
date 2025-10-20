// 35. Search Insert Position

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 0) return 0;
  if (target < nums[0]) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    else if (nums[i] > target) return i;
  }
  return nums.length;
};

console.log('test results:');

console.log(searchInsert([1], 1));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));

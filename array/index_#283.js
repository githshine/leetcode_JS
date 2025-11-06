// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it
//    while maintaining the relative order of the non-zero elements.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) return;

  let i = 0;
  let j = i + 1;
  while (i < nums.length - 1 && j < nums.length) {
    if (nums[i] !== 0) {
      i++;
      j = i + 1;
    } else {
      // nums[i] === 0
      if (nums[j] !== 0) {
        // sweep nums[i] and nums[j]
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;

        // update idxes
        i++;
        j = i + 1;
      } else {
        // nums[j] === 0
        j++;
      }
    }
  }

  console.log('after moving: ', nums);
};

// 还有一种更快的方法，就是 直接使用后面的数组值直接更新前面的数组值，最后在后面全部补0

moveZeroes([1, 2, 3, 4, 5, 0, 0, 7, 8]);
moveZeroes([1, 2, 0, 3, 4, 5, 0, 0, 7, 8]);
moveZeroes([0, 1, 2, 0, 3, 4, 5, 0, 0, 7, 8]);
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 0, 1, 0, 3, 12, 0]);
moveZeroes([0, 1, 0]);
moveZeroes([0]);

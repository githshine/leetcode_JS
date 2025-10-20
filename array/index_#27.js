// 27. Remove Element

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const numsSize = nums.length;
  let k = 0;
  for (let i = 0; i < numsSize - k; i++) {
    if (nums[i] === val) {
      nums[i] = nums[numsSize - 1 - k];
      i--;
      k++;
    }
  }
  return numsSize - k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

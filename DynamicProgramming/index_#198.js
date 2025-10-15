// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // let isNextValueAvailable = false;
  // let sum = 0;
  if (nums.length === 1) return nums[0];
  else if (nums.length === 2) return Math.max(nums[1], nums[0]);

  let dp_i_2 = nums[0];
  let dp_i_1 = Math.max(nums[1], nums[0]);
  let temp = 0;
  for (let i = 2; i < nums.length; i++) {
    temp = Math.max(dp_i_1, dp_i_2 + nums[i]);
    dp_i_2 = dp_i_1;
    dp_i_1 = temp;
  }
  return dp_i_1;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));

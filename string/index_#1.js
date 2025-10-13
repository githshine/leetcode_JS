// Leetcode: Two Sum
function getTwoSum(nums, target) {
  // equal to the target
  // nums.forEach(num => {
  //   const expectNum = target - num;

  // });
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const expectNum = target - num;
    const rst = [];

    if (nums.slice(i + 1).indexOf(expectNum) > -1) {
      rst[0] = i;
      rst[1] = nums.findIndex((num, idx) => idx > i && num === expectNum);
      return rst;
    }
  }
}

console.log(getTwoSum([2, 7, 11, 15], 9));
console.log(getTwoSum([2, 11, 15, 7], 9));
console.log(getTwoSum([3, 2, 4], 6));
console.log(getTwoSum([3, 3], 6));

// 169. Majority Element
// Given an array nums of size n, return the majority element.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
//  this a a solid solution, but with a relatively high memory usage
var majorityElement_1 = function (nums) {
  const rstMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (rstMap.has(num)) {
      rstMap.set(num, rstMap.get(num) + 1);
    } else {
      rstMap.set(num, 1);
    }
  }

  // Find the biggest value in rstMap
  let maxKey = (maxValue = 0);
  for (const [key, value] of rstMap) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  // console.log(maxKey);
  return maxKey;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);
  // console.log('nums after sorting: ', nums);

  let maxCount = (curCount = 1);
  let majorElement = (curNum = nums[0]);

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num === curNum) {
      curCount++;
    } else {
      // num !== curNum
      if (curCount > maxCount) {
        maxCount = curCount;
        majorElement = curNum;
      }
      curNum = num;
      curCount = 1;
    }
  }

  if (curCount > maxCount) majorElement = curNum;

  return majorElement;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));

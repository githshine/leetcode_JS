// 136. Single Number

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
// Method 1: using Array to store
var singleNumber_1 = function (nums) {
  const rstArr = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (rstArr.indexOf(num) === -1) {
      rstArr.push(nums[i]);
    } else {
      // delete this element from rstArr
      let idx = rstArr.indexOf(num);
      rstArr.splice(idx, 1);
    }
  }

  return rstArr.shift();
};

// Method two: using Map
// Fater!
var singleNumber = function (nums) {
  const rstMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (rstMap.get(num)) {
      rstMap.set(num, rstMap.get(num) + 1);
    } else {
      rstMap.set(num, 1);
    }
  }
  // console.log('rstMap is :', rstMap);

  for (const [key, value] of rstMap) {
    if (value === 1) return key;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));

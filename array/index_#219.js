// 219. Contains Duplicate II

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numsMap.has(num)) {
      if (i - numsMap.get(num) <= k) return true;
      else {
        numsMap.delete(num);
        numsMap.set(num, i);
      }
    } else {
      numsMap.set(num, i);
    }
  }
  return false;
};

//  another way to solve this problem is using Sliding Window ~~

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

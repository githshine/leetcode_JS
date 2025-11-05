// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// using array sorting
var containsDuplicate_1 = function (nums) {
  nums.sort((a, b) => a - b);

  let count = 1;
  let curNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num === curNum) {
      count++;
      return true;
    } else {
      curNum = num;
      count = 1;
    }
  }

  return false;
};

// less runtime, less memory usage, but still relatively high
//  another way is: do not create full Set at first, add one by one!!
var containsDuplicate = function (nums) {
  const numsSet = new Set(nums);
  console.log(numsSet);

  // iterate numsSet, substract every element from nums, seeing whether any element left in nums
  // nums.filter(num => !numsSet.has(num))
  for (const num of nums) {
    if (numsSet.has(num)) {
      numsSet.delete(num);
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 3, 4, 3, 2, 4, 2, 1, 1]));

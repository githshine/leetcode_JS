// 26. Remove Duplicates from Sorted Array （ in-place ）

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums --  sorted array, non-decreasing order
 * @return {number}
 */
// 除了直接使用两个for 循环，还可以在一个for循环中更新两个变量，实现一头一尾 动态获取（更新）数据
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0; // pointer for last unique element

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]; // overwrite the next position with unique value
    }
  }

  console.log('Print all the unique numbers: ');

  let k = i + 1;
  for (let i = 0; i < k; i++) {
    console.log(nums[i]);
  }
  return k;

  return i + 1; // number of unique elements
};

//  this method can not pass the testcases, because the output of the final array is not right
// even though I don't know it got the output array since the question doesn't require me update it
var removeDuplicates_02 = function (nums) {
  const set = new Set(nums);
  // console.log(set);

  return set.size;
};

console.log('k = ', removeDuplicates([1, 1, 2]));
console.log('k = ', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

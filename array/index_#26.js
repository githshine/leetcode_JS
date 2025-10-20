// 26. Remove Duplicates from Sorted Array （ in-place ）

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let k = 0;
  const numsSize = nums.length;
  let duplicateCount = 0;

  for (let i = 0; i < numsSize - duplicateCount; i++) {
    for (let j = i + 1; j < numsSize - duplicateCount; j++) {
      if (nums[j] === nums[i]) {
        if (j !== numsSize - 1 - duplicateCount) {
          // this way will change the relative order of nums ~
          // const temp = nums[j];
          // nums[j] = nums[numsSize - 1 - duplicateCount];
          // nums[numsSize - 1 - duplicateCount] = temp;

          const dupNum = nums.splice(j, 1);
          nums.push(dupNum); // push the duplicated number in the back of the array
          j--;
        }
        duplicateCount++;
      } else if (nums[j] > nums[i]) break;
    }
  }

  let k = numsSize - duplicateCount;
  console.log('Print all the unique numbers: ');

  for (let i = 0; i < k; i++) {
    console.log(nums[i]);
  }
  return k;
};

console.log('k = ', removeDuplicates([1, 1, 2]));
console.log('k = ', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log('k = ', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 228. Summary Ranges

// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [String(nums[0])];

  const rstArr = [];
  let startRg = nums[0],
    endRg;
  let i = 0,
    j = 1;

  for (; i < nums.length - 1; i++, j++) {
    if (nums[j] - nums[i] > 1) {
      endRg = nums[i];
      if (endRg === startRg) {
        rstArr.push(String(startRg));
      } else {
        let tmp = String(startRg) + '->' + String(endRg);
        rstArr.push(tmp);
      }
      // update idxs
      startRg = nums[j];
    }
  }

  endRg = nums[i];
  if (endRg === startRg) rstArr.push(String(startRg));
  else {
    let tmp = String(startRg) + '->' + String(endRg);
    rstArr.push(tmp);
  }

  return rstArr;
};

console.log(summaryRanges([]));
console.log(summaryRanges([8]));
console.log(summaryRanges([8, 9]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 5, 7, 9, 10]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8]));

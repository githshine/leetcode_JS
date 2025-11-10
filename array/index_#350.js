// 350. Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection.
//  Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const rstMap = new Map();
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    let fromIdx = 0;
    if (rstMap.has(num)) fromIdx = rstMap.get(num).at(-1) + 1;
    // console.log('fromIdx:', fromIdx);

    const indexOfNum = nums2.indexOf(num, fromIdx);
    if (indexOfNum !== -1) {
      if (rstMap.has(num)) {
        rstMap.get(num).push(indexOfNum);
      } else {
        rstMap.set(num, [indexOfNum]);
      }
    }
  }

  const arr = [];
  // key is the num, value is the index array of the num
  for (const [key, value] of rstMap.entries()) {
    arr.push(...Array(value.length).fill(key));
  }
  return arr;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// 还有一种很好滴解题思路是： 使用 “消消乐” 的方式
//  统计 nums1 中各个num 出现的次数到一个map中，
//  然后遍历 nums2，在map中出现一次，就在返回结果中记录一下，同时 map 中的count - 1

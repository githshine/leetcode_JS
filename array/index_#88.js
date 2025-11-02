// 88. Merge Sorted Array
// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = (j = 0); i < m && j < n; i++) {
    if (nums2[j] <= nums1[i]) {
      nums1.splice(i, 0, nums2[j]);

      // i++;
      m++;
      j++;
    }
  }

  // for (; j < n && m < nums1.length; j++, m++) {
  //   nums1[m] = nums2[j];
  //   // nums1.splice(m, 0, ...nums2.slice(j));
  // }

  nums1.splice(m, nums1.length - m, ...nums2.slice(j));

  console.log('nums1:', nums1);
};

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3); // how to design test cases: x < y; x > y; x === y
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);

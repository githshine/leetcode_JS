// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection.
//    Each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const arrNums1 = [...set1];

  // 对于第二个数组的 set 转换事可以省略的； 因为后续也只是使用了 indexof 来验证是否包含某项元素，
  // 把它转换成 set 再转换回来 并没有直接帮助
  const set2 = new Set(nums2);
  const arrNums2 = [...set2];

  const rstArr = [];
  // 下面的两行代码 怎么说呢？ 有点过大于功了
  // 太长了，显得不明朗，还不如多比较几个 元素 呢
  const smlNumArr = arrNums1.length < arrNums2.length ? arrNums1 : arrNums2;
  const largNumArr = arrNums1.length < arrNums2.length ? arrNums2 : arrNums1;
  for (let i = 0; i < smlNumArr.length; i++) {
    if (largNumArr.indexOf(smlNumArr[i]) !== -1) {
      rstArr.push(smlNumArr[i]);
    }
  }
  return rstArr;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

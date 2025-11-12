// 448. Find All Numbers Disappeared in an Array

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
// Input: nums = [1,1]
// Output: [2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  runtime is too long!
var findDisappearedNumbers_01 = function (nums) {
  const n = nums.length;
  const setNums = new Set(nums);
  const arrNums = [...setNums].sort((a, b) => a - b);

  const rstArr = [];
  for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i] > i + 1) {
      let tmp = i === 0 ? 1 : arrNums[i - 1] + 1;
      while (tmp < arrNums[i]) {
        rstArr.push(tmp);
        tmp++;
      }
    }
  }

  if (arrNums.at(-1) < n) {
    let tmp = arrNums.at(-1) + 1;
    while (tmp <= n) {
      rstArr.push(tmp);
      tmp++;
    }
  }

  return rstArr;
};

var findDisappearedNumbers = function (nums) {
  const n = nums.length;

  // const setNums = new Set(nums);
  const arrNums = nums.sort((a, b) => a - b);
  const rstArr = [];
  for (let i = 1, j = 0; i <= n, j < arrNums.length; j++, i++) {
    if (j - 1 >= 0 && arrNums[j] === arrNums[j - 1]) i--;
    if (arrNums[j] > i) {
      rstArr.push(
        ...Array.from({ length: arrNums[j] - i }, (_, idx) => idx + i)
      );
      i = arrNums[j];
    }
  }
  // Array.from({ length: 8 }, (_, i) => i + 2); // i is the index, starts from 0

  if (arrNums.at(-1) < n) {
    rstArr.push(
      ...Array.from(
        { length: n - arrNums.at(-1) },
        (_, idx) => idx + arrNums.at(-1) + 1 //idx starts from 0
      )
    );
  }

  return rstArr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5,6]
console.log(findDisappearedNumbers([1, 1])); // Output: [2]
console.log(findDisappearedNumbers([4, 3, 2, 7, 4, 2, 3, 1])); // Output: [5,6,8]
console.log(findDisappearedNumbers([4, 3, 2, 7, 4, 2, 3, 1, 1, 1, 1])); // Output: [5,6,8]

//  还有一种技巧可以使用： 根据这个题干的特点，使用出现的数据标记 相应索引位置的数据 （比如设置为 负数）
//    之后遍历每个数，没被标记（为负数的）的对应的索引 就是没有出现过的数据

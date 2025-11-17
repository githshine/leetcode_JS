// 12. Integer to Roman
// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// Example 1:
// Input: num = 3749
// Output: "MMMDCCXLIX"
// Explanation:
// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

/**
 * @param {number} num
 * @return {string}
 */
const convertMap = new Map([
  [1000, 'M'],
  [500, 'D'],
  [100, 'C'],
  [50, 'L'],
  [10, 'X'],
  [5, 'V'],
  [1, 'I'],
]);
console.log(convertMap);

var intToRoman = function (num) {
  function getRmStr(count, curRm, prevRm, prepreRm) {
    if (count < 4) {
      return curRm.repeat(count);
    } else if (count === 4) {
      return curRm + prevRm;
    } else if (9 > count && count >= 5) {
      return prevRm + curRm.repeat(count % 5);
    } else if (count === 9) {
      return curRm + prepreRm;
    }
  }

  let rst = '';
  while (num > 0) {
    if (Math.floor(num / 1000) >= 1) {
      let count = Math.floor(num / 1000);
      rst = rst.concat(convertMap.get(1000).repeat(count));

      // update num
      num = num % 1000;
    } else if (Math.floor(num / 100) >= 1) {
      let count = Math.floor(num / 100);
      rst = rst.concat(
        getRmStr(
          count,
          convertMap.get(100),
          convertMap.get(500),
          convertMap.get(1000)
        )
      );

      num = num % 100;
    } else if (Math.floor(num / 10) >= 1) {
      let count = Math.floor(num / 10);
      rst = rst.concat(
        getRmStr(
          count,
          convertMap.get(10),
          convertMap.get(50),
          convertMap.get(100)
        )
      );

      num = num % 10;
    } else if (Math.floor(num / 1) >= 1) {
      let count = Math.floor(num / 1);
      rst = rst.concat(
        getRmStr(
          count,
          convertMap.get(1),
          convertMap.get(5),
          convertMap.get(10)
        )
      );

      break;
    }
  }

  return rst;
};

// console.log(intToRoman(100));
// console.log(intToRoman(1000));
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
console.log(intToRoman(58)); // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"

// 还有一种方法就是 直接枚举， 列出所有的特殊数字，进行一一遍历

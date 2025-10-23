// 168. Excel Sheet Column Title

// Given an integer columnNumber,
//  return its corresponding column title as it appears in an Excel sheet.

// Example 1:
// Input: columnNumber = 1
// Output: "A"
// Example 2:
// Input: columnNumber = 28
// Output: "AB"
// Example 3:
// Input: columnNumber = 701
// Output: "ZY"

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle_1 = function (columnNumber) {
  const colMap = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z',
  };

  const rstArr = [];
  let i = 0;

  while (columnNumber > 0) {
    let n = (columnNumber % Math.pow(26, i + 1)) / Math.pow(26, i);

    if (n === 0) {
      n = 26;
    }
    rstArr.unshift(colMap[n]);
    columnNumber -= n * Math.pow(26, i);
    i++;
  }
  return rstArr.join('');
};

// example solution:
// 第一个好处： 用 alphabet 代替我写的map， 又短 又好写
// 第二个好处： columNumber-- 这行代码即解决了方便对应上 alphabet 索引从0开始；
//                     又解决了 当对应字母为 Z 时，如果不-1， % 26 的余数会为0 的问题
var convertToTitle = function (columnNumber) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let res = '';
  while (columnNumber > 0) {
    columnNumber--; // 这行代码很关键，不能省，不能改，也不能挪位置！！
    res = alphabet[columnNumber % 26] + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(18277));

// const arr = [1, 2, 4, 6, 9];

// console.log(Math.max(...arr));
// console.log([...arr, 8]);

// 13. Roman to Integer
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
var romanToInt = function (s) {
  const romToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (s.length === 1) return romToInt[s[0]];

  let sum = (prevNum = romToInt[s[0]]);
  // let prevNum = s[0];
  for (let i = 1; i < s.length; i++) {
    let num = romToInt[s[i]];
    if (prevNum >= num) {
      sum += num;
    } else {
      // if prevNum < num, need to do the substraction
      sum = sum - prevNum + (num - prevNum);
    }
    prevNum = num;
  }
  return sum;
};

console.log(romanToInt('I'));
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

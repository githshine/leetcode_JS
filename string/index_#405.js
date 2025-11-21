// 405. Convert a Number to Hexadecimal

// Example 1:
// Input: num = 26
// Output: "1a"
// Example 2:
// Input: num = -1
// Output: "ffffffff"

/**
 * @param {number} num
 * @return {string}
 */
var toHex_00 = function (num) {
  const sixteenStr = '0123456789abcdef';

  num = num > 0 ? num : ~num;

  function twoConvertToSixteen(arr) {
    if (arr.length !== 4) {
      console.log('Need 4 bits!');
      return;
    }
    return sixteenStr[arr[0] * 8 + arr[1] * 4 + arr[2] * 2 + arr[3] * 1];
  }

  let absNum = Math.abs(num);

  // 二进制数组
  const rstArr = [];
  let rstStr = '';
  while (absNum > 0) {
    rstArr.unshift(absNum % 2);
    absNum /= 2;
  }

  // 左侧 pad 补0
  while (rstArr.length % 4 !== 0) rstArr.unshift(0);

  if (num === absNum) {
    // positive num
    // 二进制 转 十六进制
    while (rstArr.length !== 0) {
      rstStr.concat(twoConvertToSixteen(rstArr.slice(0, 4)));
      rstArr = rstArr.slice(4);
    }
  } else {
    // negative num
    let x = 5; // 二进制：0000 0101
    let result = ~x; // 按位取反
    console.log('result:', result);
  }

  return rstStr;
};

var toHex = function (num) {
  // console.log('~1:', ~1);
  // console.log('~2:', ~2);
  // console.log('~5:', ~5); // -6
  // console.log('~ -6:', (-6 >>> 0).toString(2).padStart(32, '0')); //
  // console.log('~ -6:', (-6 >>> 0).toString(16).padStart(8, '0')); //
  // console.log('~ -1:', (-1 >>> 0).toString(16).padStart(8, '0')); //
  // console.log('~ -1:', -1 >>> 0); //

  if (num === 0) return '0';
  const sixteenStr = '0123456789abcdef';
  num = num > 0 ? num : num >>> 0;
  // console.log('num:', num);

  // 十六进制数组
  const rstArr = [];
  while (num > 0) {
    // console.log('num % 16:', num % 16);

    rstArr.unshift(sixteenStr[num % 16]);
    num = Math.floor(num / 16);
    // console.log('Math.floor(num / 16):', Math.floor(num / 16));
  }
  return rstArr.join('');
};

console.log(toHex(-1)); //ffffffff
console.log(toHex(0)); //0
console.log(toHex(5));
console.log(toHex(10)); // a
console.log(toHex(26)); //1a
console.log(toHex(32));
console.log(toHex(33));
console.log(toHex(43)); // 2b

// #168 问题的延续
// 研究 各种进制 之间转换的方法

// 十进制 转 二进制
// Example: 10 -> 1010; 1 -> 1; 2 -> 10; 3 -> 1;  7 -> 0111; 8 -> 1000;
function convertFromTenToTwo(num) {
  if (!Number.isInteger(num)) throw new TypeError('num must be an integer');
  if (num === 0) return '0';

  let rstStr = '';
  while (num > 0) {
    rstStr = (num % 2) + rstStr;
    num = Math.floor(num / 2);
  }
  return rstStr;
}

// 使用内建方法
function convertFromTenToTwo_2(num) {
  if (!Number.isInteger(num)) throw new TypeError('num must be an integer');
  // if (num === 0) return '0'; // 可写可不写

  return num.toString(2);
}
console.log('Test inner function of numbers:');
console.log(convertFromTenToTwo_2(0));
console.log(convertFromTenToTwo_2(2));
console.log(convertFromTenToTwo_2(3));
console.log(convertFromTenToTwo_2(10));

// console.log('10:', convertFromTenToTwo(10));
// console.log('1', convertFromTenToTwo(1));
// console.log('8:', convertFromTenToTwo(8));
// console.log('2000:', convertFromTenToTwo(2000));

// 十进制 转 十六进制
// Example: 10 -> A; 1 -> 1; 15 -> F; 16 -> 10; 17 -> 11; 32 -> 20; 42 -> 2A
function convertFromTenToSixteen(num) {
  let rstStr = '';
  const char16 = '0123456789ABCDEF';
  while (num > 0) {
    rstStr = char16.at(num % 16) + rstStr;
    num = Math.floor(num / 16);
  }
  return rstStr;

  // 更简洁的写法就是 num.toString(16) -- 把十进制转成 16进制
}
// console.log('10:', convertFromTenToSixteen(10));
// console.log('1:', convertFromTenToSixteen(1));
// console.log('15:', convertFromTenToSixteen(15));
// console.log('17:', convertFromTenToSixteen(17));
// console.log('32:', convertFromTenToSixteen(32));
// console.log('42:', convertFromTenToSixteen(42));

// 二进制 转 十六进制
// Example: 10 -> 2; 1000 -> 8; 1111 -> F; 10000 -> 10; 10001 -> 11; 100000 -> 20; 101010 -> 2A
// The parameter num is actually a string
function convertFromTwoToSixteen(numStr) {
  // 把二进制转成十进制 也有一个内建函数可用： parseInt(twoBasedNum, 2)
  console.log('test inner func:', parseInt('10', 2));
  console.log('test inner func:', parseInt('1010', 2));

  let str = 'test';
  str.includes('est'); // return true or false
  function converFromTwoToTen(str) {
    let rstNum = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      rstNum += str[i] * Math.pow(2, str.length - 1 - i);
    }
    return rstNum;
  }
  // console.log('10:', converFromTwoToTen('10'));
  // console.log('101:', converFromTwoToTen('101'));
  // console.log('1010:', converFromTwoToTen('1010'));

  let rstArr = '';
  const char16 = '0123456789ABCDEF';
  // while (numStr.length > 0 && numStr[0] > 0) {  // 这里的 “&& numStr[0] > 0” 是多余的条件，只需要关注 长度大于0即可
  while (numStr.length > 0) {
    if (numStr.length <= 4) {
      let num = converFromTwoToTen(numStr);
      rstArr = char16[num] + rstArr;
      return rstArr;
    } else {
      // numStr.length > 4
      let tempStr = numStr.slice(-4);
      let num = converFromTwoToTen(tempStr);
      rstArr = char16[num] + rstArr;

      numStr = numStr.slice(0, -4);
    }
  }
  return rstArr;
}
console.log('Trying to print something into the console~');

console.log('Test:', convertFromTwoToSixteen('10'));
console.log('Test:', convertFromTwoToSixteen('101'));
console.log('Test:', convertFromTwoToSixteen('1010'));
console.log('Test:', convertFromTwoToSixteen('11010'));
console.log('Test:', convertFromTwoToSixteen('11111010'));

// 十六进制 转 二进制
function convertFromSixteenToTwo(numStr) {
  const char16 = '0123456789ABCDEF';
  let rstStr = '';
  for (let i = 0; i < numStr.length; i++) {
    const num = char16.indexOf(numStr[i]);
    let tempStr = convertFromTenToTwo(num);
    rstStr += i > 0 ? tempStr.padStart(4, '0') : tempStr;
  }

  return rstStr;
}

console.log(convertFromSixteenToTwo('F'), 'is 1111 ?');
console.log(convertFromSixteenToTwo('A'), 'is 1010 ?');
console.log(convertFromSixteenToTwo('21'), 'is 100001 ?');

// 使用现有的函数 实现
let number = 10;
console.log(
  'Use inner function to convert integer to 2-based number:',
  number.toString(2)
);

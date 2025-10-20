let s = 'Hello world!';

console.log(s.includes('ll'));
console.log(s.includes('lll'));

let num = 107;
console.log(String(num).includes('07'));

let str = '90';
console.log(Number(str) / 3);

console.log('Test the function Number.isNaN:');

console.log(Number.isInteger(Number(str)));
console.log(Number.isInteger(90));
console.log(Number.isInteger('90'));

// 67. Add Binary
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const reverseA = Array.from(a, Number).reverse();
  const reverseB = Array.from(b, Number).reverse();

  const maxLen = Math.max(a.length, b.length); // >= 1
  let extra = 0;
  const rstArr = [];

  for (let i = 0; i < maxLen; i++) {
    let a_v = (b_v = 0);
    if (i < reverseA.length) a_v = reverseA[i];
    if (i < reverseB.length) b_v = reverseB[i];

    rstArr.push((a_v + b_v + extra) % 2);

    extra = Math.trunc((a_v + b_v + extra) / 2);
  }
  if (extra) rstArr.push(extra);

  return rstArr.reverse().join('');
};

console.log('test addBinary func: ');

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));

//  pass
//  但是 我这个方法 其实并没有太用到 二进制 的一些方法也好、函数也好
//  这个可以是后面加强的一个方向！！
//  学到的一个点是： JS 中的数字都是 Number， 不区分 int， long， double， float 等
//    所以除法得到的结果都是小数。 如果希望是整数的话，可以使用 Math.trunc() 函数

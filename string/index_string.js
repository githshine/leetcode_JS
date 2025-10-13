// 1768. Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const minLength = Math.min(word1.length, word2.length);
  console.log(minLength);

  let resultStr = '';
  const resultStrArr = [];
  resultStrArr.push([1, 2, 3]);
  resultStrArr.push(Array.from('456'));
  resultStrArr.push([7, 8, [9, 10]]);
  console.log('new array: ', resultStrArr); // new array:  (3) [Array(3), Array(3), Array(3)]
  // Array.toString() method 会把多层的Array 都铺平显示， 即多维数组也能输出为一维的字符串
  console.log('new array string: ', resultStrArr.toString()); // new array string:  1,2,3,4,5,6,7,8,9,10
  // Array.join(separator) method 不会 把多层的Array 铺平展示，所以多维数组的展示会有问题
  console.log('new array string join: ', resultStrArr.join('')); // new array string join:  1,2,34,5,67,8,9,10
  console.log(
    'new array string -> array: ',
    Array.from(resultStrArr.toString())
  );

  for (let i = 0; i < minLength; i++) {
    resultStr = resultStr.concat(word1.charAt(i), word2.charAt(i));
    // resultStr + word1.charAt(i) + word2.charAt(i);
  }
  console.log('resultStr: ', resultStr);

  word1.length > minLength &&
    (resultStr = resultStr.concat(word1.slice(minLength)));
  word2.length > minLength &&
    (resultStr = resultStr.concat(word2.slice(minLength)));

  //test if string.forEach() is a function?  A: No, it's not a function.
  // word1.slice(0).forEach((ch) => {
  //   console.log('forEach of string: ' + ch);
  // });
  for (const ch of word1.slice(0)) {
    console.log(ch);
  }

  return resultStr;
};

console.log(mergeAlternately('ab', 'pqrs'));

// 1071. Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s"
//    if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let shortStr = str1.length < str2.length ? str1 : str2;
  // console.log(shortStr);

  let shortStr2 = 'leet'.length < 'code'.length ? 'leet' : 'code';
  // console.log('2: ', shortStr2);
  // if (str1.indexOf(shortStr) !== -1 && str2.indexOf(shortStr) !== -1)
  //   return shortStr;
  // console.log('7/2 = ', 7 / 2);

  // If the shortest "str" is not "gcdStr," then proceed with
  // a step-by-step search (starting from the largest and working downward).

  //What are the possible candidate strings?

  // Here we make use of prefix strings. If a string base is the GCD string,
  // it must be a prefix of both str1 and str2.
  // So instead of trying every combination of characters,
  // we instead just take each prefix string of str1 (or str2)
  // and check if it is the GCD string.

  // Above is the reason why I needn't have a for loop for i !!!
  // for (let i = 0; i < shortStr.length; i++) {
  for (let j = shortStr.length; j >= 1; j--) {
    const str = shortStr.slice(0, j);
    // if (str1.indexOf(str) !== -1 && str2.indexOf(str) !== -1) return str;

    let cpyStr1 = str1.slice(0);
    let cpyStr2 = str2.slice(0);
    const strLen = str.length;

    while (cpyStr1.length >= strLen) {
      if (cpyStr1.indexOf(str) !== 0) {
        break;
      } else {
        // If the target string starts with str, remove this str from the target string.
        cpyStr1 = cpyStr1.slice(strLen);
      }
    }
    while (cpyStr2.length >= strLen) {
      if (cpyStr2.indexOf(str) !== 0) {
        break;
      } else {
        // If the target string starts with str, remove this str from the target string.
        cpyStr2 = cpyStr2.slice(strLen);
      }
    }

    if (cpyStr1.length === 0 && cpyStr2.length === 0) return str;
  }
  // }

  return '';
};

console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('LEET', 'CODE'));

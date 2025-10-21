// 125. Valid Palindrome

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome_01 = function (s) {
  let s2 = s.replace(/[^A-Za-z0-9]/g, '');
  console.log('only characters and numbers left:', s);
  console.log('s2:', s2);

  return Array.from(s2).reverse().join('').toLowerCase() === s2.toLowerCase();
};

// faster and use less memory
var isPalindrome = function (s) {
  let s2 = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let len = s2.length;

  for (let i = 0; i < len / 2; i++) {
    if (s2[i] !== s2[len - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome(''));
console.log(isPalindrome('race a car'));

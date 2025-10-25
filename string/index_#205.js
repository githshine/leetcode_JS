// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Explanation:
// The strings s and t can be made identical by:
// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (typeof s !== 'string' || typeof t !== 'string')
    throw new TypeError('parameters need to be strings');
  if (s.length !== t.length) return false;

  const charObj = {};
  for (let i = 0; i < s.length; i++) {
    if (charObj.hasOwnProperty(s[i]) && t[i] !== charObj[s[i]]) {
      return false;
    } else if (!charObj.hasOwnProperty(s[i])) {
      // for (const value in charObj.values()) { // 只有 Map 对象 才有 .values() 这个method
      for (const value of Object.values(charObj)) {
        // ‼️ 这里不能用 for...in  只能用 for...of ; 因为 for...in 是遍历keys的，for...of 才是遍历 values 或者其他可迭代对象的
        if (value === t[i]) return false;
      }
      charObj[s[i]] = t[i];
    }
  }

  return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('egg', 'added'));
console.log(isIsomorphic('egg', 'ade'));
console.log(isIsomorphic('title', 'paper'));
console.log(isIsomorphic('badc', 'baba'));

console.log('object for..in loop test:');
const proto = { inherited: 'x' };
const obj = Object.create(proto);
obj.a = 1;
obj.b = 2;

for (const k in obj) {
  console.log(k); // 可能输出 "a", "b", "inherited"
}
console.log('obj:', obj);
console.log('......');
for (const key in obj) {
  if (!obj.hasOwnProperty(key)) continue;

  console.log(key);
}

console.log('........');

for (const key in Object.keys(obj)) {
  console.log(key); // 0, 1
  //为什么会输出 0 1？
  // 关键点在于 Object.keys(obj) 的返回值是数组：['a','b']。当你对一个数组使用 for...in 时，for...in 会遍历数组的属性名（索引），
  //        也就是 '0', '1'（打印出来是 0, 1）。所以你不是在遍历 ['a','b'] 的元素内容，而是在遍历它的键名（索引）。

  // 如果想要输出 obj 的所有keys，最简单的方法就是使用： for(const key of Object.keys(obj))
  //                                        使用 for...of 遍历可迭代的对象，比如 array，string ， Map 等
}

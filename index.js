// 455. Assign Cookies
// Each child i has a greed factor g[i], each cookie j has a size s[j].
//  If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.
// The goal is to maximize the number of your content children and output the maximum number.

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// Runtime 2000 多毫秒 太长了！！ 因为输入数组很长！
var findContentChildren_01 = function (g, s) {
  let count = 0;
  s.sort((a, b) => a - b); // s increscent
  for (let i = 0; i < g.length; i++) {
    const greetFactor = g[i];
    for (let j = 0; j < s.length && count <= s.length; j++) {
      if (s[j] >= greetFactor) {
        count++;
        s[j] = -s[j]; // make it negative, means that it has been given to a child
        break;
      }
    }
  }
  return count;
};

var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a); // decrescent
  s.sort((a, b) => b - a); // decrescent

  let count = 0;
  for (let i = 0; i < g.length; i++) {
    const greetFactor = g[i];
    for (let j = 0; j < s.length && count < s.length; j++) {
      if (s[j] < 0) continue;
      else if (s[j] < greetFactor) break;
      else if (s[j] >= greetFactor) {
        // s[j] > 0 && s[j] >= greetFactor
        count++;
        s[j] = -s[j];
        break;
      }
    }
  }

  return count;
};
console.log('testing~');

console.log(findContentChildren([1, 2, 3], [1, 1])); // Output: 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // Output: 2

// 还有一种算法方法为： two pointers 方法，或者说 动态指针。
//    就是在遍历一个数组的同时，（根据条件）变更另一个数组的索引

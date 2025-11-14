// 383. Ransom Note

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct_01 = function (ransomNote, magazine) {
  const noteMap = new Map();
  const magazMap = new Map();
  let m, n;
  for (let i = 0; i < ransomNote.length; i++) {
    m = ransomNote[i];
    if (noteMap.has(m)) noteMap.set(m, noteMap.get(m) + 1);
    else noteMap.set(m, 1);
  }
  for (let j = 0; j < magazine.length; j++) {
    n = magazine[j];
    if (magazMap.has(n)) magazMap.set(n, magazMap.get(n) + 1);
    else magazMap.set(n, 1);
  }

  // compare the data in these two maps
  for (const [key, value] of noteMap.entries()) {
    if (!magazMap.has(key) || magazMap.get(key) < value) return false;
  }

  return true;
};

var canConstruct = function (ransomNote, magazine) {
  let str = 'test';
  // str.replace('t',).  //记住： string 在JS 中是immutable 的，所以修改string的函数返回结果都是新的string
  const magazineArr = Array.from(magazine);

  for (let i = 0; i < ransomNote.length; i++) {
    const note = ransomNote[i];
    if (magazineArr.includes(note)) {
      magazineArr.splice(magazineArr.indexOf(note), 1);
    } else return false;
  }

  return true;
};

console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aaa'));
console.log(canConstruct('abb', 'aab'));

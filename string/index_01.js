function test() {
  console.log('test');
}

test();

//live coding
//Q1
//   Find the First Repeating Character
// Write a function firstRepeatingChar that takes a string and returns the first character that appears more than once.
//  If there are no repeating characters, return null.
function firstRepeatingChar(str) {
  for (let index = 0; index < str.length - 1; index++) {
    const ch = str[index];
    if (str.substring(index + 1).indexOf(ch) !== -1) return ch;
  }

  return null;
}

console.log('duplicated char: ', firstRepeatingChar('abca'));

// Test cases
// console.log(firstRepeatingChar('abca')); // → 'a'
console.log(firstRepeatingChar('abcdef')); // → null
console.log(firstRepeatingChar('aabbcc')); // → 'a'
console.log(firstRepeatingChar('hwertyfgh')); // → 'h'

//Q2 :
/*
Find the Most Frequent Element
Write a function mostFrequent that finds the most frequently occurring element in an array.
*/

const mostFrequent = (array) => {
  const chCountMap = new Map();
  for (let index = 0; index < array.length; index++) {
    const ch = array[index];
    if (chCountMap.has(ch)) {
      chCountMap.set(ch, chCountMap.get(ch) + 1);
    } else chCountMap.set(ch, 1);
  }

  console.log(chCountMap);
  let maxCount = 0;
  let mostFreCh;
  chCountMap.forEach((count, ch, map) => {
    if (count > maxCount) {
      maxCount = count;
      mostFreCh = ch;
    }
  });

  return mostFreCh;
};

console.log('mostFrequent:');
console.log(mostFrequent([1, 2, 3, 3, 2, 3])); // → 3
console.log(mostFrequent(['a', 'b', 'a', 'a', 'c'])); // → 'a'

//Q3
// Write a function called commonElements that takes in any number of arrays in the
// argument. The arrays may contain both numbers and strings. It should return a new array
// with all the common elements (both numbers and/or strings) from the given input.
// If there are no common numbers/strings, return "Nothing in Common!"
// Assume there are no duplicates within the array.

//make a set and return that
// the function should return

console.log('Q3:');
// 使用 Object
let obj = {};
obj['key1'] = 'value1';
obj[2] = 'value2';
console.log(obj); // 输出: { '2': 'value2', key1: 'value1' }

// 使用 Map
let map = new Map();
map.set('key1', 'value1');
map.set(2, 'value2');
console.log(map); // 输出: Map { 'key1' => 'value1', 2 => 'value2' }

function commonElements(...arrays) {
  // F
  // for()
  //would be slow but one solution would just to have nested for loops and test

  if (arrays.length === 0) return 'Nothing in Common!';
  else if (arrays.length === 1) return arrays[1];

  // arrays contains more than one array
  const firstArr = arrays[0];
  const comElements = [];

  // go through every element in firstArr,
  // to check if this element is in every other array in the arrays parameter
  firstArr.forEach((element) => {
    let i = 1;
    for (; i < arrays.length; i++) {
      const arr = arrays[i];
      if (arr.indexOf(element) === -1) break; // TODO 验证 前面的数组都包含的元素，最后一个数组 不包含
    }

    if (i === arrays.length) comElements.push(element);

    // comElements.push('MOnday');
  });

  // console.log('comElements : ' + comElements);

  return comElements.length > 0 ? comElements : 'Nothing in Common!';
}

const arr1 = [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion'];
const arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
const arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

const arr4 = [2, 100, 2000, 'dog', 3, 'lion'];
const arr5 = ['lion', 'tiger', 2, 3];
const arr6 = ['giray', 'monkey', 2, 3];
const arr7 = ['arr', 3];

console.log('test 1: ');
console.log(commonElements(arr1, arr2, arr3)); //-> [2, 3, 2000, 'dog']
console.log(commonElements(arr4, arr5, arr6, arr7)); //-> [2, 3, 2000, 'dog']

console.log('End of Q3');

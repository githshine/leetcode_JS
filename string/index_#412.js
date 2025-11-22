// 412. Fizz Buzz

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    const idx = i - 1;

    if (i % 3 === 0 && i % 5 === 0) {
      arr[idx] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      arr[idx] = 'Fizz';
    } else if (i % 5 === 0) {
      arr[idx] = 'Buzz';
    } else {
      arr[idx] = String(i);
    }
  }

  return arr;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

// 6. Zigzag Conversion

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const rstArr = Array.from({ length: numRows }, () => []);
  console.log('rstArr:', rstArr);

  const round = numRows * 2 - 2;

  let i = 0;
  for (const ch of s) {
    const idx = i % round <= numRows - 1 ? i % round : round - (i % round);
    console.log('idx:', idx);

    rstArr[idx].push(ch);
    i++;
  }

  return rstArr
    .reduce((acc, curr) => {
      return acc.concat([...curr]);
    }, [])
    .join('');
};

// console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
// console.log(convert('PAYPALISHIRING', 4)); // Output: "PINALSIGYAHRPI"
console.log(convert('A', 1)); // Output: "PINALSIGYAHRPI"

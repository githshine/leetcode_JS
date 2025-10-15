/**
 * @param {number[]} prices
 * @return {number}
 */

// Input: prices = [7,1,5,3,6,4]
// Output: 5
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  const maxProfitArr = [];
  for (let i = 0; i < prices.length - 1; i++) {
    const buyP = prices[i];

    let sellP = Math.max(...prices.slice(i + 1));
    let profit = sellP - buyP > 0 ? sellP - buyP : 0;

    maxProfitArr.push(profit);
  }

  return Math.max(...maxProfitArr);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7]));

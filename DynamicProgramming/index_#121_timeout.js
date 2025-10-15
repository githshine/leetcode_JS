// 121. Best Time to Buy and Sell Stock

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
    let max = 0;
    let profit = 0;

    for (let j = i + 1; j < prices.length; j++) {
      let sellP = prices[j];
      profit = sellP - buyP || 0;
      max = profit > max ? profit : max;
    }

    maxProfitArr.push(max);
  }

  return Math.max(...maxProfitArr);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7]));

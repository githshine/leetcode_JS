/**
 * @param {number[]} prices
 * @return {number}
 */

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// profit[1] = 0;
// profit[2] = prices[2] - prices[1] + profit[1];
// return Math.max(...profit)

var maxProfit = function (prices) {
  if (!prices || prices.length === 1) return 0;

  let maxProfitV = 0;
  let minPrinceSoFar = prices[0];
  for (let i = 1; i < prices.length; i++) {
    maxProfitV = Math.max(prices[i] - minPrinceSoFar, maxProfitV);

    minPrinceSoFar = Math.min(prices[i], minPrinceSoFar);
  }

  return maxProfitV;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7]));
console.log(maxProfit([1, 2]));

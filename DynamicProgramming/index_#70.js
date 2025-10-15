// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// 经典动态规划 问题 ‼️

/**
 * @param {number} n ,  1 =< n <= 45
 * @return {number}
 */

var climbStairs = function (n) {
  // dp[i] = dp[i-1] + dp[i-2]
  // dp[1] = 1, dp[2] = 2
  if (n <= 2) return n;

  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

console.log('solutions for 2 steps:', climbStairs(2));
console.log('solutions for 3 steps:', climbStairs(3));
console.log('solutions for 4 steps:', climbStairs(4));
console.log('solutions for 5 steps:', climbStairs(5));

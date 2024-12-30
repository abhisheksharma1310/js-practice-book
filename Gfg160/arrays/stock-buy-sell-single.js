/**
 *
 */

function maximumProfit(prices) {
  // your code here
  let min = prices[0];
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    res = Math.max(res, prices[i] - min);
  }
  return res;
}
console.log(maximumProfit([7, 1, 5, 3, 6, 4]));

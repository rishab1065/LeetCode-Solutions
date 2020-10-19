/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k <= 0 || prices.length <= 0) {
    return 0;
  }
  let i = 0;
  let profit = 0;
  if (k >= prices.length / 2) {
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < prices[i + 1]) {
        profit += prices[i + 1] - prices[i];
      }
    }
    return profit;
  }

  profit = new Array(k);
  // 0 buy 1 sell
  while (i < k) {
    profit[i] = new Array(2).fill(Number.MIN_SAFE_INTEGER);
    i++;
  }
  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < k; j++) {
      if (j == 0) {
        profit[j][0] = Math.max(profit[j][0], -prices[i]);
      } else {
        profit[j][0] = Math.max(profit[j][0], profit[j - 1][1] - prices[i]);
      }
      profit[j][1] = Math.max(profit[j][1], profit[j][0] + prices[i]);
    }
  }
  return profit[k - 1][1];
};
maxProfit(2, [3, 2, 6, 5, 0, 3]);

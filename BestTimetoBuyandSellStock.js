/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  var buy = Number.MIN_SAFE_INTEGER;
  var sell = 0;
  for (var i = 0; i < prices.length; i++) {
    buy = Math.max(buy, -prices[i]);
    sell = Math.max(sell, buy + prices[i]);
  }
  return sell;
};

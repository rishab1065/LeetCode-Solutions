/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  var firstBuy = Number.MIN_SAFE_INTEGER;
  var firstSell = Number.MIN_SAFE_INTEGER;
  var secondBuy = Number.MIN_SAFE_INTEGER;
  var secondSell = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < prices.length; i++) {
    firstBuy = Math.max(firstBuy, -prices[i]);
    firstSell = Math.max(firstSell, firstBuy + prices[i]);
    secondBuy = Math.max(secondBuy, firstSell - prices[i]);
    secondSell = Math.max(secondSell, secondBuy + prices[i]);
  }
  return secondSell;
};

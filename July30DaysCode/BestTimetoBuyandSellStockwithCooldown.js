/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var daysVal = new Array(prices.length).fill(undefined);
  daysVal.map((value, index) => {
    daysVal[index] = new Array(2);
  });

  const len = prices.length;
  if (len <= 1) return 0;
  if (len === 2 && prices[1] > prices[0]) return prices[1] - prices[0];
  if (len === 2 && prices[1] < prices[0]) return 0;

  daysVal[0][0] = 0;
  daysVal[0][1] = -prices[0];
  daysVal[1][0] = Math.max(daysVal[0][0], daysVal[0][1] + prices[1]);
  daysVal[1][1] = Math.max(daysVal[0][1], daysVal[0][0] - prices[1]);

  for (var i = 2; i < prices.length; i++) {
    daysVal[i][0] = Math.max(daysVal[i - 1][0], daysVal[i - 1][1] + prices[i]);
    daysVal[i][1] = Math.max(daysVal[i - 1][1], daysVal[i - 2][0] - prices[i]);
  }
  return daysVal[len - 1][0];
};

var maxProfitAns = maxProfit([3, 2, 6, 5, 0, 3]); // 7
console.log(maxProfitAns);
maxProfitAns = maxProfit([1, 2]); // 1
console.log(maxProfitAns);
maxProfitAns = maxProfit([2, 1]); // 0
console.log(maxProfitAns);
maxProfitAns = maxProfit([1, 2, 3, 0, 2]); // 3
console.log(maxProfitAns);
maxProfitAns = maxProfit([2, 1, 2, 0, 1]); // 1
console.log(maxProfitAns);
maxProfitAns = maxProfit([6, 1, 3, 2, 4, 7]); // 6
console.log(maxProfitAns);

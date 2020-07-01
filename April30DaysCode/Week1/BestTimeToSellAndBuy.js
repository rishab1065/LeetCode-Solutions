/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buyPrice = prices[0];
  let prevPrice = prices[0];
  let startPrice = prices[0];
  prices.forEach((price, index) => {
    if (index !== 0) {
      if (buyPrice < price) {
        price = buyPrice;
      }
    }
  });

  console.log(profit, 'profit');
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const costDayMap = {};
  return dp(days, days[days.length - 1], costs, costDayMap);
  // console.log(costDayMap)
};

var dp = function (days, day, costs, costDayMap) {
  // console.log(day)
  if (day < days[0]) {
    return 0;
  }
  if (costDayMap[day]) {
    return costDayMap[day];
  }
  if (day === days[0]) {
    costDayMap[day] = Math.min(costs[0], costs[1], costs[2]);
    return Math.min(costs[0], costs[1], costs[2]);
  }

  if (days.indexOf(day) !== -1) {
    const oneDayCost = dp(days, day - 1, costs, costDayMap) + costs[0];
    const weekCost = dp(days, day - 7, costs, costDayMap) + costs[1];
    const monthCost = dp(days, day - 30, costs, costDayMap) + costs[2];
    const currDayCost = Math.min(oneDayCost, weekCost, monthCost);
    costDayMap[day] = currDayCost;
  } else {
    costDayMap[day] = dp(days, day - 1, costs, costDayMap);
  }
  return costDayMap[day];
};

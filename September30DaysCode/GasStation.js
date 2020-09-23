/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuit = function (gas, cost) {
  const canAnyComplete = gas.reduce((allGas, currGas, i) => {
    allGas += gas[i] - cost[i];
    return allGas;
  }, 0);
  if (canAnyComplete < 0) {
    return -1;
  }

  let startingStation = 0;
  while (startingStation < gas.length) {
    // console.log(startingStation, gas[startingStation], 'startingStation');
    let currentGasLevel = 0;
    currentGasLevel += gas[startingStation] - cost[startingStation];
    let currentStation = -1;
    if (startingStation === gas.length - 1) {
      currentStation = 0;
    } else {
      currentStation = startingStation + 1;
    }
    let canComplete = true;
    // console.log(currentGasLevel, currentStation, 'currentGasLevel');
    while (true) {
      if (currentGasLevel < 0) {
        canComplete = false;
        break;
      }
      if (currentStation === startingStation) {
        break;
      }
      currentGasLevel += gas[currentStation] - cost[currentStation];
      //   console.log(currentGasLevel, startingStation, 'currentGasLevel 2222');
      if (currentStation === gas.length - 1) {
        currentStation = 0;
      } else {
        currentStation++;
      }
    }
    if (canComplete) {
      return startingStation;
    }
    startingStation++;
  }
  return -1;
};

const ans = canCompleteCircuit([3, 3, 4], [3, 4, 4]);
console.log(ans, 'ans');

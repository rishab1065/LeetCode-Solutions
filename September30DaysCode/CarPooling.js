/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  var currLoc = 0;
  var currCapacity = 0;
  while (currLoc < 1000) {
    const endingTrips = trips.filter((trip) => currLoc === trip[2]);
    let offloadingPassangers = 0;
    if (endingTrips.length) {
      endingTrips.forEach((trip) => (offloadingPassangers += trip[0]));
    }
    currCapacity -= offloadingPassangers;
    const startingTrips = trips.filter((trip) => currLoc === trip[1]);
    let newPassangers = 0;
    if (startingTrips.length) {
      startingTrips.forEach((trip) => (newPassangers += trip[0]));
    }
    currCapacity += newPassangers;
    if (currCapacity > capacity) {
      return false;
    }
    currLoc++;
  }
  return true;
};

var carPooling = function (trips, capacity) {
  var tripsMap = {
    start: {},
    end: {},
  };
  var currLoc = 0;
  var currCapacity = 0;
  trips.forEach((trip) => {
    if (!tripsMap.start[trip[1]]) {
      tripsMap.start[trip[1]] = 0;
    }
    tripsMap.start[trip[1]] += trip[0];
    if (!tripsMap.end[trip[2]]) {
      tripsMap.end[trip[2]] = 0;
    }
    tripsMap.end[trip[2]] += trip[0];
  });
  while (currLoc < 1000) {
    let offloadingPassangers = tripsMap.end[currLoc] || 0;
    currCapacity -= offloadingPassangers;

    let newPassangers = tripsMap.start[currLoc] || 0;
    currCapacity += newPassangers;

    if (currCapacity > capacity) {
      return false;
    }
    currLoc++;
  }
  return true;
};

const ans = carPooling(
  [
    [2, 1, 5],
    [3, 3, 7],
  ],
  4
);
console.log(ans, 'ans');

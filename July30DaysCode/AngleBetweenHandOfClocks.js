/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const angleInOneMin = 360 / 60; // for miniute hands
  const angleInOneMinH = (angleInOneMin * 5) / 60; // for hour hand
  const totalHourAngle =
    (hour === 12 ? 0 : hour * 5 * angleInOneMin) + angleInOneMinH * minutes;
  const totalMinAngle = angleInOneMin * minutes;
  //   console.log(360 - (totalMinAngle - totalHourAngle));
  const angle = Math.abs(totalMinAngle - totalHourAngle);
  return angle > 180 ? 360 - angle : angle;
};

// angleClock(1, 57);

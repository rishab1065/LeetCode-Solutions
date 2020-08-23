var Solution = function (rects) {
  this.rects = rects;
  // Sort the rectangles on the basis of Area
  this.rects.sort((a, b) => {
    return this.area(a) - this.area(b);
  });
  // Create an array of points each rectangle has.
  this.pointsArray = this.rects.map((rect) => this.area(rect));
  //Calculate total points in the rectangle.
  this.totalPoints = this.pointsArray.reduce((total, points) => total + points);
};

Solution.prototype.area = function (rect) {
  return (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
};
/**
 * This function will select a random rectangle of the basis of the number of points each rectangle has.
 **/
Solution.prototype.getRandomRectangle = function () {
  let pointNumber = Math.floor(Math.random() * this.totalPoints);
  let index = 0;
  while (pointNumber - this.pointsArray[index] >= 0) {
    pointNumber -= this.pointsArray[index];
    index++;
  }

  return index;
};

Solution.prototype.pick = function () {
  var index = this.getRandomRectangle();
  return this.getPointfromRect(this.rects[index]);
};

Solution.prototype.getPointfromRect = function (rect) {
  var length = rect[2] - rect[0] + 1;
  var width = rect[3] - rect[1] + 1;

  var X = rect[0] + Math.floor(Math.random() * length);
  var Y = rect[1] + Math.floor(Math.random() * width);
  return [X, Y];
};

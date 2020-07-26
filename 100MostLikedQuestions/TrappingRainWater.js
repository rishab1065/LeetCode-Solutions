/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  var i = 0;
  var firstPtr = -1;
  var total = 0;
  while (i < height.length) {
    // console.log(firstPtr, i, total);
    if (height[i] > 0 && firstPtr === -1) {
      firstPtr = i;
    }

    if (height[i] >= (height[i + 1] || 0) && i !== firstPtr) {
      let target = height[firstPtr] <= height[i] ? height[firstPtr] : height[i];
      let waterHeight = target * (Math.abs(firstPtr - i) - 1);
      var k = firstPtr + 1;
      //   console.log(waterHeight, k, i, 'sdfdg');
      while (k < i) {
        // console.log(height[k], k, 'height[k];height[k];height[k];');
        waterHeight -= height[k] < target ? height[k] : target;
        k++;
      }
      //   console.log(waterHeight, 'dsf');
      if (waterHeight > 0) {
        total += waterHeight;
        firstPtr = i;
      }
      i++;
    } else {
      i++;
    }
  }
  console.log(total);
  return total;
};

trap([5, 2, 1, 2, 1, 5]);

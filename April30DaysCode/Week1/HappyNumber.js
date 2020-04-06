/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
    const visitedNums = [];
    let flag = true;
    while (n !== 1 ) {
     
  
      var splitArray = n.toString().split('');
      var total = 0;
  
      splitArray.forEach((num) => {
        num = parseInt(num, 10);
  
        total += num * num;
      });
  
      if (visitedNums.indexOf(total) !== -1) {
        flag = false;
        break;
      }
      visitedNums.push(total);
      n = total;
    }
    if (!flag) {
      return false;
    } else {
      return n == 1;
    }
  };
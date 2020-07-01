/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let staricaseLevel = 1;
    
    while(n>=staricaseLevel){
        n = n - staricaseLevel;
        staricaseLevel++;
    }
    return staricaseLevel - 1 
};
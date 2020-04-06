/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
        let orLen = nums.length
   for(var i=0;i<orLen;i++){
    if(nums[i] === 0){
        nums.splice(i,1);
        nums.push(0);
        orLen--;
        i--;
        
    }
   }
};
console.log(moveZeroes([0,1,0,3,12]));

/**
 * @param {number[]} nums
 * @return {number}
 */



var maxSubArray = function(nums) {
    var sum=0;
    var startIndex = 0;
    var maxSum = -999999999999999;
    
    nums.forEach((num,index)=>{
        sum = sum+num;
        if(maxSum<sum){
            maxSum = sum 
           }
        if(sum<=0){
        startIndex =index+1;
        sum=0;
       }
       
    });
    return maxSum;
};

console.log(maxSubArray([-1,-1]))
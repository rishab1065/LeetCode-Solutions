/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let signleNumber = -1;
    nums.forEach((value,index)=>{
        if(value!==""&&nums.lastIndexOf(value)===index){
            signleNumber = value;
        }else{
            nums[nums.lastIndexOf(value)] ="";
nums[index] ="";
}    
    });
    return signleNumber;
};
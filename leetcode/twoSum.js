// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = []
    for(i = 0; i < nums.length; i++){
        for(j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                res.push(i)
                res.push(j)
                return res
            }
        }
    }
    
};

console.log(twoSum([2,7,11,15], 9))
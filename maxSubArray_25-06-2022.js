// dynamic programming 
// kadanis algorithm
function maxSubArray(nums){
    let cur_sum = nums[0]
    let max_sum = cur_sum

    for(let i = 1; i < nums.length; i++){
        cur_sum = Math.max(cur_sum + nums[i], nums[i])
        max_sum = Math.max(cur_sum,max_sum)
    }
    return max_sum
    console.log(max_sum)
}
maxSubArray([5,4,-1,7,8])

//[-2,1,-3,4,-1]
// [-2,1] cur_sum = 1  max  = 1
// [1,-3] cur_sum = -2 max = 1
// [-2, 4] cur_sum = 4 max = 4
// [4,-1] cur_sum = 3  max = 3

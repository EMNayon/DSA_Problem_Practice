function minSubArrayLen(target,nums){
    let result = Infinity
    let l = 0
    let cur_sum = 0
    for(let i = 0; i<nums.length; i++){
        cur_sum += nums[i]
        while(cur_sum >= target){
            result = Math.min(result, i+1-l)
            cur_sum -= nums[l]
            l++
        }
    }
    result = result === Infinity? 0 : result
    return result
    console.log(result);
    console.log(cur_sum);
}
minSubArrayLen(7,[2,3,1,3,4,3])
minSubArrayLen(11,[1,1,1,1,1,1,1])

//[2,3,1,3] >= 7  , l = 4
// [3,1,3] >= 7, l = 3
// [1,3,4] >= 7, l = 3
// [3,4] >= 7 , l = 2
// [4,3] >= 7 , l = 2

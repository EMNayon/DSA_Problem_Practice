function subArraySum(nums, k){
    const hashTable = {0:1}
    let sum = 0
    let result = 0
    for(let i=0; i< nums.length; i++){
        sum += nums[i]
        if([sum-k] in hashTable) result += hashTable[sum-k]
        hashTable[sum] = (hashTable[sum] || 0) + 1
    }
    // console.log(hashTable);
    // console.log(result);
    return result

}

console.log(subArraySum([1,1,1],2))
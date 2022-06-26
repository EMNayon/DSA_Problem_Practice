// brute force
// function maxSubarraySum(arr,n){
//     if(arr.length < n) return null

//     let max = -Infinity

//     for(let i=0; i < arr.length - n + 1; i++){
//         let tempSum = 0
//         for(let j = 0; j< n; j++){
//             tempSum += arr[i+j]
//             console.log(arr[i+j]);
//         }
//         max = Math.max(tempSum,max)
//         console.log(tempSum);
//     }
//     return max

// }

// console.log(maxSubarraySum([1,2,5,2,8,1,5],2))


// efficient 
// sliding window patter
function maxSubarraySum(arr,n){
    if(arr.length < n) return null
    let max = 0
    let tempSum = 0

    for(let i = 0; i < n; i++) max += arr[i]
    tempSum = max

    for(let j = n; j < arr.length; j++){
        tempSum = tempSum - arr[j-n] + arr[j]
        max = Math.max(tempSum,max)
    }
    return max
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))


// 1 + 2 = 3            max = 3
// 3 - 1 + 5 = 7        max = 7
// 7 - 2 + 2 = 7        max = 7
// 7 - 5 + 8 = 10       max = 10
// 10 - 2 + 1 = 9       max = 10
// 9 - 8 + 5 = 6        max = 10


// Number=input("please enter a series of numbers using any separators you like :")
// Separators=" "
// for char in number:
// if not char .isnumeric():
// Separators=separators+char
// Values="".join(char if char not in separators else " " for char in number).Split()
// print(sum([int(val)for val in values]))
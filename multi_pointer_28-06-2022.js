// complexity O(n)
function averagePain(arr, num){
    let l = 0
    let r = arr.length - 1
    console.log(r);
    let count = 0
    while(l < r){
        count++
        let avg = (arr[l] + arr[r]) / 2
        if(avg === num) return true
        else if(avg > num) r--
        else l++
        console.log(count);
    }
    return undefined
}
console.log(averagePain([-2,0,1,2,4,5,6,7,1,34,5,3,2,1,34,4],5.5))
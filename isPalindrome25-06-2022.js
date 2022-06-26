function isPalindrome(s){
    const normalizeStr = s.replace(/[\W_]/g,'').toLowerCase()
    let l = 0
    let r = normalizeStr.length - 1

    while(l < r){
        if(normalizeStr[l] !== normalizeStr[r]) return false
        l++
        r--
    }
    return true

}

console.log(isPalindrome("A man, a plan, a canal: Panama "))
console.log(isPalindrome("race a car"))
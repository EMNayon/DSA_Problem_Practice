function lengthOfLongestSubstring(s){
    let i = 0
    let j = 0
    let max = 0
    const uniqueSet = new Set()
    while(i < s.length){
        if(!uniqueSet.has(s[i])){
            uniqueSet.add(s[i])
            max = Math.max(max,uniqueSet.size)
            i++
        }else {
            uniqueSet.delete(s[j])
            j++
        }
        // return max
        // console.log(uniqueSet, max);
    }
    return max
}
console.log(lengthOfLongestSubstring('abcabcbb'))



//pwwkew

// [p] l = 1, m_l = 1
// [pw] l = 2, m_l = 2

// [pww] when repeated letter that time can remove all character

// [w] l = 1, m_l = 2
// [wk] l = 2, m_l = 2
// [wke] l = 3, m_l = 3
// [wkew] that time remove all character
// [kew] l = 3, m_l = 3
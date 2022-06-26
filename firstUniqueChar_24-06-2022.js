function firstUniqueChar(s){
    const hashTable = {}
    for(let elm  of s) hashTable[elm] = (hashTable[elm] || 0) + 1

    console.log(hashTable);

    for(let i = 0; i < s.length; i++) {
        if(hashTable[s[i]] === 1){
            return i
        }
    }
    return -1

}

firstUniqueChar('leetcode');
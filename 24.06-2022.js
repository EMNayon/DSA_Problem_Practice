// time complexity - O(n*m)

// function isSame(arr1,arr2){
//     let length1 = arr1.length;
//     let length2 = arr2.length;
//     if(length1 !== length2) return false;

//     for(let i = 0; i < length1; i++){
//         // console.log(arr1[i]);
//         let index = arr2.indexOf(arr1[i])
//         // console.log(index);
//         if(index == -1) return false 
//         else arr2.splice(index,1)
//         // console.log(arr2);
//     }
//     // console.log(arr2);
//     return true;
// }

// console.log(isSame([1,2,4,5],[1,4,5,2]));





function isSame(arr1, arr2){
    const hashTable1 = {}
    const hashTable2 = {}
    for(let num of arr1){
        hashTable1[num] = (hashTable1[num] || 0)+1
    }
    for(let num of arr2){
        hashTable2[num] = (hashTable2[num]||0)+1
    }
    console.log(hashTable2);


    for(let elm in hashTable1){
        // if(elm in hashTable1 && hashTable2 && hashTable1[elm] === hashTable2[elm]){
        //     console.log(elm);
        //     // return true
        // }
        if(!elm in hashTable2 || hashTable1[elm] !== hashTable2[elm]){
            return false
        }
    }
    return true 
}

console.log(isSame([1,2,4,5],[1,4,5,2]));
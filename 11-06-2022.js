function sumUpTo(n){
    let sum = 0;
    for(let i=1; i < n;i++){
        sum += i;
    }
}

const t1 = performance.now();
sumUpTo(10000000);
const t2 = performance.now();

console.log('Time Required : ${(t2-t1)/1000}seconds.');


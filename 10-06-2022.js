// var fName = 'Emran' // shoud avoid this
let lName = 'Masud'

const email = 'emnayonpu@gmail.com'
lName = 'Nayon'
// email = 'emranmasudnayon.017@gmail.com'
console.log(lName);
console.log(email);


const fName = 'em'
console.log(typeof fName);

const age = 30
console.log(typeof age);
const symbol = Symbol('who');
let sym1 = Symbol()
console.log( typeof sym1)


let sym = Symbol('foo')
console.log(typeof sym)

let symObj = Object(sym)
console.log(typeof symObj);

// object start
const obj = {
    name : 'em nayon',
    age : 25,
    versity : 'PU',
    location : 'Mirpur-1'
}
console.log(typeof obj);
console.log(obj.versity);

obj.location = 'Bordhon Bari'
console.log(obj['location'])

obj.profession = 'Students'
console.log(obj);

obj.hobbies = ['hiking','travel','reading','photography']
console.log(obj.hobbies);
delete obj.age
console.log(obj);

for(var key in obj){
    console.log(key);
    console.log(obj[key]);
}

// array start
const arr = ['em nayon',30,'programmer']

console.log(typeof arr);
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
console.log(arr[arr.length-1]);

// Adds item(s) to the end of an array
arr.push('Student')
console.log(arr);

// Removes the last item from an array
arr.pop()
console.log(arr);

// Adds item(s) to the beginning of an array
arr.unshift('Dhaka')
console.log(arr);

// Removes the first item from an array
arr.shift()
console.log(arr);


for(var i=0; i< arr.length; i++){
    console.log(arr[i]);
}

for(var item of arr){
    console.log(item);
}



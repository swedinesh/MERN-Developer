
// ====== Math ======

console.log(Math)

console.log(Math.abs(-9))
//IMP
console.log(Math.round(4.1)) // 4.1 to 4.4 = 4 & 4.5 to 4.9 = 5

console.log(Math.ceil(4.9))// 5
console.log(Math.floor(4.9))// 4

console.log(Math.min(1, 5, 7, 9))
console.log(Math.max(4, 5, 7, 9))

// 0 to 1
console.log(Math.random())
 // hame value 1 to 10 chahiye because zero se multiply 10 zero
 // hoga so add one always start with 1>=
console.log((Math.random()*10) + 1)
//hame dasamav ke baad nhi chahiye
console.log(Math.floor((Math.random()*10) + 1))

const min = 10;
const max = 20;
 // first: hme kitne digit chahiye max - min
 // second: zero multiply and remove zero
 // third: kha se genrate karna utna add karo (min)

console.log(Math.floor(Math.random()*(max - min + 1)) + min)


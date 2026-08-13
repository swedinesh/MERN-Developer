
const user = "dinesh"

if(user){
    console.log(`User is ${user}`)
}
else{
    console.log(`Not reachable`)
}


/* 
========= Falsy Value ===========
=> false, 0, -0, BigInt On, ""(empty string), null, undefined, NaN

========= Truthy Value ===========
=> "0", 'false', " "(space), [] (array), {} (block), function(){} 

*/


// How Check Empty Arrays

const scores = []

if(scores.length === 0){
    console.log(`No records Found...!`)
}

// How Check Empty Objects

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(`Object is empty ...!`)
}

/*

====== false (yaad rakho) ======
false == 0 -> return true
false == '' -> return true
0 == '' -> return true

*/


// Nullish Coalescing Operator (??) : null undefined

// Ham DataBase se true value pick karne ke liye 
// like collision na ho

// first true value le lega
let val1 = 5 ?? 10 // 5
console.log(val1)
val1 = null ?? 10 // 10
console.log(val1)
val1 = undefined ?? 16 // 16
console.log(val1)

val1 = null ?? 101 ?? 104 // 101
console.log(val1)
val1 = undefined ?? 166 ?? 202 // 166
console.log(val1)

// ternary opertor (?) -> don't confuse

// condition ? true : false
 
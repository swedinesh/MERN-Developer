// many times hame database ko application on hote hi on karna hota 

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

// global scope ke pollution se problem hoti hai kai baar 
// polution ko hatane ke liye iife function use karte hai

/* 
syntax
(iske andhar ham exicution kar skte like arrow function -> function)()
() -> function ko call kar dega
 +++++++++++ all syntax ++++++++++++
 (function(){})()
*/

// Immediately Invoked Function Expressions (IIFE)

// invoked to hogya but isse rokna end karna hai
// (function chai(){
//     console.log(`DB CONNECTED`)
// })()

// semicolon lga kar end kardo 
// name IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();

(function aurcode(){
    console.log(`DB CONNECTED -> 1`)
})();

// parameter and without name means arrow function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Dinesh');


// Practice -> Arrow Function

// const sums = (n1, n2) => {
//     console.log(`SUM : ${n1+n2}`)
// }

// sums(6,7)
console.log('Data Type Summary')

/*
========= Primitive Data Types ==========
String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail; // userEmail = undefined

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId) 

// const bigNumber = 359477645646646n

//  ===== Reference (non primitive) ======

//Arrays, Object, Functions

//Arrays
const heros = ['Dinesh', 'Rohit', 'Pussy']

//Objects
let myObj = {
    name: 'Dinesh',
    age: 23,
}

// Function return type object function
const myFunction = function(){
    console.log("This Function")
}

// null object
console.log(typeof outSideTemp)





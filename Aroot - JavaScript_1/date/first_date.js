// Dates

let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

console.log(typeof myDate) // object

// const createdDate = new Date(2026, 7, 8 , 11, 40)
const createdDate = new Date("09-08-2026")

// console.log(createdDate.toLocaleString())

// mili second main time aayega
let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(createdDate.getTime())

// second mai convert karna hai /1000
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate)
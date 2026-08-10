
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ['Shaktiman', 'Nagraj']

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr)
// console.log(myHeors)
// console.log(myArr2)

// Arrays Methods

myArr.push(10)
myArr.push(20)
// console.log(myArr)
myArr.pop()
// console.log(myArr)

// unshift - bhut bada array hoga saare element shift karne honge
myArr.unshift(-10)
// console.log(myArr)
// remove aage se
myArr.shift()
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(9))

// join
const newArr = myArr.join(); // bind and convert in string

console.log(myArr)
console.log(newArr)

// slice and splice

const myn1 = myArr.slice(1,4);
console.log('A ' + myArr);
console.log(myn1)
console.log('B ' + myArr);

const myn2 = myArr.splice(1,4)
console.log('C '+ myArr)
console.log(myn2)

// splice - utna array nikal leta hai means 
// main array mai remove ho jayega


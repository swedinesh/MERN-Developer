/* 
Data Types
Numbers
strings
booleans
NULL
Undefined
Objects
*/

let num1 = 3.14
let num2 = 10

console.log(num1 + num2);

const firstName = "Dinesh"
let lastName = 'Kushwaha'

console.log(firstName + ' ' + lastName);

let isLoggedIn = true;
let x = null; // koi space lega 
let y = undefined

// returns 0 and 1

console.log(x)
console.log(y)

let student = {
    name : 'Dinesh',
    age  : '23',
    clg : 'IIITV',

    show : function(){
     console.log(this.name + ' '+ this.age+ ' '+this.clg)
    }
}

student.show()

// string -> '1' + '1' - string
// string + Number = string
// string * number = Number
// number jab aayega jab string mai number ho like '1'
console.log('60' * '3')

console.log(typeof (student.clg))


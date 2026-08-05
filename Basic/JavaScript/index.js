//console.log('Hello Dhruvi');
//let update allowed
let a = 5;
console.log(a);
 a = 10;
console.log(a);

// var create new variable same name 
var num = 9;
console.log(num);
var num = 19;
console.log(num);

//updationis not allowed
const cn = 44;
// cn = 55;
console.log(cn);

//undefined not garbage
let und;
console.log(und);

//Dynamic Typing

let name = 'Dinesh';
console.log(name);
name = 3;
console.log(name);

//Reference Type
/*
Object
Array
Function
*/

let person = {
    firstName : 'Dinesh',
    age : 23,
    clg : 'IIITV'

};

console.log(person.firstName,person.age,person.clg);

let arr = ['Ruesh', 'Kaless', 'Devid'];
arr[0] = 89;
console.log(arr[0], arr[1], arr[2]);

console.log(2**10); // 2 ki power 10 -- ** means power

// equality
// loose equality ==
//strictly equality === value and data dono same ;

let p = 1;
let q = '1';

console.log(p==q);// true
console.log(p === q); // false
console.log(p != q); // false means 1 == '1' same isliye false bo keh rha equal hai
console.log(p !== q); //true --  !== is strictly chech then this is correct

//ternary Operator
console.log('=== Ternary Operator ===');
let age = 18;

let status = (age>=18) ? 'Yes Vote' : 'Not Vote';
console.log(status);

//logical
console.log("=== Logical Operator ===");
//shot-circiting - truthy value jeetegi
console.log( false || 'Dinesh' || 4 || 90); //Dinesh
let jj;
console.log(false || jj);

//&&
console.log(false && 'gabbar'); //false
console.log(true && 'gabbar'); //gabbar

//~ Not Operator return 0 and 1 and convert in 2's complement
console.log(~false); // -1 = false = 0 = ~0 = 2's -1 
console.log(~true);  // -2
console.log(~0);     // -1
console.log(~1);     // -2
console.log(~2);     // -3
console.log(~5);     // -6

console.log(true ^ true);    // 0
console.log(false ^ false);  // 0
console.log(false ^ true);   // 1

// & find minimum and aur find max |

// bracket use karo precidense ke liye : let x = a + b * c / d;
// bracket let x = (a + (b * c) / d );

//Control Statement
console.log('Control Statement mai Swagat Hai if-else , switch');

// variable 
let a = 20;
a = 30;

const c = 30;
// c = 40; // error

console.log(a, c);

// var

// array 

const arr = [1, 2, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr.at(i));
//     //or
//     console.log(arr[i]);
// }

// forOf

// for(const  val of arr){
//     console.log(val);
// }

// without class - create object

const student = {
    name: 'Dinesh',
    age: 23,
    bloodGrp: 'AB+',
    sex: 'Karna Hai',
    clg: 'IIITV',
    bodyCount: 'Infinity single o',

    arr: ['riya', 'ziya', 'siya'],

    add(x, y){
        return x+y; 
    }

}

console.log(student.add(8,9));
student.arr.forEach((element) => 
    console.log(element)
);

console.log()
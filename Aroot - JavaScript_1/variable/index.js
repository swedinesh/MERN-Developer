console.log("Welcome to variable blog");

//var - re-use same name for different variable
// always global - access everyWhere
// re-assign - yes
console.log("=== var ===");
var a = 20;
console.log(a+10);

{
    var b = 99;
}
console.log(b);

var a = 101;
console.log(a);

b = "hello ji";
console.log(b);

console.log("=== let ===");
// let - Local
// re-assign - yes 
// access - only own block

let x = 20;
console.log(x);
x="hii Dinesh";
console.log(x);

{
    let y = "XIAOMI";
    console.log(y);
}

// console.log(y); -- scope se bahar hai

console.log("=== const ===");

//const -- assign only one time jab declare karo tabhi
// like java final
// re-assign - NO 

const p = "hello bsdk";
// p = "20"; -- not allow
console.log(p);






const age = 9;

if(age>=18 && age<80){
    console.log("You are eligible for Vote");
}
else if(age>=80){
    console.log("You are Senior Citizen Salute hai aapko!")
}
else{
    console.log("Padhai Karne bale Chhatron Ko rajneeti se dur rahna chahiye");
}

//Ternary Operator

age>=18 ? console.log('Yes') : console.log('No');

let res = age>=18 ? 'Yes' : 'No';

console.log('Result : ' + res);
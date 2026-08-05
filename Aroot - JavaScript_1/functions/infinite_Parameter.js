console.log('infinite parameter function');

// Methode 1 - Unlimited Arguments Accepts

function addNumber(){
    let ans = 0;
    for(let i=0; i<arguments.length; i++){
     ans = ans + arguments[i];
    }
    return ans;
}

let sum = addNumber(30, 60, 90, 120, 150);

console.log('Sum Of Arguments : ' + sum)

// Methode 2 - spread Operator
 
function addNumber1(...Number){
 let ans = 0;
 for(let i=0; i<Number.length; i++){
    ans = ans + Number[i];
 }
 return ans;
}

let sum1 = addNumber1(30, 60, 90, 120, 150);

console.log('Sum of ... Numbers Arguments : ' + sum1)



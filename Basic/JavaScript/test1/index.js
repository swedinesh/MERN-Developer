console.log("welcome to Object Practice");

let sum = {
    a : 4,
    b: 5,
    add: function(){
        return this.a + this.b;
    }
}

console.log('a & b : ' + sum.a  + ' & ' + sum.b);
console.log("Sum of a and b : " + sum.add());

let same = {
    add(a, b){
        return a+b;
    }
}

console.log("same " + same.add(5,9));



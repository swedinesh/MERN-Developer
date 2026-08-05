//create object

let rectangle = {
    length: 1,
    breadth: 2,

    draw: function () {
        console.log("is Drawing");
    }

};

// rectangle.draw();
// let a = rectangle.length;
// console.log(a);


// create object with factory function
// follow - camel case 
function createObject() {

    return rectangle = {
        length: 10,
        breadth: 20,

        draw: function () {
            console.log("is Drawing");
        }

    };
}

let rect1 = createObject();

rect1.draw();
console.log(rect1.length);


// factory function parameterize 
function createObject(breadth, length) {

    return rectangle = {
        length, // or length : length,
        breadth,
        draw: function () {
            console.log("is Drawing");
        }

    };
}

let rect2 = createObject(40, 50);

rect2.draw();
console.log(rect2.length);



//constructor objct creation
//follow Pascal Notatio -> first letter of evry word is capital
function Rectangle(length, breadth) {

    this.length = length;
    this.breadth = breadth;

    this.draw = function () {
        console.log('is drawing Constructor');
    }
}

// create object of construct

let objx = new Rectangle(99, 69);

objx.draw();
console.log(objx.length);

// add new member
objx.color = "Yellow";
console.log(objx.color);

// delete new member
delete objx.color;
console.log(objx.color);

// function bhi object hote hai in js
// constructor ek function hai constructor apne Function ko call karta

let nrect = new Function('length', 'breadth', `this.length = length;
    this.breadth = breadth;
    
    this.draw = function(){
        console.log('is drawing Constructor');
    }`);

    let rectKaObject = new nrect(6,9);

    rectKaObject.draw();

    //pass by value OR primitives copied their value;
    let ai = 10;
    let bi = ai; // b=10
    ai++; // a=11

    console.log(ai);
    console.log(bi);

    //pass by reference OR copied their reference / address
    let xi = {value: 10}; // object
    let yi = xi; // object pass hota tab paas by reference hota

    xi.value++;

console.log("Op reference");
    console.log(xi.value);
    console.log(yi.value);

    //function increase hame pass by reference karna hoga

    let p = {value:69};

    function inc(p){
        p.value++;
    }
    //call function
    inc(p);

    console.log(p);


   //object
    let ru = {
        len : 10,
        width : 20
    };

    console.log("for in loop");
     // for-in loop
    for(let key in ru){
        console.log(key, ru[key]);
    }
  
    console.log("for-of loop");
    // for-of hame iterator chahiye
    for(let key of Object.keys(ru)){
        console.log(key);
    }

     for(let key of Object.entries(ru)){
        console.log(key);
    }

    if('len' in ru){
        console.log('Present');
    }
    else{
        console.log('Absent');
    }

    // Object Clonning- use primitive 

    let src = { value : 10 };
    let dest = {};

    src.value++;

    // copy 1. iterator method

    for(let key in src){
        dest[key] = src[key];
    }

    // copy 2. Assign method

    let src1 = { value : 20 };

    let dest1 = Object.assign({}, src1);

    // copy 3. Spread Method
     let src2 = { value : 30 };

     let dest2 = {...src2};

     console.log(dest);
      console.log(dest1);
       console.log(dest2);

//   Garbage Collection
// we have no control automatically run hota rehta hai
// un use memory ko clean karta rehta




    
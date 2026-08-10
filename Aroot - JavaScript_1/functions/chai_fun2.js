// function paas by array

//takes multiple arguments
function calculatePrice(...num1){
    return num1
}
// array mai store ho jayenge saare element
// console.log(calculatePrice(100, 200, 300, 400, 500))
// staring argument val1 and val2 mai paas honge
function calculatePrice1(val1, val2,...num1){
    return num1
}
// console.log(calculatePrice1(100, 200, 300, 400, 500))


const user = {
    name: "dinesh",
    price: 199,
}

// paas by object
function handelObject(anyobject){
    console.log(`User is ${anyobject.name} and price is ${anyobject.price}`)
}

// handelObject(user)

// calling ke time object creation
handelObject({
    name:"Roni",
    price: 169,
})

const objArray = [100, 200, 300, 400]

function handleArray(anyArray){
    console.log(anyArray[0])
}

// handleArray(objArray)

handleArray([990, 200, 400, 900])
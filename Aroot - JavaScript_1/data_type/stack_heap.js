// paas by copy in Stack Memory -  primitive

let myYoutube = "DineshMicroVids"
let anotherYoutube = myYoutube
anotherYoutube = "Review Break"

console.log(myYoutube) // DineshMicroVids
console.log(anotherYoutube) // Review Break

// paas by reference in Heap Memory - Object

let userOne = {
    emaiId: "user@google.com",
    upi: "upi@ybl",
}

let userTwo = userOne

console.log(userOne.emaiId)
console.log(userTwo.emaiId)
userTwo.emaiId = "dinesh@google.com"
console.log(userOne.emaiId)
console.log(userTwo.emaiId)


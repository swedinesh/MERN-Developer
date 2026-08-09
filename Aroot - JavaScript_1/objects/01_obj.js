//singleton
// Object.create

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "DInesh",
    //symbol ko bracket mai karna hoga
    [mySym]:"myKey1",
    age: 23,
    gmail: "dinesh@google.com",
    location: "Mota_Chiloda",
    "fullname": "Dinesh Kushwaha",
    isLoggedIn: false,
    lastDayLoggedIn: ['Saturday', 'Sunday']
}

console.log(jsUser.name) // GOOD
console.log(jsUser["gmail"]) // BEST
// key full Name like array a[0] same obj["email"]
console.log(jsUser["fullname"])
// sting nhi ki tarah nii dena
console.log(jsUser[mySym])

jsUser.gmail = "dinesh@chatgpt.com"

// Object.freeze(jsUser)

// jsUser.gmail = "dinesh@microSoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS Users")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS USER, ${this.fullname}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())



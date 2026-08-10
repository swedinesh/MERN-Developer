
const user = {
    username: 'dinesh',
    price: 295,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to Website`)
    }
}

// user.welcomemessage()
// user.username = 'Sam Roy'
// user.welcomemessage()

// console.log(this)
1
// function chai(){
//     console.log(this)
// }
// chai()

const chai = function(){
    let username = 'Dinees'
    //object mai kaam karega
   // console.log(this.username)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// impicit return
// const addTwo = (num1, num2) => num1+num2

// best way using implicit return (use in react)
const addTwo = (num1, num2) => (num1+num2)

const addOne = (num1, num2) => ({username: 'Gobhi'})

// const cc = addOne(8,9)
// console.log(cc)



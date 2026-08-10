// console.log('D')
// console.log('I')
// console.log('N')
// console.log('E')
// console.log('S')
// console.log('H')

function myName(){
console.log('D')
console.log('I')
console.log('N')
console.log('E')
console.log('S')
console.log('H')
}

// reference - myName
// caller function - myName()

// myName()

function addTwoNumber(num1, num2){
    return num1+num2
}
// console.log(addTwoNumber(5,7))

function loginUserMessage(username='dinchak'){
    if(!username) return `Empty User`
    return `${username}  just loggedd in`
}

// console.log(loginUserMessage('Dinesh'))


console.log(loginUserMessage())
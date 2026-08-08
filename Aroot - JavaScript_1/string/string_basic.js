const name = 'dinesh'
const repoCount = 50

// bekar lagta bhai ye
//console.log(name + repoCount + "value")

// new version
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String("dinesh-dc-com")

console.log(gameName[0])
//proto means kya hai ye -- object {}
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4) // take non-neagtive

console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   kushwaha       "
console.log(newStringOne)
// trim - remove space
console.log(newStringOne.trim())

const url = "https://dinesh.com/dinesh%20kushwaha"

console.log(url.replace('%20', '-'))

console.log(url.includes('vikash'))

console.log(gameName.split('-'))

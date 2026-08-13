
const arr = ['dinesh', 'rohit', 'pussy']

for(const num of arr){
    console.log(num)
}

const greeting = "Hello Duniya!"

for(const greet of greeting){
    console.log(greet)
}

// Maps

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const [key, val] of map) {
    console.log(key, ' :- ', val)
}

const myObj = {
    game1 : 'NFS',
    game2 : 'SpiderMan',
}

// object is iterable -- not working
// for (const [key, val] of myObj) {
//    console.log(key, ' :- ', val)
// }


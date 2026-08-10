const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros)

 // arrays spread karna hai
 const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros)

//bikra array khi 2d khin 3d

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray(new Array("a", "b", "c")))
console.log(Array.isArray(Array.prototype))
// console.log(Array.from("Dinesh"))

// empty arrya -- saari keys ya values se aaray banaiye
console.log(Array.from({name: "dinesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// convert in an array
console.log(Array.of(score1, score2, score3))
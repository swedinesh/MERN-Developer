
console.log('hello')

const num = [1,2,3,4,5,6]

// splice(index, number of elements)
let spliced = num.splice(3,2);
console.log(spliced) // [4,5]
 
// slice(starting index, ending); end - start = 3-1 = 2
let sliced = num.slice(1,3);
console.log(sliced) // 2,3

let first = [1,2,3,4]
let second = [5,6,7,8]

let combined = first.concat(second)

console.log(combined)

// joining array
// const arr = [1,2,3,4]
// const joined = arr.join(',')
// console.log(joined)

let str = 'This is my message'

let part = str.split(' ')
console.log(part)

let joined = part.join('_');
console.log(joined)
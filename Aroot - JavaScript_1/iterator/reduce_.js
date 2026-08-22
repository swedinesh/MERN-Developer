const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acccumalator,currval){
    // console.log(`acc : ${acccumalator} and curr : ${currval}`)
    return acccumalator + currval; 
},8)

//const myTotal = myNums.reduce((acc,curr)=> (acc+curr),0)
console.log(myTotal)

 const cart = [
    {
        course : 'Java + DSA', 
        price : 2999,
    },
    {
        course : 'Web Dev', 
        price : 5999,
    },
    {
        course : 'AI ML', 
        price : 12999,
    },
    {
        course : 'Core Subject', 
        price :  3999,
    },
 ]

 const cartTotal = cart.reduce( (acc,item) => {
    return acc + item.price
 },0)

 console.log(cartTotal)
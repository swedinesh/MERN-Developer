
function one(){
   const username = 'Dinesh'

    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if(true){
    const username = 'dinesh'
    if(username === 'dinesh'){
        const website = ' youtube'
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++++ Interesting +++++++++++++++

// declaration ke pehle hi call ho ja rha
console.log(addone(8))
function addone(num1){
    return num1+1
}

// error pehle declare nii kr sakte 
// console.log(addTwo(4))
const addTwo = function(num1){
    return num1+2
}
console.log(addTwo(4))

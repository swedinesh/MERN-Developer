console.log('Game');

let number = Math.floor(Math.random() * 10) + 1;
let guess = 0;

// see in brower
// baad mai check ho do while se hi hoga
do{
    guess = parseInt(prompt("Guess the Number")) 
    if(guess==number)
    {
        alert("Win")
        break
    }
}while(guess!=0)
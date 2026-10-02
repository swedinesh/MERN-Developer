// setter and getter

let user = {
    fname: 'Dinesh',
    lname: 'Kushwaha',

    get fullname(){
        return `${user.fname} ${user.lname}`
    },

    set fullname(value){
        if(typeof value !== 'string'){
            throw new Error("You have not send String")
        }
       let part = value.split(' ')
       this.fname = part[0]
       this.lname = part[1]
    },
}

console.log(user.fullname)
user.fullname = 'Riya K';
console.log(user.fullname)

try{
    user.fullname = 1;
}
catch(e){
    console.log(e.message)
}

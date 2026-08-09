//singleton
// const tinderUser = new Object()

const tinderUser = {}
tinderUser.name = "Dinesh"
tinderUser.id = "123bc"
tinderUser.email = "dinesh@nasha.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regualrUser = {
    email : "dinesh@SpaceX.com",
    fullname: {
        userfullname: {
            firstname: "Dinesh",
            lastname: "Kushwaha"
        }
    }
}

//console.log(regualrUser.fullname.userfullname.firstname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2} -- object ke under object
// const obj3 = Object.assign({},obj1,obj2)

// best is spread
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// jab database se value aati hai - array ke undhar
const user = [
    {
        id:1,
        email: "d@gmail.com",
    },
     {
        id:1,
        email: "d@gmail.com",
    },
     {
        id:1,
        email: "d@gmail.com",
    },
]

user[1].email

//important hai
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor -- baada name lagta

// de-structure
const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: Instructor} = course
console.log(Instructor)

// react ke liye hai
// const navbar = ({company}) =>{

// }
// navbar(company='Dinesh')

//API calls 
// {
//     "name" : "dinesh",
//     "coursename": "MCA",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




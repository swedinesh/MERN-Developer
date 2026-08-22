const coding = ['js', 'ruby', 'py', 'java', 'cpp']

// forEach mai function pass karo
// jo karna hai uske sath karo

// name nhi dena it self call hota
coding.forEach(function (item) {
    // console.log(item)
})

// arrow function
coding.forEach((item) => {
    //  console.log(item)
})

// function create 
function print(item) {
    console.log(item)
}

// refernce pass kardo
// coding.forEach(print)

// value, index, pura array

coding.forEach((val, index, arr) => {
    console.log(val, index, arr)
})

// array ke andhar objects
const myCoding = [
    {
        languageName: 'javaSript',
        languageFileName: 'js',
    },

    {
        languageName: 'Java',
        languageFileName: 'java',
    },
    {
        languageName: 'C plus plus',
        languageFileName: 'cpp',
    },
]

myCoding.forEach( (items) => {
    console.log(items.languageName)
})


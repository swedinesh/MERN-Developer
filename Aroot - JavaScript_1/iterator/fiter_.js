const coding = ['js', 'ruby', 'py', 'java', 'cpp']

const value = coding.forEach((item) => {
    // console.log(item) // undefined
    return item // undefined
});

// console.log(value) // return undefined means kuch return hi nhi karta

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myArray.filter((num) => num > 4)

// scope declaration mai - return karna padega 
const newNums = myArray.filter((num) => { return num > 4})
// console.log(newNums)

// for each se filter ki tarah access
const newArray = []
myArray.forEach((num) => {
    if(num>4)
       newArray.push(num) 
})

// console.log(newArray)

const book = [
  { title: 'One Book', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'The Silent Voice', genre: 'Mystery', publish: 1995, edition: 2010 },
  { title: 'Dark Horizon', genre: 'Thriller', publish: 2001, edition: 2015 },
  { title: 'Lost Kingdom', genre: 'Fantasy', publish: 1988, edition: 2005 },
  { title: 'The Last Journey', genre: 'Adventure', publish: 1992, edition: 2008 },
  { title: 'Broken Dreams', genre: 'Drama', publish: 2005, edition: 2018 },
  { title: 'Beyond the Stars', genre: 'Science Fiction', publish: 2012, edition: 2020 },
  { title: 'Whispers in Rain', genre: 'Romance', publish: 1999, edition: 2012 },
  { title: 'The Hidden Truth', genre: 'Crime', publish: 2007, edition: 2016 },
  { title: 'Winds of Change', genre: 'Historical', publish: 1985, edition: 2003 }
]

// const userBook = book.filter( (bk) => (bk.genre === 'Fantasy'))
const userBook = book.filter( (bk) => (bk.publish >= 2000))
console.log(userBook)


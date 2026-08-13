
const myObj = {
    js: 'JavaScript',
    cpp: 'C plus plus',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObj) {
 console.log(`${key} :  ${myObj[key]}`)

}

const programming = ['js', 'ruby', 'py','java', 'cpp']

for(const key in programming){
    // console.log(key)
    console.log(programming[key])
}

// map par for in nhi lagega map iterable nhi hai
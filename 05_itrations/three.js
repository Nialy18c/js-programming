// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const read = "Hello Nilay"
for (const na of read) {

    // console.log(`Each char is ${na}`)
}

// Maps 

const map = new Map()

map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('In', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1' : 'Cricet',
    'game2' : 'Foot Ball',
}
// It is not work for object (For OF) loop is not working for object    

// for (const [key,value] of myObj) {
//     console.log(key, ':-', value);
// }
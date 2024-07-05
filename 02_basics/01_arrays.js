//Array 

const arr = [1,2,3,4,5,6]

const hero =["saktiman","nagarjun"]

const arr2 = new Array(1,2,3);
//console.log(arr[0]);

// ================= Array Methods ===================

// arr.push(7)
// arr.push(8)

// arr.pop()

// arr.unshift(5)
// arr.shift()
// console.log(arr.includes(5))// true | false
// console.log(arr.indexOf(3))

// const newArr = arr.join()
// console.log(arr)
// console.log(newArr)
// console.log(typeofnewArr)

// Slice ,Splice

console.log("A ", arr);

const myn1 = arr.slice(1,3)
console.log(myn1);

console.log("B ", arr);
const myn2 = arr.splice(1,3); // Main array in remove to index number of 1 to 3 : 2,3,4 is remove in array
console.log(myn2);
console.log("C ", arr);//  [1,5,6] main array after using the splice





const coding = ["js","ruby","react","java","C++"]

coding.forEach( function (item){
    // console.log(item);
})

coding.forEach( (val) => {
    // console.log(val);
})

function printMe(val){
// console.log(val);
}

// coding.forEach(printMe);

coding.forEach( (val ,index , arr) => {
    console.log(val,index,arr);
})
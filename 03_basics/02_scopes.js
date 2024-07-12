// let a =100
// const b = 20
// var c = 30

// if(true){
//     let a = 10
//     // console.log("in:",a)
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "nilay"

//     function two(){
//         const web = "youtube"
//         console.log(username);
//     }
//     // console.log(web);

//     two();
// }

// one();

if(true){
    const uname = "nilay";
    if(uname === "nilay"){
        const web =" youtube";
        console.log(uname + web);
    }
    // console.log(web); // Error
}
// console.log(uname); //Error

// ++++++++++++++++++++++++++++++interesting ++++++++++++++++++++

// Basic Function
function addone(num){
    return num + 1
}
console.log(addone(5));


// Expretion function
// console.log(addTwo(5)); // It show the Error from declaring
const addTwo = function(num){
    return num + 2 ;
}
console.log(addTwo(5));
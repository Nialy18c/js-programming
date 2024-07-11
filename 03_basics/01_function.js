function myName(){
    console.log("N");
    console.log("N");
    console.log("N");
    console.log("N");
    console.log("N");    
}

// myName()

// function add(num1,num2){
//     console.log(num1 + num2);
// }

// function add(num1,num2){
//     let result = num1 + num2;
//     return result;
// }

// function add(num1,num2){
//     return num1 + num2;
// }

function login(username){
    if(username === ""){
        console.log("Please Enter a Username");
    }
    return `${username} Login is Successfuly..`
}

// add(10,"4")

// console.log(login("Nilay"))

function calc(...num){
    return num
}
// console.log(calc(10,20,30))

const user = {
    username: "Nilay",
    price:200
}

function obj(anyobj){
    console.log(`UserName is ${anyobj.username} and price is ${anyobj.price}`);
}

obj(user);

const myArry = [200,400,100,600]

function returnarray(getarray){
    return getarray[0]
}

// console.log(returnarray(myArry));

function calculate(){
    return 
}
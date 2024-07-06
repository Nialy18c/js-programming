// const tinderUser = new Object() ==> Singleton Object

// const tinderUser = {} ==> Non Singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "amit"
tinderUser.isLoggedIn = false


// console.log(tinderUser);
const regularUser ={
    email: "tardf@.com",
    fullName: {
        userfullName: {
            firstName: "Nilay",
            lastName: "Chauhan"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName);
// console.log(regularUser.fullName.userfullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2};
const obj3 = Object.assign({},obj1, obj2)

console.log(obj3);
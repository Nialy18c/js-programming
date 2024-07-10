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
const obj4 = {...obj1, ...obj2}

// console.log(obj4);

const user =[
    {
        id:1,
        email:"hs@gmail.com",
    },
    {
        id:1,
        email:"hs@gmail.com",
    },
    {
        id:1,
        email:"hs@gmail.com",
    },
]

// user[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Nilay"
}
//const {courseInstructor}=course
const {courseInstructor: instructor}=course
console.log(instructor);

// const navbar = () => 
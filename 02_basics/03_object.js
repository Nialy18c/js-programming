// Singleton
// object.create
 
// Object Literals

const sym = Symbol("Key2")

const JsUser = {
    name: "Nilay",
    [sym]:"mykey1", 
    age: 19,
    location: "Navsari",
    email: "nila@gmail.com",
    isLoggedIn:false,
    lastLoginedDays:["Monday","Saterday"]
}

// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser[sym]);
// console.log(typeof JsUser[sym]);

// JsUser.age=21;
// console.log(JsUser.age);
// Object.freeze(JsUser);
// JsUser.age=22;
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello world");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello User , ${this.name}`);
}
console.log(JsUser.greetingTwo());

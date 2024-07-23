const myobj ={
    js: 'javaScript',
    cpp: 'C++',
    rb: "ruby",
    Sw: "Swift"
}

for (const key in myobj) {
    // console.log(myobj[key]);
    // console.log(`${key} :- ${myobj[key]}`);
}

const program = ["SpiderMan","IronMan","BatMan"]

for (const key in program) {
    // console.log(key);  // it will print the index number 
    console.log(program[key]);
}
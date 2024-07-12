// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTION`);
}) ();

// two iief use to ';' this terminater

((name) => {
    console.log(`DB CONNECTION TWO ${name}`);
}) ("nilay");

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][2]);// batman

// const new_heros = marvel_heros.concat(dc_heros);
// console.log(new_heros);

// const all_heros = [...marvel_heros , ...dc_heros];//same as to concat method
// console.log(all_heros); 

// const an_arr = [1,2,3,[4,5,6],7,[6,8,[4,9,[2,5,4]]]]
// console.log(an_arr.flat());//[ 1, 2, 3, 4, 5, 6, 7, 6, 8, [ 4, 9, [ 2, 5, 4 ] ] ]
// console.log(an_arr.flat(Infinity));
// console.log(typeof an_arr);
/*
[
  1, 2, 3, 4, 5, 6,
  7, 6, 8, 4, 9, 2,
  5, 4
]
*/

console.log(Array.isArray("Nilay"))
console.log(Array.from("Nilu"))

let scor1 = 100
let scor2 = 200
let scor3 = 300

console.log(Array.of(scor1,scor2,scor3));

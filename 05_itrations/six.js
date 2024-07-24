const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.filter( (num) => num > 4)

console.log(newNum);

const nextNum = myNum.filter( (num) => {
    return num > 5
})

console.log(nextNum);

const fNum = []

myNum.forEach( (num) => {
    if (num > 4) {
        fNum.push(num)
    }
})
console.log(fNum);

const books = [
    { mname : 'RRR', type : 'all', ticket_price: '120', rleasDate: '10/05/23'},
    { mname : 'Mene Pyar Kiya', type : 'Romentic', ticket_price: '150', rleasDate: '14/10/22'},
    { mname : 'Hi Papa', type : 'Romentic', ticket_price: '180', rleasDate: '24/12/24'},
    { mname : 'Aavesham', type : 'Comedy', ticket_price: '150', rleasDate: '06/06/24'},
    { mname : 'Jailer', type : 'Action', ticket_price: '120', rleasDate: '17/05/22'},
    { mname : 'Premalu', type : 'Romentic', ticket_price: '200', rleasDate: '10/11/24'},
    { mname : 'Farrey', type : 'all', ticket_price: '170', rleasDate: '28/10/22'},
];

const userBooks = books.filter( (bk) => bk.type === 'Romentic')

const userDate = books.filter( (bk) => {return bk.ticket_price > '150'})

// console.log(userBooks);

console.log(userDate);
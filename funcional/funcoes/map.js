const numbers = [1,2,3,4,5,6]

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 7.0},
    {name: 'Emma', score: 9.4},
    {name: 'Jonny', score: 8.0},
]


const numbersV2 = numbers.map(function (el) {
    return 2*el
})
console.log(numbersV2)


const scoreV2 = students.map( (objeto) => Math.ceil(objeto.score))
console.log(scoreV2)

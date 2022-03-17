const numbers = [1,2,3,4,5,6]

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 7.0},
    {name: 'Emma', score: 9.4},
    {name: 'Jonny', score: 8.0},
]


function greaterthenzero(el){return el>0} 

console.log(numbers.filter(greaterthenzero))

const even = numbers.filter(n => n%2 == 0)

console.log(even)


console.log(students.filter(student => student.score>9))
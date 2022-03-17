
const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 7.0},
    {name: 'Emma', score: 9.4},
    {name: 'Jonny', score: 9.7},
]

const mediabonsalunos = 
students
        .filter(student => student.score > 9)
        .map(student=> student.score)
        .reduce((acum, el, i, array) => {   if(i === array.length -1){
            return (acum+el)/array.length
        }else{
            acum + el
        }})

        console.log(mediabonsalunos)
const letras = 'ABCD'
console.log(Array.from(letras))

var numeros = [1, 3, 9, 13];

var vfirst = numeros.find(myFunction);

var ifirst = numeros.findIndex(myFunction);

function myFunction(value){
    return value > 5;
}

console.log(vfirst);
console.log(ifirst);

const fruits = ['banana','laranja']
const f = fruits.entries()
console.log(f)
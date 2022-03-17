const texto = 'O João é um bacano.Joao, João Maria'
const regexp1 = /João|Maria/gi;

const encontrar = (texto.match(regexp1))
console.log(encontrar)

const change = (texto.replace(/João/gi,'Felipe'))

const plus = (texto.replace(/(Joao|Maria)/gi, '"$1"'))

console.log(plus)

const func = texto.replace(/Joao/gi , input => '########' + input.toUpperCase())
console.log(func)

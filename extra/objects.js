const object1 = {
    nome:'Joao',
    idade: 25,
    carro:'BMW',
    cidade:'Tomar',
    profissao:'Programador'
}
console.log(
    object1.idade
)
console.log(object1['profissao'])

for(prop in object1){
    console.log(prop)
}
console.log(Object.keys(object1))


const object2 = {
    credito: 1000,
    investimentos:500,
    bitcoin:500,
    bolsa:500
}

const object3 = Object.assign({}, object1, object2)

delete object3.bitcoin

console.log(object1)
console.log(object2)
console.log(object3)


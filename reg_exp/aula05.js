const texto = 'abcdefghijklmnopqrstuvwxyz'

regexp1 = /[abc]+/g;
console.log(texto.match(regexp1))
console.log(texto.match(/[a-g]/g))
console.log(texto.match(/[^a-g]/g))
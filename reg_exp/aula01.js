
const texto = `O Joao 5 filhos é mm bacano, gosto muito dele. o Joao joga à bola e a Maria tambem. O joão é um bom amigo.`

const regexp1 = /João/gi;

console.log(regexp1.test(texto))

const regexp2 = /(Teve|Joao)( 5 filhos)/i;
const found = regexp2.exec(texto)
console.log(found[1])
const texto = 'Ola a  todos. Sou o joão e tambem tenho um amigo chamado Joooooooãooooooooo'

const regexp1 = /Jo+ão/gi

console.log(texto.match(regexp1))
//Desta maneira só pega os primeiros o's//


palavras = ['foto.jpg' , 'meugatinho.jpg' , 'aaaa.jpeg' , 'fotogato.png' ]


const regexp3 = /\.jpe?g/gi;


for (const palavra of palavras){
const found = palavra.match(regexp3)
console.log(found)
}


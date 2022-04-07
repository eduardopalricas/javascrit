const meuobjeto = {
    a:1,
    b:2
}

const novoobjeto = meuobjeto

novoobjeto.b = 5
meuobjeto.a = 3
console.log(meuobjeto)
console.log(novoobjeto)

const meuobjeto2 = {
    a:1,
    b:2
}

const novoobjeto2 = Object.create(meuobjeto2)

console.log(meuobjeto2)
console.log(novoobjeto2)
console.log(novoobjeto2.b)


console.log(novoobjeto2.hasOwnProperty('b') )
console.log(meuobjeto.hasOwnProperty('a'))


function SalaAula(alunos){
    this.alunos = alunos
    }

SalaAula.prototype = {
    adicionarAluno: function(aluno){
        this.alunos.push(aluno)
    }
}


const novasala = new SalaAula(['Joao','Maria'])
console.log(novasala)
novasala.adicionarAluno('Pedro')
console.log(novasala)


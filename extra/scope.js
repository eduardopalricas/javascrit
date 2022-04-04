/*let a = 5
function testeEscopo(){
     console.log(a)
     a = 6
     var b = 6
     console.log(b)
}
testeEscopo()
console.log(a)
console.log(b)*/

function escopo(){
        if(true){
        var a = 3
        let b = 5
    }
    console.log(a)
    console.log(b)
}
escopo()
console.log(a)

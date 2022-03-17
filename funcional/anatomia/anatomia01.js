function sayHello(){
    console.log('Hello!')
}
sayHello()

function sayHelloto(name){
    console.log(`Hello ${name}`)
}
sayHelloto('Mike')

function returnHiTo(name){
    return(`Hello ${name}`)
}
const greeting = returnHiTo('Joao')
console.log(greeting)

function run(fn){
    return fn()
}

function sayHello(){
    console.log('Hello')
}

run(sayHello)

const result = run(Math.random)
console.log(result)
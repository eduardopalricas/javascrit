const myPromise = new Promise((resolve, reject) => {
    const nome = 'Matfeus'
    if(nome === 'Mateus'){
        resolve('Usuario Mateus encontrado')
    }else{
        reject('Usuario Mateus não encontrado.')
    }
})
myPromise.then((data) => {
    console.log(data)
})
.catch((err)=> {
    console.log(err)
} )

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Mateus'
    if(nome === 'Mateus'){
        resolve('Usuario Mateus encontrado')
    }else{
        reject('Usuario Mateus não encontrado.')
    }
})

myPromise2
    .then((response) => {
        return response.toUpperCase()
    })              
    .then((data)=> {
        console.log(data)
    })



const p1 = new Promise((resolve)=>{
    resolve('Sou o P1')
})
const p2 = new Promise((resolve)=>{
    resolve('Sou o P2')
})
const p3 = new Promise((resolve)=>{
    resolve('Sou o P3')
})


myPromiseall1 = Promise.all([p1,p2,p3])
.then(data=> console.log(data))

const p4 = new Promise((resolve)=>{
    resolve('Sou o P4')
})
const p5 = new Promise((resolve)=>{
    resolve('Sou o P5')
})
const p6 = new Promise((resolve)=>{
    resolve('Sou o P6')
})

const myPromiseRace = Promise.race([p4, p5, p6])
    .then(data => console.log(data))



const userName = 'matheusbattisti'



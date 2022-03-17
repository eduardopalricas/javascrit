numbers = [1, 2, 3, 4, 5, 6]

const pares = numbers.filter(el => el%2 == 0)

const total = numbers.reduce((total, el)=> total + el)

const totalpares = pares.reduce((tot,el)=> tot+el)

const dobro = numbers.map(el => el*2)

const totaldobro = dobro.reduce((total,el)=> total+ el)

const total100 = numbers.reduce(((total, el) => total+el), 100)

const avg =numbers.reduce(  (acum, el, i, array) => {
    if (i === array.length - 1) {
        return (acum+el) / array.length
    } else {
        return acum + el
    }})

console.log(pares)
console.log(totalpares)
console.log(total)
console.log(totaldobro)
console.log(total100)
console.log(avg)
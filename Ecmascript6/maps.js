const animals = new Map([
    ['cats', 3]
])
console.log(animals)

animals.set('dogs', 7)
animals.set('turtles', 1)

console.log(animals)


animals.delete('dogs')
console.log(animals)

console.log(animals.size)
animals.clear()

console.log(animals)
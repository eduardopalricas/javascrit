const usuarios = ['Joao', 'Maria', 'Vasco', 'Rodrigo','Carlos']
console.log(usuarios.find((user, index, array) => user == 'Joao'))
console.log(usuarios.findIndex((user, index, array)=>user == 'Joao'))

const usersList = [
    {name: 'Joao ', credit: 700},
    {name: 'Maria ', credit: 600},
    {name: 'Carlos', credit: 200},
    {name: 'Igor', credit: 400}
]
console.log(usersList.every(user => user.credit <1000))

console.log(usuarios.sort())

console.log(usuarios.length)


usersList.splice(0,1)
for(val of usersList){
    console.log(val)
}
for(prop in usuarios){
    console.log(usuarios[prop])
}

function executar(){
    var res = document.getElementById('res')
    res.innerHTML += 'Ola. '
}

button = document.getElementById('button')
button.addEventListener('click',
(event)=> {
    event.stopPropagation(),
    clicar()
})

function clicar(){
    var res = document.getElementById('res')
    res.innerHTML += 'Adeus. '
}
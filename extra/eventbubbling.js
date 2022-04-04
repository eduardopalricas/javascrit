
function executar(){
    var res = document.getElementById('res')
    res.innerHTML += 'Ola. '
}
button = document.getElementById('button')
button.addEventListenner(onclick, clicar, false)
function clicar(e){
    e.stopPropagation()
    var res = document.getElementById('res')
    res.innerHTML += 'Adeus. '
}
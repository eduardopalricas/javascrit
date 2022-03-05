function gerar(){
    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML =''
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    
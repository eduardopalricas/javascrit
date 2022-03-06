var txtn = document.getElementById('txtnum')
var num = Number(txtn.value)
var sel = document.getElementById('selnum')
var res = document.getElementById
('res')
function adicionar(){
    if(txtn.value.length == 0){
        window.alert('Número não digitado. Corrija os dados.')
    }else if(num<1 || num>100){
        window.alert('O numero digitado não se encontra no intervalo pedido. Corrija os seus dados.')
    }else{
    }
}
function finalizar(){

}
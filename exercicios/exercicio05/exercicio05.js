let valores =[]
let num = document.getElementById('txtnum')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        item.value = num.value
        lista.appendChild(item)
        res.innerHTML =''
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
    window.alert('Adicione dados antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos]>maior){
                maior= valores[pos]
            }else if(valores[pos]< menor){
                menor = valores[pos]
            }}
        let media = soma/valores.length 
        res.innerHTML =''
        res.innerHTML =`<p>Ao todo temos ${tot} elementos.</p>` 
        res.innerHTML += `<p>O maior número dentro destes é  ${maior} </p>`
        res.innerHTML += `<p>O menor número dentro destes é o ${menor}</p>`
        res.innerHTML += `<p> A soma destes elementos é ${soma}</p>` 
        res.innerHTML+= `<p> A média destes valores é ${media} </p>`}}

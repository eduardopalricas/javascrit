function btn_click(){
    //var resultado = document.getElementById('caixa')
    //resultado.innerHTML = 'Este é o texto alterado.'
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            let caixa = document.getElementById('caixa')
            caixa.innerHTML = this.responseText} else{
        let caixa = document.getElementById('caixa')
        caixa.innerHTML='Ocurreu um erro ao tentar acessar a informação.Desculpe, tente novamente mais tarde.'
    }}
    request.open('GET','dados.txt', true)
    request.send()
}
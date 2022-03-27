function criar(){
    var txtn =  document.getElementById('txtnum')
    var n = Number(txtn.value)    
    var tab= document.getElementById('seltab')
    if(txtn.value.length ==0){
        window.alert('Erro. Não pode deixar a caixa do número vazia')
    }else{
        var c = 1
        tab.innerHTML =''
        for(c; c<=10;c++){
            var res = document.createElement('option')  
            res.text = `${n}x ${c}=${n*c}`
            res.value = `tab${c}`
            tab.appendChild(res)       
          }}
}


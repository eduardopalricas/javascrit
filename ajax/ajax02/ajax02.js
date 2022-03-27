function fnajax(url, funcao){
    
    let request = new XMLHttpRequest
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            funcao(request)
        }else{
            var res = document.getElementById('caixa1')
            res.innerHTML = req.responseText
        }
    }
    request.open('GET', url, true)
    request.send()
}

function cmd1(req){
    var res1 = document.getElementById('caixa1')
    res1.innerHTML = req.responseText
}
function cmd2(req){
    var res2 = document.getElementById('caixa1')
    res2.innerHTML = req.responseText
}

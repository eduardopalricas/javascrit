function fnajax(url, resposta){
    
    let request = new XMLHttpRequest
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let res = document.getElementById(resposta)
            res.innerHTML = ''
            res.innerHTML = request.responseText
            
        }else{
            let res = document.getElementById(resposta)
            res.innerHTML = request.responseText
        }
    }
    request.open('GET', url, true)
    request.send()
}

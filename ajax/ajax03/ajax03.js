function executar(){
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let dados = this.responseXML
            let clientes = dados.getElementsByTagName("cliente")
            let conteudo = '<h2>CLIENTES</h2>'
             
            for(var i = 0; i < clientes.length; i++){
                conteudo += '<p>Nome: '+ clientes[i].getElementsByTagName('name')[0].childNodes[0] + '</p>'
                conteudo += '<p>Contacto: '+ clientes[i].getElementsByTagName('contacto')[0].childNodes[0] + '</p>'
            }
            let res = document.getElementById('res')
            res.innerHTML = conteudo
        }}   
    request.open('GET','dados.xml',true)
    request.send()
}
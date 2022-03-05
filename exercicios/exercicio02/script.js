function carregar(){
    var res = document.getElementById('res')
    res.innerHTML = ''
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var texto = document.getElementById('texto')
    var img = document.getElementById('imagem')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro]Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<14){
                img.src = 'imagens/criancamasc.png'
            }else if(idade>=14 & idade<50){
                img.src = 'imagens/adultomasc.jpg'
            }else{
                img.src = 'imagens/velhomasc.jpg'
            }
        }else{
            genero='Mulher'
            if(idade>=0 && idade<14){
                img.src = 'imagens/criancafem.png'
            }else if(idade>=14 & idade<50){
                img.src='imagens/adultofem.jpg'
            }else{
                img.src='imagens/velhafem.jpg'
            }
        }
        texto.innerHTML = `Detetamos ${genero} com ${idade} anos.`  
    }
}
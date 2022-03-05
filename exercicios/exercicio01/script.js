function carregar(){
    var msg = document.getElementById('msg')
    var img =  document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=7 && hora<14 ){
            img.src='imagemmanha.png'
            document.body.style.background = '#FBCE6D'
    } else if(hora >= 14 && hora<20){
            img.src='imagemtarde.png'
            document.body.style.background = '#D49F46'
    } else{
        img.src='imagemnoite.png'
        document.body.style.background='#011A2B'
        document.body.style.color= '#F8F9FA'
        document.body.a.style.color= '#F8F9FA'
    }
}
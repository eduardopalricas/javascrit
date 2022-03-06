function gerar(){
    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    var res = document.getElementById('res')
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    res.innerHTML=''
   if(txtinicio.value.length == 0 || txtfim.value.length == 0|| txtpasso.value.length == 0){
        window.alert('Erro! Por favor verifique se inseriu todos os dados.')
        res.innerHTML='Preparando a contagem...'
    }else if (passo==0){if(inicio<fim){
        passo = 1
        while(inicio<= fim){
            inicio += passo
            res.innerHTML += inicio-passo+'\u{1F449}'}
            res.innerHTML+='\u{1F3C1}'   
        }else if(fim<inicio){
            passo=-1
            while(inicio>=fim){
            inicio += passo
            res.innerHTML += inicio-passo+'\u{1F449}'
            }res.innerHTML+='\u{1F3C1}'
        }else{
                res.innerHTML=inicio+'\u{1F449}'
                res.innerHTML+='\u{1F3C1}'
            }
    }else if(inicio>fim && passo>0){
            window.alert('Não é possível realizar uma contagem, quando o inicio é maior que o fim e o passo é um número maior que 0.  Corrija estes dados')
            res.innerHTML='Preparando a contagem...'
        }else if(inicio>fim && passo<0){
            while(inicio>=fim){
               res.innerHTML+= inicio+'\u{1F449}'
               inicio += passo
            }res.innerHTML+='\u{1F3C1}'
        }else if(inicio<fim && passo>0){
            while(inicio<= fim){
                res.innerHTML+=inicio+'\u{1F449}'
                inicio+= passo
        }res.innerHTML+='\u{1F3C1}'
    }else if(passo<0 && inicio<fim){
        window.alert('Não é possível realizar uma contagem, quando o inicio é menor que o fim e o passo é um número menor que 0.  Corrija estes dados')
        res.innerHTML='Preparando a contagem...'
    }else if(inicio==fim){
        res.innerHTML=inicio+'\u{1F449}'
        res.innerHTML+='\u{1F3C1}'
    }
    else{
        window.alert('Houve algum erro no sistema.')
        res.innerHTML='Preparando a contagem...'
    }
    }
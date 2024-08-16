function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = 3;
    //var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM-DIA
        img.src = '/Ex016/images/manha.png'
        document.body.style.background = '#c17a50'
    }else if(hora >= 12 && hora <= 18 ){
        //BOA-TARDE
        img.src = '/Ex016/images/tarde.png'
        document.body.style.background = '#d85946'
    }else{
        //BOA-NOITE
        img.src = '/Ex016/images/noite.png'
        document.body.style.background = '#485357'
    }
}



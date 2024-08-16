function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`

}



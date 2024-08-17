function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
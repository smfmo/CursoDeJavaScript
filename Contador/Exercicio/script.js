function contar(){
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let result = document.querySelector('div#result')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] faltam dados!')
        result.innerHTML = 'impossível contar!'
    } else{
        result.innerHTML = 'contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            alert('passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                result.innerHTML += `${c} \u{1F449}	`
            }    
        } else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                result.innerHTML += `${c} \u{1F449}	`
            }
        }    
        result.innerHTML += `\u{1F3C1}`
    }
}
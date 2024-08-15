var agora = new Date()
var mes = agora.getMonth()

console.log(`estou no mês ${mes}`)

switch(mes){
    case 0:
        console.log('janeiro')
        break;
    case 1:
        console.log('fevereiro')
        break;
    case 2:
        console.log('março')
        break;
    case 3: 
        console.log('Abril')
        break;
    case 4:
        console.log('maio')
        break;
    case 5:
        console.log('junho')
        break;
    case 6:
        console.log('julho')
        break;
    case 7:
        console.log('agosto')
        break;
    case 8:
        console.log('setembro')
        break;
    case 9:
        console.log('outubro')
        break;
    case 10:
        console.log('novembro')
        break;
    case 11:
        console.log('Dezembro')
        break;
    default:
        console.log('mês inválido')
        break;
}
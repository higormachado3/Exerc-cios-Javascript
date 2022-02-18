var agora = new Date()

var diaSem = agora.getDay()


switch (diaSem) 
{
    case 0:
        window.document.write('Hoje e Domingo')
        break

    case 1:
        window.document.write('Hoje e Segunda')
        break
    
    case 2:
        window.document.write('Hoje e Terça')
        break
    
    case 3:
        window.document.write('Hoje e Quarta')
        break

    case 4:
        window.document.write('Hoje e Quinta')
        break
    
    case 5:
        window.document.write('Hoje e Sexta')
        break

    case 6:
        window.document.write('Hoje e Sabado')
        break

    default:
        window.document.write('[ERRO] Dia inserido errado!!!')
        break
}
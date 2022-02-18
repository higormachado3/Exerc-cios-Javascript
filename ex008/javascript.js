var dados = [1, 2, 3, 4, 5, 6, 745, 435, 54, 54,23 ,23324, 23432 ,23423412,4333333 ]

dados.sort()

for(var pos in dados)
{
    window.document.write(`A posição ${pos} tem o valor ${dados[pos]} <br/>`)
}
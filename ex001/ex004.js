var n1
var n2
var operador
var soma

var n1 = window.prompt('Digite um numero: ')

var n2 = window.prompt('Digite outro numero: ')

var operador = window.prompt('Digite a operação que deseja realizar: ')


if(operador == '+')
{
    soma = Number.parseInt( n1) + Number.parseInt( n2 )

}else if(operador == '-')
{

    soma = n1 - n2

}else if(operador == '/')
{

   soma = n1 / n2

}else if(operador == 'x')
{

   soma =  n1 * n2

}else if(operador == 'x2')
{
   soma = n1**n2
}

document.write(`O resultado da operação foi de ${soma} `)

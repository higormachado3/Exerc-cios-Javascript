var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar()
{
    a.innerText = 'Clicou!'
    a.style.background = "violet"
}

function entrar()
{
    a.innerText = 'Entrou!'
    a.style.color = 'white'
    a.style.background = 'limegreen'
}

function sair()
{
    a.innerText = 'Saiu!'
    a.style.color = 'black'
    a.style.background= 'rgb(255, 0, 0)'
}
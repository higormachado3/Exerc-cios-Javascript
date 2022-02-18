
function somar()
{
    var n1 = window.document.querySelector('input#n1')
    var n2 = window.document.querySelector('input#n2')
    var res = window.document.querySelector('div#res')

    var n1 = Number(n1.value)
    var n2 = Number(n2.value)

    var s = n1 + n2

    res.innerHTML = (`A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`)
}
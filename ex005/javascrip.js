function calcular()
{
    var n1 = window.document.querySelector('input#tabu')


    var deno = Number(n1.value)
    var res

    window.document.write(`Tabuada do ${deno} <br/>`)

    for(var i=0; i<999; i++)
    {
      res = i * deno
      
      window.document.write(`${i} X ${deno} = ${res} <br/>`)
    }
}
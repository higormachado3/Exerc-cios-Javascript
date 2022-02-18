let amigo =
{
    nome: 'jose',
    sexo: 'M',
    peso: 80.3,
    engordar(p=0)
    {
        window.document.write(`Engordou`)
        this.peso += p
    }
}

amigo.engordar(4)

window.document.write(` ${ amigo.peso}`)
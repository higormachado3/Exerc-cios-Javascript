const senha = '180210hm'

var senhaLog = window.prompt('digite a senha ')

if(senhaLog == senha)
{
    document.write('Login realizado com sucesso!')
}else
{
    window.alert('A senha inserida e invalida, tente novamente')
    window.location.reload()

}


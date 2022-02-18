var nome = window.prompt('Qual e seu nome:?')
    document.write(`Ola,<strong>${nome}</strong>! Seu nome tem ${nome.length} letras<br>`)
    document.write(`Seu nome em letras maiúsculas é <strong>${nome.toUpperCase()}</strong><br>`)
    document.write(`Seu nome em letras minúsculas é <strong>${nome.toLowerCase()}</strong>`)
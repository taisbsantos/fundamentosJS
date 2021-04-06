const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
function exec() { 
    const valor = 'Local'
    minhaFuncao()
}

exec() //apesar de existir uma variavel valor dentro de exec, a variavel valor do seu escopo mais externo é que vai ser exibida
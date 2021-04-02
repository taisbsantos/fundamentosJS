function tratarErroELancar(erro){
    throw new Error('...')
}
function imprimirNomeGritando(obj){
    try{ //bloco que pode gerar erro
        console.log(obj.nome.toUpperCase() + '!!!') 
    }catch(e){ //tratamento do erro
        tratarErroELancar(e)
    } finally{// executado independente da ocorrencia de um erro
        console.log('fim')
    }
}

const obj = {nome: 'Oi'}
imprimirNomeGritando(obj)
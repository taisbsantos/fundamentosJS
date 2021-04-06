//o 'problema'
const produto1 ={
    nome: '...', 
    preco: 45
}

const produto2 ={
    nome: '...', 
    preco: 49
}
//Factory é uma função que retorna um objeto
//Factory simples 
function criarPessoa() {
    return{
        nome: '...', 
        sobrenome: 'sfsdf'
    }
}

function criarProduto( nome, preco ) {
    return{
        nome, 
        preco, 
        desconto:0.1
    }
}

console.log(criarProduto('Mouse', 500))
console.log(criarProduto('Casa', 500000))
// notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome // usando this o atributo será publico
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const produto1 = new Produto('caneta', 1.20, 0.01) 
// possível acessar o atributo nome, mas n o atributo preco e desc
console.log(produto1.nome)
console.log(produto1.preco)
console.log(produto1.desc)
//possível acessar preco com desconto
console.log(produto1.getPrecoComDesconto())


//Função Factory 
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, salarioBase, faltas, 
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}
const funcionario = criarFuncionario('Tais', 10000, 2)
console.log(funcionario.getSalario())


//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função que retorn Objeto

const fromJSON = JSON.parse ('{"id": "1", "info": "Sou um JSON" }')
console.log(fromJSON.info)
console.log(fromJSON.id)
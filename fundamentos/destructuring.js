// novo recurso do ES2015

const pessoa = {
    nome: 'Ana', 
    idade: 5, 
    endereco:{
        logradouro:"rua abc", 
        número: 120
    }
}

const {nome, idade} = pessoa //tira do objeto pessoa as variaveis nome e idade
const {nome: n, idade: i} = pessoa //mesma coisa da linha acima, mas atribuindo a nova variavel

const {sobrenome, bemHumorada} = pessoa // buscar dados inexistentes como esses gera undefined

const {endereco:{logradouro}} = pessoa

//é possível usar no contexto de arrays tbm, mas a sintaxe é feita com []

//destructuring sendo usado pra acessar min e max da Math sem precisar 
// acessar pelo operador .
//Aqui também é introduzido o parametro padrão na chamada da função
functionrand({min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min:40, max:50}
console.log(rand(obj))
console.log({min:10})

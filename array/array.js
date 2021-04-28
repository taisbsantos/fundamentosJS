console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //acessar indice que não existe gera undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)


console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) //parametros são o indice de inicio e quantos elementos serao excluidos
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Tais', 'Joao') //parametros são o indice de inicio e quantos elementos serao excluidos, outros parametros serao incluidos
console.log(aprovados)


const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

const aprovado = ['Bia', 'Carlos', 'Ana', 'Raquel']
aprovado.forEach(function(nome, indice){
    console.log(`${indice+1} ${nome}`)
})
aprovado.forEach(nome => console.log(nome))


const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


const produtos = [
    {nome: 'Notebook', preco: 2000, fragil: true}, 
    {nome: 'Ipad', preco: 4500, fragil: true}, 
    {nome: 'Copo de vidro', preco: 10, fragil: true}, 
     {nome: 'Copo de plástico', preco: 2000, fragil: false} 
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

const alunos = [
    {nome: 'Joao', nota: 7, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))

const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultados)

const escola = [{
    nome: 'Turma 1', 
    alunos:[{
        nome:'Gustavo', 
        nota: 8
    }, {
        nome:'Ana', 
        nota: 9
    }]
}, {
    nome: 'Turma 2', 
    alunos:[{
        nome:'Rebeca', 
        nota: 8.9
    }, {
        nome:'Roberto', 
        nota: 7.3
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.aplly([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

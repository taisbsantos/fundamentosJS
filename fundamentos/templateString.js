const nome = 'Taís'

const concatenacao = 'Olá, ' + nome + '!'
const template = ` Olá, ${nome} bem vinda` //template string surgiu no ES5
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
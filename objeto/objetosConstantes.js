//possível alterar atributo de objeto constante, mas não é possível 'reescreve-lo

//POSSÌVEL
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// NÃO É POSSÍVEL, não é possível atribuir mais de uma vez para uma constante
pessoa = {nome = 'Ana'}

//freeze vai fazer com que novas alterações não sejam feitas no objeto a partir desse ponto
Object.freeze(pessoa) 
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)


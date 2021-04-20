const ferrari = {
    modelo: 'f40', 
    velMax: 324, 
    tipo :'sei la'
}

const volvo = {
    modelo: 'v40', 
    velMax: 200
}
//A herança em JS é definida a partir da referência para um protótipo
console.log(ferrari.__proto__)
console.log(ferrari.__proto__=== Object.prototype)
console.log(volvo.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__ === null)

celta = {__proto__:ferrari}
console.log(celta.modelo)
console.log(celta.tipo)

celta.modelo = 'teste'
console.log(celta.modelo, celta.velMax)

//Outra forma de definir prototipo
Object.setPrototypeOf(celta,ferrari) //celta tem ferrari como prototipo



const pai = { nome: 'Joao', corCabelo: 'castanho'}

const filha = Object.create(pai)
// filha.nome = 'Ana'
console.log(filha.corCabelo)

const filhaCacula = Object.create(pai, { 
    nome:{ value : 'Bia', writable: false, enumerable: true }
})

console.log(Object.keys(filha)) // vai aparecer vazio pq ele não lista os valores herdados
console.log(Object.keys(filhaCacula))

for (let key in filhaCacula) {
    filhaCacula.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)

}


function MeuObjeto(){}

console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log('Bom dia')
}

obj1.falar()
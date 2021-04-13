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

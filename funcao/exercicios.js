console.log("Operacoes:")
const operacoes = (numero1, numero2) => console.log(`\nSoma = ${numero1 + numero2}\n Subtração= ${numero1 - numero2}\n Multiplicação = ${numero1 * numero2}\n Divisão = ${numero1 / numero2}`)
operacoes(1, 0)
console.log("...................")

const tipoTriangulo  = function(base, ladoA, ladoB) {
    if(base === ladoA  && ladoA === ladoB ){
        return 'Equilátero'
    }else if (base === ladoA || base === ladoB || ladoA === ladoB){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}
console.log("Tipo de triangulo:")
console.log(tipoTriangulo(1,2,3))
console.log(tipoTriangulo(2,2,3))
console.log(tipoTriangulo(1,2,1))
console.log(tipoTriangulo(1,2,2))
console.log(tipoTriangulo(5,5,5))
console.log("...................")

console.log("Potencia")
const potencia = function (base, expoente) {
    return Math.pow(base, expoente)
} 
console.log(portencia(2, 4))
console.log("...................")

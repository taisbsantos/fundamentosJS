
var numero = 3
let segundo_numero = 4
const terceiro_numero = 5
console.log(numero, segundo_numero, terceiro_numero)

console.log("Usando var é possível redeclarar a mesma variavel. Let não permite redeclaração")
console.log("Const não permite atribuição")

var numero = 4
// Esse trecho de código (let segundo_numero = 5) geraria erro por causa da reatribuição
// Esse trecho de código (terceiro_numero = 6) geraria erro por fazer atribuição a uma constante
console.log(numero, segundo_numero, terceiro_numero)


/*
Variaveis definidas com var tem escopo global e escopo de função

Variaveis definidas com let tem escopo global, de função e de bloco
*/

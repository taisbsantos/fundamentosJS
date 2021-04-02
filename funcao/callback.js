const fabricantes = ["Audi","MBW", "Mercedes"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))



const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
notasBaixas2 = notas.filter(function(nota){
    return nota < 7
}) //filter não modifica o array notas, ele devolve um novo.Filter guarda valor  se resultado é true

console.log(notasBaixas2)

//com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//callback no browser
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log(`O evento ${e} ocorreu`)
}

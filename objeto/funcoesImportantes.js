const pessoa = {
    nome: 'Tais', 
    idade: 1, 
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
        console.log(`${element[0]}: ${element[1]}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true, //define se poderá ou não ser listado
    writable: true, //define se poderá ser ou não reescrito
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)

//Surgiu no ES6
const dest = { a: 1}
const ob1 = { b: 2}
const ob2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)




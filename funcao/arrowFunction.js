let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI))


let ola = function (){
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá'
console.log(ola())


//usando arrow function o this não varia
function Animal () {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Animal


let comparaComThis = function (param) {
    console.log(this=== param)
}
comparaComThis (global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis (global) // nesse caso ele para de apontar pro global


let comparaComThisArrow = param => console.log(this === param) 
comparaComThisArrow(global) //aqui não aponta pro global por usar arrow function


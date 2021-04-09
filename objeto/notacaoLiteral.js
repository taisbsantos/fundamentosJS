//melhorias na notacao literal 

//antes da ES6
const a = 1
const b = 2
const c = 3
const obj1 = {a:a, b:b, c:c} 

const obj2 = {a, b, c} //variaveis que receberem mesmo nome não precisam ser explicitadas


const obj3 = {
    funcao1: function(){

    }, 
    // a partir do ES6
    funcao2() {

    }
}
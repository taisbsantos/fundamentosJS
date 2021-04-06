//function declaration (pode ser chamada antes de ser declarada)
function soma (x, y) {
    return x + y
}

//function expression (só pode ser chamada depois de ser declarada)
const sub = function (x, y){
    return x - y
}

//named function expression (só pode ser chamada depois de ser declarada)
const mult = function mult(x, y){
    return x * y
}
const Sequencia = {
    _valor: 1, //a linguagem não impede o acesso, mas é uma convenção usada para dizer que o atributo é privado
    get valor(){
        return this._valor++
    },
    set valor(valor) { //exceto no caso de get/set JS não aceita sobrecarga de metodo
        if(valor > this._valor)
        this._valor = valor
    }
}
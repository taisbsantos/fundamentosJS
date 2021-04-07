class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('José')
p1.falar()


const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${this.nome}`)
    } 
}
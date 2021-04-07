function Pessoa (nome="Tais"){
    this.falar = function (){
        console.log(`Meu nome é ${nome}`)
    }
}

const tais = new Pessoa
tais.falar()
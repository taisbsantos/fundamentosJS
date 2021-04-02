
const pessoa = {
    saudacao: 'bom dia!', 
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

//nesse trecho é como se o this não existisse
const falar = pessoa.falar
falar() 

//para definir o this e avisar de qual objeto é 
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()



function Pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //A cada 1 segundo a função passada será disparada
}
new Pessoa
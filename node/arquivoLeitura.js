const fs = require ('fs')
const { callbackify } = require('util')
const caminho  = __dirname + '/arquivo.json'

//forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse( conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
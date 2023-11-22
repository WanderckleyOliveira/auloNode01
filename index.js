const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.json({
        nome: "Wanderckley",
        sobreNome: "Oliveira"
    })

})

app.get('/ws/69087590/json', (req, res) => {
    res.json({
        CEP: "69087590",
        logradouro: "Rua Pirita",
        completo: "lado impar",
        bairro: "Tancredo Neves",
        localidade: "Manaus",
        Uf: "Amazonas",
        ibge: "35849165164",
        gia: "1004",
        ddd: "92",
        siafi: "7107"
    })

})

app.get('/imagens', (req, res) => {
    res.send("Olá <strong>imagens!</strong>")
})

app.get('/sobre', (req, res) => {
    res.sendFile(path.resolve('sobre.html'))
})

app.get('/perguntas', (req, res) => {
    res.sendFile(path.resolve('perguntas.html'))
})

app.listen(3000, () => {
    console.log('Servidor inciado com sucesso!')
})
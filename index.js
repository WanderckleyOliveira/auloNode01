const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Olá mundo!")
})

app.get('/imagens', (req, res) => {
    res.send("Olá imagens!")
})

app.listen(3000, () => {
    console.log('Servidor inciado com sucesso!')
})
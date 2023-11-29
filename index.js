const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes')
app.use('/', routes)

app.listen(3000, () => {
    console.log('Servidor inciado com sucesso!')
})


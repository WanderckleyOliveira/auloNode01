const { livros } = require('../models')
class LivroController {
    static async index(req, res) {
        const meusLivros = await livros.findAll()
        res.json(meusLivros)
    }


    static async show(req, res) {
        const livro = await livros.findByPk(req.params.id)
        res.json(livro)
    }

    static async store(req, res) {
        const livro = await livros.create({
            nome: req.body.nome,
            autor: req.body.autor,
            ano: req.body.ano
        })

        res.json(livro)
    }

    static async update(req, res) {
        const livro = await livros.findByPk(req.params.id)
        await livro.update({
            nome: req.body.nome,
            ano: req.body.ano,
            autor: req.body.autor
        })
        res.json(livro)
    }

    static async delete(req, res) {
        const livro = await livros.findByPk(req.params.id)
        livro.destroy()
        res.json({
            sucess: true
        })
    }
}

module.exports = LivroController
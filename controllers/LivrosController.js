class LivroController {
    static index(req, res) {
        res.json([
            {
                nome: "O senhor dos anéis",
                autor: "J R Tolkien",
                ano: 1999,
                id: 1
            },

            {
                nome: "Harry Potter",
                autor: "J R Rowling",
                ano: 2000,
                id: 2
            }
        ])
    }


    static show(req, res) {
        const id = req.params.id
        res.json({
            nome: "O senhor dos anéis",
            autor: "J R Tolkien",
            ano: 1999,
            id: id
        })
    }

    static store(req, res) {
        res.json({
            nome: req.body.nome,
            autor: req.body.autor,
            ano: req.body.ano,
            id: 3
        })
    }

    static update(req, res) {
        res.json({
            nome: req.body.nome,
            autor: req.body.autor,
            ano: req.body.ano,
            id: req.params.id
        })
    }

    static delete(req, res) {
        res.json({
            sucess: true
        })
    }
}

module.exports = LivroController
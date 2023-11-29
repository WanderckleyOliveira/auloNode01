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
}

module.exports = LivroController
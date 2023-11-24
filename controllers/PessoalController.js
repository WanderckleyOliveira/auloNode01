class PessoalController {
    static index(req, res) {
        res.json({
            End: "Rua Pirita Nª05 - Tancredo Neves",
            CEP: "69.087-590"

        })
    }
}

module.exports = PessoalController;
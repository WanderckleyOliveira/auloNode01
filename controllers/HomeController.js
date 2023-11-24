class HomeController {
    static index(req, res) {
        res.json({
            nome: "Wanderckley",
            sobreNome: "Oliveira"
        })
    }
}

module.exports = HomeController;
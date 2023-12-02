class HomeController {
    static index(req, res) {
        res.json({
            nome: "Wanderckley",
            sobreNome: "Oliveira dos santos"
        })
    }
}

module.exports = HomeController;
const path = require('path')

class SobreController {
    static index(rew, res) {
        res.sendFile(path.resolve('sobre.html'))
    }
}

module.exports = SobreController;
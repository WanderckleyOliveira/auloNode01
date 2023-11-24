const HomeController = require('./controllers/HomeController');
const PessoalController = require('./controllers/PessoalController');
const SobreController = require('./controllers/SobreController');

const router = require('express').Router();


router.get('/', HomeController.index)
router.get('/sobre', SobreController.index)
router.get('/sobre/pessoal', PessoalController.index)

module.exports = router;
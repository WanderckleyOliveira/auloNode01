const HomeController = require('./controllers/HomeController');
const LivroController = require('./controllers/LivrosController');
const PessoalController = require('./controllers/PessoalController');
const SobreController = require('./controllers/SobreController');

const router = require('express').Router();


router.get('/', HomeController.index)
router.get('/sobre', SobreController.index)
router.get('/pessoal', PessoalController.index)
router.get('/livros', LivroController.index)
router.get('/livros/:id', LivroController.show)


module.exports = router;
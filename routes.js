const HomeController = require('./controllers/HomeController');
const SobreController = require('./controllers/SobreController');

const router = require('express').Router();


router.get('/', HomeController.index)
router.get('/sobre', SobreController.index)



module.exports = router;
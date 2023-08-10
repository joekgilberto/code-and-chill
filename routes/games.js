var express = require('express');
var router = express.Router();
const gamesCtrl = require('../controllers/games')

/* GET users listing. */
router.get('/', gamesCtrl.index);

router.get('/new',gamesCtrl.new);

router.post('/', gamesCtrl.create);

router. get('/:id', gamesCtrl.show);

module.exports = router;

var express = require('express');
var router = express.router();
var bicicletaControler = require('../controllers/bicicleta_controler');

router.get('/', bicicletaControler.bicicleta_list);
module.exports = router;
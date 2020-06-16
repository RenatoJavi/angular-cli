var bicicleta = require('../models/bicicleta_modelo');


exports.bicicleta_list = function(req, res) {
    res.render('bicicletas/idex', {
        bicis: bicicleta.allBicis
    });



}
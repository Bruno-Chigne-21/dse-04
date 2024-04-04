const {Router} = require('express');
const res = require('express/lib/response');
const router = Router();

const clientes = require('../data/clientes');
const productos = require('../data/productos');

// "/"
router.get('/', (req, res) => {
    res.render('index');
});

// "/clientes"
router.get('/clientes', (req, res) => {
    res.render('clientes', { clientes });
});

// "/productos"
router.get('/productos', (req, res) => {
    res.render('productos', { productos });
});

module.exports = router;
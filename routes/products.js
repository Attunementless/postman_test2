const express = require('express');
const router = express.Router();
const products = require('../data/products');


// Nivel 5: GET /list -> listă statică
router.get('/list', (req, res) => {
res.json(products);
});


// Nivel 6: GET /details/:id -> detalii sau 404
router.get('/details/:id', (req, res) => {
const id = Number(req.params.id);
const item = products.find(p => p.id === id);
if (!item) return res.status(404).json({ error: 'Item not found' });
return res.json(item);
});


module.exports = router;
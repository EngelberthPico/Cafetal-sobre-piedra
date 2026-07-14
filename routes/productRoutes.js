const express = require('express');
const router = express.Router();

const { proteger, autorizar } = require('../middleware/authMiddleware');
const { obtenerProductos,
        obtenerProducto,
        crearProducto,
        actualizarProducto,
        eliminarProducto
} = require('../controllers/productController');

router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);

router.post('/', proteger, autorizar('admin'), crearProducto);

router.put('/:id', proteger, autorizar('admin'), actualizarProducto);

router.delete('/:id', proteger, autorizar('admin'), eliminarProducto);

module.exports = router;
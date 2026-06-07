const express = require('express');
const router = express.Router();


const { obtenerPedidos,
        obtenerPedido,
        crearPedido,
        actualizarPedido,
        eliminarPedido
} = require('../controllers/orderController');

router.get('/', obtenerPedidos);
router.get('/:id', obtenerPedido);

router.post('/', crearPedido);

router.put('/:id', actualizarPedido);

router.delete('/:id', eliminarPedido);

module.exports = router;
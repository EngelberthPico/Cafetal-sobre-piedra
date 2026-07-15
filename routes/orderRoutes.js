const express = require('express');
const router = express.Router();

const { proteger, autorizar, identificarUsuarioOpcional } = require('../middleware/authMiddleware');
const { obtenerPedidos,
        obtenerPedido,
        crearPedido,
        actualizarPedido,
        eliminarPedido
} = require('../controllers/orderController');

router.get('/', proteger, autorizar('admin'), obtenerPedidos);
router.get('/:id', proteger, obtenerPedido);

router.post('/', identificarUsuarioOpcional, crearPedido);

router.put('/:id', proteger, autorizar('admin'), actualizarPedido);

router.delete('/:id', proteger, autorizar('admin'), eliminarPedido);

module.exports = router;
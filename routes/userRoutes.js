const express = require('express');
const router = express.Router();

const { proteger, autorizar } = require('../middleware/authMiddleware');
const { obtenerUsuarios,
        obtenerUsuario,
        crearUsuario,
        actualizarUsuario,
        eliminarUsuario
} = require('../controllers/userController');

router.get('/', proteger, autorizar('admin'), obtenerUsuarios);
router.get('/:id', proteger, autorizar('admin'), obtenerUsuario);

router.post('/', proteger, autorizar('admin'), crearUsuario);

router.put('/:id', proteger, autorizar('admin'), actualizarUsuario);

router.delete('/:id', proteger, autorizar('admin'), eliminarUsuario);

module.exports = router;
const express = require('express');
const router = express.Router();

const { proteger, autorizar } = require('../middleware/authMiddleware');
const { crearSolicitud, obtenerSolicitudes } = require('../controllers/distributorController');

// Cualquiera puede aplicar (no requiere sesión).
router.post('/', crearSolicitud);

// Solo un admin puede ver las solicitudes recibidas.
router.get('/', proteger, autorizar('admin'), obtenerSolicitudes);

module.exports = router;

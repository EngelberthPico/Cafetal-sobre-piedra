const express = require('express');
const router = express.Router();

const { proteger } = require('../middleware/authMiddleware');
const { registrar, iniciarSesion, perfil } = require('../controllers/authController');

router.post('/register', registrar);
router.post('/login', iniciarSesion);

router.get('/me', proteger, perfil);

module.exports = router;

const express = require('express');
const router = express.Router();

const { proteger } = require('../middleware/authMiddleware');
const { limitarAuth} = require('../middleware/rateLimiter');
const { registrar, iniciarSesion, perfil } = require('../controllers/authController');

router.post('/register', limitarAuth, registrar);
router.post('/login', limitarAuth, iniciarSesion);

router.get('/me', proteger, perfil);

module.exports = router;

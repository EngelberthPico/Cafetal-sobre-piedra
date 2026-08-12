const rateLimit = require('express-rate-limit');

const limitarAuth = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    exitoso: false,
    mensaje: 'Demasiados intentos. Intenta de nuevo en unos minutos.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const limitarGeneral = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    exitoso: false,
    mensaje: 'Demasiadas solicitudes. Intenta de nuevo en unos minutos.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { limitarAuth, limitarGeneral };
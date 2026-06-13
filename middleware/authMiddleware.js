const jwt = require('jsonwebtoken');
const User = require('../models/User');

const proteger = async (req, res, next) => {
  try {
        let token;

        // PASO 1: Buscar el token en el header Authorization
        // El cliente lo envia asi: "Bearer eyJhbGciOiJI..."
        // Necesitamos extraer solo la parte del token (sin "Bearer ")
        if (req.headers.authorization && 
            req.headers.authorization.startsWith('Bearer '))
            {
            
            // Extraer el token (sin "Bearer ")
            token = req.headers.authorization.split(' ')[1];
        } 

        // PASO 2: Si no hay token, rechazar inmediatamente
        if (!token) {
        return res.status(401).json({ 
            exitoso: false,
            message: 'Acceso denegado. No se proporcionó un token.' 
        });
        }

        // PASO 3: Verificar que el token sea valido
        // jwt.verify() hace dos cosas:
        //   - Verifica que la firma coincida (que nadie lo modifico)
        //   - Verifica que no haya expirado
        // Si algo falla, LANZA UN ERROR y caemos al catch
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);

        // PASO 4: Buscar al usuario en la base de datos
        // El token tiene el id del usuario en su payload
        // Lo buscamos para confirmar que sigue existiendo
        const usuario = await User.findById(decodificado.id);

        if (!usuario) {
        return res.status(401).json({ 
            exitoso: false,
            message: 'El usuario de este token ya no existe.' 
        });
        }

        // PASO 5: Adjuntar el usuario a la peticion
        // Esto es lo que permite que el controlador sepa QUIEN esta pidiendo
        req.usuario = usuario;

        // PASO 6: Dejar pasar al siguiente paso (el controlador)
        next();
       
    }

    catch (error) {
        // Si jwt.verify() fallo (firma invalida o token expirado),
        // caemos aqui
        return res.status(401).json({ 
            exitoso: false,
            message: 'Token invalido o expirado.' 
        });
    }
};

const autorizar = (...rolesPermitidos) => {
    return (req, res, next) => {
        // req.usuario ya esta definido por el middleware proteger
        if (!rolesPermitidos.includes(req.usuario.rol)) {
            return res.status(403).json({ 
                exitoso: false,
                message: 'No tienes permiso para realizar esta acción.' 
            });
        }
        next();
    };
};

module.exports = { proteger, autorizar };
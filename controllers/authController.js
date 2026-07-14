const jwt = require('jsonwebtoken');
const User = require('../models/user');

const crearToken = (usuario) => {
    return jwt.sign(
        { id: usuario._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
    );
};

const registrar = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({
                exitoso: false,
                mensaje: 'Faltan datos: nombre, email y password'
            });
        }

        const existe = await User.findOne({ email });
        if (existe) {
            return res.status(409).json({
                exitoso: false,
                mensaje: 'El email ya está registrado'
            });
        }

        const usuario = await User.create({ nombre, email, password });
        const token = crearToken(usuario);

        res.status(201).json({
            exitoso: true,
            datos: {
                usuario: {
                    id: usuario._id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    rol: usuario.rol
                },
                token
            }
        });
    }
    catch (error) {
        res.status(500).json({
            exitoso: false,
            mensaje: error.message
        });
    }
};

const iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                exitoso: false,
                mensaje: 'Faltan datos: email y password'
            });
        }

        const usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(401).json({
                exitoso: false,
                mensaje: 'Credenciales inválidas'
            });
        }

        const passwordOk = await usuario.compararPassword(password);
        if (!passwordOk) {
            return res.status(401).json({
                exitoso: false,
                mensaje: 'Credenciales inválidas'
            });
        }

        const token = crearToken(usuario);

        res.status(200).json({
            exitoso: true,
            datos: {
                usuario: {
                    id: usuario._id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    rol: usuario.rol
                },
                token
            }
        });
    }
    catch (error) {
        res.status(500).json({
            exitoso: false,
            mensaje: error.message
        });
    }
};

const perfil = async (req, res) => {
    res.status(200).json({
        exitoso: true,
        datos: req.usuario
    });
};

module.exports = {
    registrar,
    iniciarSesion,
    perfil
};

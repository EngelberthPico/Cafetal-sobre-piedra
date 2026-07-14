const User = require ('../models/user');

const obtenerUsuarios = async (req, res) => {
    try {
            const usuarios = await User.find().select('-password');
            res.status(200).json({
                exitoso: true,
                datos: usuarios
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const obtenerUsuario = async (req, res) => {
    try {
            const usuario = await User.findById(req.params.id).select('-password');
            if (!usuario) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Usuario no encontrado"
                });
            }
            res.status(200).json({
                exitoso: true,
                datos: usuario
            });
        }
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const crearUsuario = async (req, res) => {
    try {
            const usuario = await User.create(req.body);
            usuario.password = undefined;
            res.status(201).json({
                exitoso: true,
                datos: usuario
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const actualizarUsuario = async (req, res) => {
    try {
            const usuario = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            ).select('-password');

            if (!usuario) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Usuario no encontrado"
                });
            }

            res.status(200).json({
                exitoso: true,
                datos: usuario
            });
        }
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const eliminarUsuario = async (req, res) => {
    try {
            const usuario = await User.findByIdAndDelete(req.params.id);
            if (!usuario) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Usuario no encontrado"
                });
            }

            res.status(200).json({
                exitoso: true,
                datos: usuario
            });
        }
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};

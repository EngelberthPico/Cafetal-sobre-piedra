const User = require ('../models/user');

const obtenerUsuarios = async (req, res) => {
    try {
            const usuarios = await User.find();
            res.status(200).json({
                exitoso: true,
                datos: usuarios
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: "Error al obtener los usuarios"
            });
        }
};

const obtenerUsuario = async (req, res) => {
    try {
            const usuario = await User.findById(req.params.id);
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
                mensaje: "Error al obtener el usuario"
            });
        }
};

const crearUsuario = async (req, res) => {
    try {
            const usuario = await User.create(req.body);
            res.status(201).json({
                exitoso: true,
                datos: usuario
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: "Error al crear el usuario"
            });
        }
};

const actualizarUsuario = async (req, res) => {
    try {
            const usuario = await User.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true }
            );

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
                mensaje: "Error al actualizar el usuario"
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
                mensaje: "Error al eliminar el usuario"
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

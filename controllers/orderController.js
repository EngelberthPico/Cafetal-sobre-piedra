const Order = require ('../models/order');

const obtenerPedidos = async (req, res) => {
    try {
            const pedidos = await Order.find();
            res.status(200).json({
                exitoso: true,
                datos: pedidos
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: "Error al obtener los pedidos"
            });
        }
};

const obtenerPedido = async (req, res) => {
    try {
            const pedido = await Order.findById(req.params.id);
            if (!pedido) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Pedido no encontrado"
                });
            }
            res.status(200).json({
                exitoso: true,
                datos: pedido
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const crearPedido = async (req, res) => {
    try {
            const pedido = await Order.create(req.body);
            res.status(201).json({
                exitoso: true,
                datos: pedido
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const actualizarPedido = async (req, res) => {
    try {
            const pedido = await Order.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true }
            );

            if (!pedido) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Pedido no encontrado"
                });
            }

            res.status(200).json({
                exitoso: true,
                datos: pedido
            });
        }
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const eliminarPedido = async (req, res) => {
    try {
            const pedido = await Order.findByIdAndDelete(req.params.id);
            if (!pedido) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Pedido no encontrado"
                });
            }

            res.status(200).json({
                exitoso: true,
                datos: pedido
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
    obtenerPedidos,
    obtenerPedido,
    crearPedido,
    actualizarPedido,
    eliminarPedido
};

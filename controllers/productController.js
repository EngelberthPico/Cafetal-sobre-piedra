const Product = require ('../models/product');

const obtenerProductos = async (req, res) => {
    try {
            const productos = await Product.find();
            res.status(200).json({
                exitoso: true,
                datos: productos
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const obtenerProducto = async (req, res) => {
    try {
            const producto = await Product.findById(req.params.id);
            if (!producto) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Producto no encontrado"
                });
            }
            res.status(200).json({
                exitoso: true,
                datos: producto
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const crearProducto = async (req, res) => {
    try {
            const producto = await Product.create(req.body);
            res.status(201).json({
                exitoso: true,
                datos: producto
            });
        } 
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const actualizarProducto = async (req, res) => {
    try {
            const producto = await Product.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true }
            );

            if (!producto) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Producto no encontrado"
                });
            }

            res.status(200).json({
                exitoso: true,
                datos: producto
            });
        }
        catch (error) {
            res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
};

const eliminarProducto = async (req, res) => {
    try {
            const producto = await Product.findByIdAndDelete(req.params.id);
            if (!producto) {
                return res.status(404).json({
                    exitoso: false,
                    mensaje: "Producto no encontrado"
                });
            }

            res.status(200).json({
                exitoso: true,
                datos: producto
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
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};

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
                mensaje: "Error al obtener los productos"
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
                mensaje: "Error al obtener el producto"
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
                mensaje: "Error al crear el producto"
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
                mensaje: "Error al actualizar el producto"
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
                mensaje: "Error al eliminar el producto"
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

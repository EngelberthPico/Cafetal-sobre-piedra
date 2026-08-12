const Order = require ('../models/order');
const Product = require('../models/product');

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

            // Un cliente solo puede ver SUS propios pedidos.
            // El admin puede ver cualquiera.
            const esDueno = pedido.cliente && pedido.cliente.toString() === req.usuario._id.toString();
            if (req.usuario.rol !== 'admin' && !esDueno) {
                return res.status(403).json({
                    exitoso: false,
                    mensaje: "No tienes permiso para ver este pedido"
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
            const { productos, nombreCliente, telefono, direccionEnvio } = req.body;

            // El pedido debe traer al menos una línea de productos.
            if (!Array.isArray(productos) || productos.length === 0) {
                return res.status(400).json({
                    exitoso: false,
                    mensaje: "El pedido no tiene productos"
                });
            }

            // 1) Validar cada línea contra la base de datos y calcular el total
            //    real en el servidor. Nunca se confía en el total que venga del body.
            let total = 0;
            const lineasValidadas = [];

            for (const item of productos) {
                const producto = await Product.findById(item.producto);

                if (!producto) {
                    return res.status(400).json({
                        exitoso: false,
                        mensaje: "Uno de los productos del pedido ya no existe"
                    });
                }

                const cantidad = Number(item.cantidad);
                if (!Number.isInteger(cantidad) || cantidad < 1) {
                    return res.status(400).json({
                        exitoso: false,
                        mensaje: `Cantidad inválida para ${producto.nombre}`
                    });
                }

                if (!producto.disponible) {
                    return res.status(400).json({
                        exitoso: false,
                        mensaje: `${producto.nombre} no está disponible por ahora`
                    });
                }

                if (producto.stock < cantidad) {
                    return res.status(400).json({
                        exitoso: false,
                        mensaje: `Solo quedan ${producto.stock} unidades de ${producto.nombre}`
                    });
                }

                total += producto.precio * cantidad;
                lineasValidadas.push({ producto: producto._id, cantidad, nombre: producto.nombre });
            }

            // 2) Descontar el stock de forma atómica. La condición stock >= cantidad
            //    dentro del findOneAndUpdate evita que dos compras simultáneas dejen
            //    el stock en negativo. Si alguna falla (carrera), se revierte lo ya
            //    descontado y se rechaza todo el pedido.
            const descontados = [];
            for (const linea of lineasValidadas) {
                const actualizado = await Product.findOneAndUpdate(
                    { _id: linea.producto, stock: { $gte: linea.cantidad } },
                    { $inc: { stock: -linea.cantidad } },
                    { new: true }
                );

                if (!actualizado) {
                    // Revertir el stock ya descontado en esta petición.
                    for (const hecho of descontados) {
                        await Product.findByIdAndUpdate(hecho.producto, { $inc: { stock: hecho.cantidad } });
                    }
                    return res.status(400).json({
                        exitoso: false,
                        mensaje: `Ya no hay stock suficiente de ${linea.nombre}`
                    });
                }

                descontados.push(linea);
            }

            // 3) Crear el pedido con el total calculado por el servidor.
            const pedido = await Order.create({
                cliente: req.usuario ? req.usuario._id : null,
                nombreCliente,
                telefono,
                direccionEnvio,
                productos: lineasValidadas.map((l) => ({ producto: l.producto, cantidad: l.cantidad })),
                total
            });

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
        const camposPermitidos = ['estado', 'nombreCliente', 'telefono', 'direccionEnvio'];
        const actualizaciones = {};

        for (const campo of camposPermitidos) {
            if (req.body[campo] !== undefined) {
                actualizaciones[campo] = req.body[campo];
            }
        }

        const pedido = await Order.findByIdAndUpdate(
            req.params.id,
            actualizaciones,
            { new: true, runValidators: true }
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

const DistributorApplication = require('../models/distributorApplication');

const crearSolicitud = async (req, res) => {
    try {
        const { nombre, ciudad, direccion, tipo, nombreContacto, telefono, email, comentario } = req.body;

        if (!nombre || !ciudad || !direccion || !nombreContacto || !telefono || !email) {
            return res.status(400).json({
                exitoso: false,
                mensaje: 'Faltan datos obligatorios'
            });
        }

        const solicitud = await DistributorApplication.create({
            nombre, ciudad, direccion, tipo, nombreContacto, telefono, email, comentario
        });

        res.status(201).json({ exitoso: true, datos: solicitud });
    }
    catch (error) {
        res.status(500).json({ exitoso: false, mensaje: error.message });
    }
};

const obtenerSolicitudes = async (req, res) => {
    try {
        const solicitudes = await DistributorApplication.find().sort({ createdAt: -1 });
        res.status(200).json({ exitoso: true, datos: solicitudes });
    }
    catch (error) {
        res.status(500).json({ exitoso: false, mensaje: error.message });
    }
};

module.exports = { crearSolicitud, obtenerSolicitudes };

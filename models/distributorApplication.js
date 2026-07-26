const mongoose = require('mongoose');

const distributorApplicationSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    ciudad: { type: String, required: true, trim: true },
    direccion: { type: String, required: true, trim: true },
    tipo: { type: String, enum: ['cafeteria', 'tienda', 'otro'], default: 'cafeteria' },
    nombreContacto: { type: String, required: true, trim: true },
    telefono: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    comentario: { type: String, trim: true },
    estado: { type: String, enum: ['pendiente', 'contactado', 'aprobado', 'rechazado'], default: 'pendiente' }
}, { timestamps: true });

module.exports = mongoose.model('DistributorApplication', distributorApplicationSchema);

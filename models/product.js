const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
            trim: true,
            maxlength: [100, 'El nombre no puede tener más de 100 caracteres']
        },

        precio: {
            type: Number,
            required: [true, 'El precio es obligatorio'],
            min: [0, 'El precio no puede ser negativo']
        },

        categoria: {
            type: String,
            enum: ['cafe', 'vino', 'cuchara'],
            required: [true, 'La categoría es obligatoria']
        },


        cantidad: {
            type: Number,
            min: [0, 'La cantidad no puede ser negativa'],
            },

        unidad: {
            type: String,
            enum: ['g', 'ml', 'unidad']
        },

        tipo: {
            type: String,
            enum: ['molido', 'grano']
        },

        color: {
            type: String,
            enum: ['dorado', 'oro rosa']
        },

        disponible: {
            type: Boolean,
            default: true
        },

        descripcion: {
            type: String,
            trim: true,            
        },
        
    }, 

    {timestamps: true}
);

module.exports = mongoose.model('Product', productSchema);



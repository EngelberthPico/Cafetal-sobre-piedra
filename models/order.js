const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'El cliente es obligatorio']
    },
    productos: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: [true, 'El producto es obligatorio']
        },
        cantidad: {
          type: Number,
          required: [true, 'La cantidad es obligatoria'],
          min: [1, 'La cantidad no puede ser menor a 1']
        }
      }
    ],

    estado: {
      type: String,
      enum: ['pendiente', 'enviado', 'entregado'],
      default: 'pendiente'
    },

    total: {
      type: Number,
      required: [true, 'El total es obligatorio']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);

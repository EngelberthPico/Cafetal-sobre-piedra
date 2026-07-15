require('dotenv').config();

const mongoose = require('mongoose');
const conectarDB = require('../config/db');
const User = require('../models/user');

const crearAdmin = async () => {
    try {
        await conectarDB();

        const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NOMBRE } = process.env;

        if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !ADMIN_NOMBRE) {
            throw new Error('Faltan ADMIN_EMAIL, ADMIN_PASSWORD o ADMIN_NOMBRE en el archivo .env');
        }

        const email = ADMIN_EMAIL.toLowerCase();
        const usuarioExistente = await User.findOne({ email });

        if (usuarioExistente) {
            if (usuarioExistente.rol === 'admin') {
                console.log(`El usuario ${email} ya es admin. No se hizo ningún cambio.`);
            } else {
                usuarioExistente.rol = 'admin';
                await usuarioExistente.save();
                console.log(`El usuario ${email} fue actualizado a admin.`);
            }
        } else {
            await User.create({
                nombre: ADMIN_NOMBRE,
                email,
                password: ADMIN_PASSWORD,
                rol: 'admin'
            });
            console.log(`Usuario admin ${email} creado correctamente.`);
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('Error al crear el admin:', error.message);
        process.exit(1);
    }
};

crearAdmin();

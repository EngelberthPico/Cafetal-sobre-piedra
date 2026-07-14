const dns = require('dns');
const mongoose = require('mongoose');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const conectarDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error('Falta la variable MONGODB_URI en el archivo .env');
    }

    await mongoose.connect(uri, { family: 4 });
    console.log('Connected to MongoDB');
};

module.exports = conectarDB;

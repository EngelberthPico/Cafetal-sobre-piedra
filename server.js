require('dotenv').config();

const app = require('./app');
const conectarDB = require('./config/db');

const PORT = process.env.PORT || 3000;

const iniciar = async () => {
    try {
        await conectarDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('No se pudo iniciar el servidor:', error.message);
        process.exit(1);
    }
};

iniciar();

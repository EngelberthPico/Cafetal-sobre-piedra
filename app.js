const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const distributorRoutes = require('./routes/distributorRoutes');

const app = express();

app.use(helmet());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((origen) => origen.trim())
    .filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/distributors', distributorRoutes);

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const productsRouter = require('./routes/products');


const app = express();
app.use(morgan('dev'));
app.use(express.json());


// Public routes
app.use('/', productsRouter);


// 404 handler
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
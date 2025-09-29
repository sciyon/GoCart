import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config({ path: './config/config.env' });

import productRoutes from './routes/products.js';

app.use('/api/v1', productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './config/dbConnect.js';

const app = express();
app.use(express.json());

dotenv.config({ path: './config/config.env' });
connectDatabase();


// Import Routes
import productRoutes from './routes/products.js';

app.use('/api/v1', productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

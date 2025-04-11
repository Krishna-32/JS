// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Parse JSON

app.use('/api', itemRoutes); // Mount routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
  
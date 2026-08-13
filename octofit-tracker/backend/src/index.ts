import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', port });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Backend server running on port ${port}`);
  console.log(`MongoDB connection: mongodb://localhost:27017/octofit_db`);
});

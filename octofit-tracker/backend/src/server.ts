import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import usersRouter from './api/users.js';
import teamsRouter from './api/teams.js';
import activitiesRouter from './api/activities.js';
import leaderboardRouter from './api/leaderboard.js';
import workoutsRouter from './api/workouts.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Codespaces-aware API URL support
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running',
    port,
    baseUrl,
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

// Start server after database connection
async function startServer() {
  const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
  
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');
    
    app.listen(port, () => {
      console.log(`🚀 Backend server running on port ${port}`);
      console.log(`📍 API Base URL: ${baseUrl}`);
      console.log(`🗄️  MongoDB connection: mongodb://localhost:27017/octofit_db`);
      console.log(`\nAvailable endpoints:`);
      console.log(`  GET  /api/health`);
      console.log(`  GET  /api/users`);
      console.log(`  GET  /api/teams`);
      console.log(`  GET  /api/activities`);
      console.log(`  GET  /api/leaderboard`);
      console.log(`  GET  /api/workouts`);
    });
  } catch (error) {
    console.error('Error connecting to octofit_db:', error);
    process.exit(1);
  }
}

startServer();

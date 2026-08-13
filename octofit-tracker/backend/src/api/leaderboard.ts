import { Router } from 'express';
import Leaderboard from '../models/Leaderboard.js';

const router = Router();

// GET /api/leaderboard - Get leaderboard standings
router.get('/', async (req, res) => {
  try {
    const standings = await Leaderboard.find()
      .sort({ rank: 1 })
      .populate('userId teamId', 'username name email');
    res.json({ message: 'Get leaderboard', standings, count: standings.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// GET /api/leaderboard/user/:userId - Get user standings
router.get('/user/:userId', async (req, res) => {
  try {
    const standing = await Leaderboard.findOne({ userId: req.params.userId }).populate(
      'userId',
      'username email'
    );
    if (!standing) {
      return res.status(404).json({ error: 'User leaderboard entry not found' });
    }
    res.json({ message: `Get user leaderboard`, standing });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user standings' });
  }
});

// GET /api/leaderboard/team/:teamId - Get team standings
router.get('/team/:teamId', async (req, res) => {
  try {
    const standing = await Leaderboard.findOne({ teamId: req.params.teamId }).populate(
      'teamId',
      'name'
    );
    if (!standing) {
      return res.status(404).json({ error: 'Team leaderboard entry not found' });
    }
    res.json({ message: `Get team leaderboard`, standing });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team standings' });
  }
});

// GET /api/leaderboard/:id - Get leaderboard entry by ID
router.get('/:id', async (req, res) => {
  try {
    const entry = await Leaderboard.findById(req.params.id).populate(
      'userId teamId',
      'username name email'
    );
    if (!entry) {
      return res.status(404).json({ error: 'Leaderboard entry not found' });
    }
    res.json({ message: `Get leaderboard entry ${req.params.id}`, entry });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard entry' });
  }
});

export default router;

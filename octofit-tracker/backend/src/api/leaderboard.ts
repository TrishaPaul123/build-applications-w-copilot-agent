import { Router } from 'express';

const router = Router();

// GET /api/leaderboard - Get leaderboard standings
router.get('/', (req, res) => {
  res.json({ message: 'Get leaderboard', standings: [] });
});

// GET /api/leaderboard/team - Get team leaderboard
router.get('/team', (req, res) => {
  res.json({ message: 'Get team leaderboard', standings: [] });
});

// GET /api/leaderboard/:id - Get leaderboard entry by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get leaderboard entry ${req.params.id}`, entryId: req.params.id });
});

export default router;

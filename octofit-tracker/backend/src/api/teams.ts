import { Router } from 'express';

const router = Router();

// GET /api/teams - Get all teams
router.get('/', (req, res) => {
  res.json({ message: 'Get all teams', teams: [] });
});

// POST /api/teams - Create a new team
router.post('/', (req, res) => {
  res.json({ message: 'Create team', team: req.body });
});

// GET /api/teams/:id - Get team by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get team ${req.params.id}`, teamId: req.params.id });
});

// PUT /api/teams/:id - Update team
router.put('/:id', (req, res) => {
  res.json({ message: `Update team ${req.params.id}`, teamId: req.params.id, data: req.body });
});

// DELETE /api/teams/:id - Delete team
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete team ${req.params.id}`, teamId: req.params.id });
});

export default router;

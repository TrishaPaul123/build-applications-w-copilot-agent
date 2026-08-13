import { Router } from 'express';
import Team from '../models/Team.js';

const router = Router();

// GET /api/teams - Get all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find().populate('members createdBy', 'username email');
    res.json({ message: 'Get all teams', teams, count: teams.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

// POST /api/teams - Create a new team
router.post('/', async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    await team.populate('members createdBy', 'username email');
    res.status(201).json({ message: 'Create team', team });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create team' });
  }
});

// GET /api/teams/:id - Get team by ID
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate(
      'members createdBy',
      'username email'
    );
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ message: `Get team ${req.params.id}`, team });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team' });
  }
});

// PUT /api/teams/:id - Update team
router.put('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate('members createdBy', 'username email');
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ message: `Update team ${req.params.id}`, team });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update team' });
  }
});

// DELETE /api/teams/:id - Delete team
router.delete('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ message: `Delete team ${req.params.id}`, team });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team' });
  }
});

export default router;

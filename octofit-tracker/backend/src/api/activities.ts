import { Router } from 'express';

const router = Router();

// GET /api/activities - Get all activities
router.get('/', (req, res) => {
  res.json({ message: 'Get all activities', activities: [] });
});

// POST /api/activities - Log a new activity
router.post('/', (req, res) => {
  res.json({ message: 'Log activity', activity: req.body });
});

// GET /api/activities/:id - Get activity by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get activity ${req.params.id}`, activityId: req.params.id });
});

// PUT /api/activities/:id - Update activity
router.put('/:id', (req, res) => {
  res.json({ message: `Update activity ${req.params.id}`, activityId: req.params.id, data: req.body });
});

// DELETE /api/activities/:id - Delete activity
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete activity ${req.params.id}`, activityId: req.params.id });
});

export default router;

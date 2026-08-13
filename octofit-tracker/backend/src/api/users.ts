import { Router } from 'express';

const router = Router();

// GET /api/users - Get all users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users', users: [] });
});

// POST /api/users - Create a new user
router.post('/', (req, res) => {
  res.json({ message: 'Create user', user: req.body });
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id}`, userId: req.params.id });
});

// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
  res.json({ message: `Update user ${req.params.id}`, userId: req.params.id, data: req.body });
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user ${req.params.id}`, userId: req.params.id });
});

export default router;

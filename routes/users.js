// New API endpoint for user management
const express = require('express');
const router = express.Router();

// GET /api/users - Get all users
router.get('/users', (req, res) => {
  res.json({
    message: 'Users endpoint - Feature branch demo',
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
  });
});

// POST /api/users - Create new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'Name and email are required'
    });
  }

  res.status(201).json({
    message: 'User created successfully',
    user: {
      id: Date.now(), // Simple ID generation
      name,
      email
    }
  });
});

module.exports = router;
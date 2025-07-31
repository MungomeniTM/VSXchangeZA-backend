const express = require('express');
const router = express.Router();
const CollaborateRequest = require('../models/CollaborateRequest');

// Send a collaboration request
router.post('/request', async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const existing = await CollaborateRequest.findOne({ senderId, receiverId });
    if (existing) return res.status(400).json({ message: 'Request already sent.' });

    const request = new CollaborateRequest({ senderId, receiverId });
    await request.save();

    res.status(201).json({ message: 'Collaboration request sent.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;

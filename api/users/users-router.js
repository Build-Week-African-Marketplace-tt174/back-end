const express = require('express');
const restricted = require('../auth/restricted-middleware');
const router = express.Router();

const Items = require('./users-model');

// GET /api/users/:id
router.get('/:id', restricted, async (req, res) => {
    res.status(200).json({ router: 'working' })
});

// router.post('/', restricted, async (req, res) => {
//     const body = req.body;
//     if (!body.name || !body.price) {
//         res.status(400).json({ message: "Body must include name and price." })
//     }
//     try {
//         const newItem = await Items.add(req.body);
//         res.status(201).json(newItem)
//     } catch (err) {
//         res.status(500).json({ message: "Server failed to add new item." })
//     }
// });

module.exports = router
const express = require('express');
const router = express.Router();
const restricted = require('../auth/restricted-middleware');

const Items = require('./items-model');

// GET /api/items
router.get('/', async (req, res) => {
    try {
        const items = await Items.get();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: "Server failed to get all items." })
    }
});

// GET /api/items/:id
router.get('/:id', async (req, res) => {
    try {
        const item = await Items.getById(req.params.id)
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: "Id not found." })
        }
    } catch (err) {
        res.status(500).json({ message: "Server failed to get specified item." })
    }
});

// POST /api/items
router.post('/', restricted, async (req, res) => {
    const body = req.body;
    if (!body.name || !body.price) {
        res.status(400).json({ message: "Body must include name and price." })
    }
    try {
        const newItem = await Items.add(req.body);
        res.status(201).json(newItem)
    } catch (err) {
        res.status(500).json({ message: "Server failed to add new item." })
    }
});

// PUT

// DELETE

module.exports = router;
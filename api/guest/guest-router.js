const express = require('express');
const router = express.Router();

const Items = require('./guest-model');

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

module.exports = router;
const express = require('express');
const restricted = require('../auth/restricted-middleware');
const router = express.Router();

const Items = require('./users-model');

// GET /api/users/:user/items
router.get('/:user/items', restricted, async (req, res) => {
    try {
        const userItems = await Items.get(req.params.user);
        res.status(200).json(userItems);
    } catch (err) {
        res.status(500).json({ message: "Server failed to get user items", error: err });
    }
});

// GET /api/users/:user/items/:id
router.get('/:user/items/:id', restricted, async (req, res) => {
    try {
        const userItem = await Items.getById(req.params.user, req.params.id);
        res.status(200).json(userItem);
    } catch (err) {
        res.status(500).json({ message: "Server failed to get user item", error: err });
    }
});

// PUT /api/users/:user/items/:id
router.put('/:user/items/:id', restricted, async (req, res) => {
    try {
        const updatedItem = await Items.update(req.params.user, req.params.id, req.body);
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: "Server failed to update item", error: err })
    }
});

module.exports = router
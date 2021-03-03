const express = require('express');
const Categories = require('./categories-model');
const router = express.Router();

// GET  /api/categories
// returns list of all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.getAll();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: "Server failed to get all categories", error: err });
    }
});

// GET /api/categories/:id
// returns category by specified id
router.get('/:id', async (req, res) => {
    try {
        const category = await Categories.getById(req.params.id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: "Invalid id" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server failed to get specified category", error: err });
    }
})

module.exports = router;
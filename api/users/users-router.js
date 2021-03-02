const express = require('express');
const restricted = require('../auth/restricted-middleware');
const Items = require('./users-model');
const router = express.Router();

// GET /api/users/:user
// returns user and their list of items
router.get('/:user', restricted, checkUser, async (req, res) => {
    try {
        const userId = req.params.user;
        const user = await Items.getUserById(userId);
        const items = await Items.get(userId);
        res.status(200).json({ user: user, items: items })
    } catch (err) {
        res.status(500).json({ message: "Server failed to get user and their items" })
    }
})

// GET /api/users/:user/items
// returns list of users items
router.get('/:user/items', restricted, checkUser, async (req, res) => {
    try {
        const userItems = await Items.get(req.params.user);
        res.status(200).json(userItems);
    } catch (err) {
        res.status(500).json({ message: "Server failed to get user items", error: err });
    }
});

// GET /api/users/:user/items/:id
// returns users item
router.get('/:user/items/:id', restricted, checkUser, checkId, async (req, res) => {
    try {
        const userItem = await Items.getById(req.params.user, req.params.id);
        res.status(200).json(userItem);
    } catch (err) {
        res.status(500).json({ message: "Server failed to get user item", error: err });
    }
});

// PUT /api/users/:user/items/:id
// updates users item
router.put('/:user/items/:id', restricted, checkUser, checkId, checkPayload, async (req, res) => {
    try {
        const updatedItem = await Items.update(req.params.user, req.params.id, req.body);
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: "Server failed to update item", error: err })
    }
});

// POST /api/users/:user/items
// adds new item to users item list
router.post('/:user/items', restricted, checkUser, checkPayload, async (req, res) => {
    try {
        const newItem = await Items.add(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: "Server failed to add new item", error: err })
    }
});

// DELETE /api/users/:user/items/:id
// removes item from users item list
router.delete('/:user/items/:id', restricted, checkUser, checkId, async (req, res) => {
    try {
        const deleted = await Items.remove(req.params.user, req.params.id);
        res.status(200).json({ message: "Item was successfully removed" })
    } catch (err) {
        res.status(500).json({ message: "Server failed to remove item" })
    }
})

// custom middleware
async function checkUser(req, res, next) {
    const user = req.params.user;
    const data = await Items.getUserById(user);
    if (data) {
        next();
    } else {
        res.status(404).json({ message: "Specified user not found" });
    }
};

async function checkId(req, res, next) {
    const id = req.params.id;
    const user = req.params.user;
    const data = await Items.getById(user, id);
    if (data) {
        next();
    } else {
        res.status(404).json({ message: "Item with specified id belonging to specified user does not exist" })
    }
}

async function checkPayload(req, res, next) {
    const body = req.body;
    if (!body.name || !body.price || !body.user_id) {
        res.status(400).json({ message: "Body must include name, price, and user_id" })
    } else {
        next();
    }
};

module.exports = router
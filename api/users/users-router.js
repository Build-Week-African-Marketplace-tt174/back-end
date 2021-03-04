const express = require('express');
const restricted = require('../middleware/restricted-middleware');
const { checkUser, checkId, checkPayload } = require('../middleware');
const Items = require('./usersItems-model');
const Users = require('./users-model');
const router = express.Router();

// GET /api/users
// returns all users
router.get('/', restricted, async (req, res) => {
    try {
        const users = await Users.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Server failed to get all users", error: err })
    }
});

// GET /api/users/:user
// returns specified user
router.get('/:user', restricted, checkUser, async (req, res) => {
    try {
        const user = await Users.getUserById(req.params.user);
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: "Server failed to get user and their items", error: err })
    }
});

// DELETE /api/users/:user
// deletes user and all their items
router.delete('/:user', restricted, checkUser, async (req, res) => {
    try {
        const deleted = await Users.remove(req.params.user);
        res.status(200).json({ message: "User was successfully removed"});
    } catch (err) {
        res.status(500).json({ message: "Server failed to deleted user" })
    }
});

// GET /api/users/:user/items
// returns all of users items
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
        res.status(500).json({ message: "Server failed to remove item", error: err })
    }
})

module.exports = router